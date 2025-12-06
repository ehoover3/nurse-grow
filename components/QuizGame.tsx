"use client";

import { useState, useEffect } from "react";
import { Quiz, TooltipTerm } from "../data/quizzes";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import shuffleArray from "../utils/shuffleArray";
import { Variant } from "../components/Button";
import Tooltip from "./Tooltip";

type QuizGameProps = {
  quiz: Quiz;
};

type MatchState = {
  matched: Record<string, string>; // correct matches {left: right}
  selectedLeft: string | null;
  selectedRight: string | null;
  wrongAttempt: boolean;
};

enum QuizState {
  SELECT_ANSWER,
  CHECK_BUTTON,
  CONTINUE_BUTTON,
  VIEW_SUMMARY,
}

type AnswerOptionsProps = {
  currentQuestion: Quiz["questions"][number];
  quizState: QuizState;
  userSelectedAnswer: string | null;
  setUserSelectedAnswer: (answer: string) => void;
  tooltipTerms?: TooltipTerm[];
};

type MatchingQuestionProps = {
  pairs: { left: string; right: string }[];
  userMatches: Record<string, string>;
  setUserMatches: (m: Record<string, string>) => void;
  disabled: boolean;
};

const shuffleArrayCopy = <T,>(arr: T[]): T[] => {
  return [...arr].sort(() => Math.random() - 0.5);
};

function MatchingQuestion({ pairs, userMatches, setUserMatches, disabled }: MatchingQuestionProps) {
  // Extract original left/right
  const originalLeft = pairs.map((p) => p.left);
  const originalRight = pairs.map((p) => p.right);

  // Shuffle each side independently ONCE
  const [leftSide] = useState<string[]>(() => shuffleArrayCopy(originalLeft));
  const [rightSide] = useState<string[]>(() => shuffleArrayCopy(originalRight));

  const [state, setState] = useState<MatchState>({
    matched: {},
    selectedLeft: null,
    selectedRight: null,
    wrongAttempt: false,
  });

  const selectLeft = (left: string) => {
    if (state.matched[left]) return;
    if (disabled) return;
    setState((s) => ({ ...s, selectedLeft: left }));
  };

  const selectRight = (right: string) => {
    if (Object.values(state.matched).includes(right)) return;
    if (disabled) return;
    setState((s) => ({ ...s, selectedRight: right }));
  };

  useEffect(() => {
    if (!state.selectedLeft || !state.selectedRight) return;

    const correctPair = pairs.find((p) => p.left === state.selectedLeft && p.right === state.selectedRight);

    if (correctPair) {
      // Correct match
      const newMatched = {
        ...state.matched,
        [correctPair.left]: correctPair.right,
      };

      setState({
        matched: newMatched,
        selectedLeft: null,
        selectedRight: null,
        wrongAttempt: false,
      });

      setUserMatches(newMatched);
    } else {
      // Flash red
      setState((s) => ({ ...s, wrongAttempt: true }));
      const t = setTimeout(() => {
        setState((s) => ({
          ...s,
          selectedLeft: null,
          selectedRight: null,
          wrongAttempt: false,
        }));
      }, 700);

      return () => clearTimeout(t);
    }
  }, [state.selectedLeft, state.selectedRight]);

  const isMatchedLeft = (l: string) => state.matched[l] !== undefined;
  const isMatchedRight = (r: string) => Object.values(state.matched).includes(r);

  const getLeftStyles = (left: string) => {
    const sel = state.selectedLeft === left;
    const match = isMatchedLeft(left);
    const wrong = state.wrongAttempt && sel;

    return ["border rounded p-2 cursor-pointer text-left transition", match && "bg-green-300 border-green-500 opacity-70", sel && !match && "bg-green-200 border-green-500", wrong && "bg-red-300 border-red-500", !sel && !match && !wrong && "bg-white"].filter(Boolean).join(" ");
  };

  const getRightStyles = (right: string) => {
    const sel = state.selectedRight === right;
    const match = isMatchedRight(right);
    const wrong = state.wrongAttempt && sel;

    return ["border rounded p-2 cursor-pointer text-left transition", match && "bg-green-300 border-green-500 opacity-70", sel && !match && "bg-green-200 border-green-500", wrong && "bg-red-300 border-red-500", !sel && !match && !wrong && "bg-white"].filter(Boolean).join(" ");
  };

  return (
    <div className='grid grid-cols-2 gap-6 mt-4'>
      {/* LEFT COLUMN */}
      <div className='flex flex-col gap-3'>
        {leftSide.map((left) => (
          <div key={left} className={getLeftStyles(left)} onClick={() => selectLeft(left)}>
            {left}
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className='flex flex-col gap-3'>
        {rightSide.map((right) => (
          <div key={right} className={getRightStyles(right)} onClick={() => selectRight(right)}>
            {right}
          </div>
        ))}
      </div>
    </div>
  );
}

export function addTooltips(text: string, tooltipTerms: TooltipTerm[] = []) {
  return text.split(/(\{.*?\})/g).map((part, i) => {
    const match = part.match(/^\{(.+?)\}$/);
    if (!match) return part;
    const label = match[1];
    const term = tooltipTerms.find((t) => t.label === label);
    if (!term) return label;

    return <Tooltip key={i} label={label} meaning={term.meaning} />;
  });
}

const shuffleAnswerOptions = (questions: Quiz["questions"]): Quiz["questions"] => {
  return questions.map((q) => ({
    ...q,
    options: q.options ? shuffleArray(q.options) : q.options,
  }));
};

function Question({ question, tooltipTerms }: { question: string; tooltipTerms?: TooltipTerm[] }) {
  return <p className='text-lg mb-4'>{addTooltips(question, tooltipTerms ?? [])}</p>;
}

function AnswerOptions({ currentQuestion, quizState, userSelectedAnswer, setUserSelectedAnswer, tooltipTerms }: AnswerOptionsProps) {
  if (!currentQuestion.options) return null;

  return (
    <div className='grid gap-2'>
      {currentQuestion.options.map((option) => {
        const isSelecting = quizState === QuizState.SELECT_ANSWER;
        const isShowingResults = quizState === QuizState.CONTINUE_BUTTON;
        const isUserPick = userSelectedAnswer === option;
        const isCorrect = option === currentQuestion.answer;

        let variant: Variant = "white";

        if (isSelecting && isUserPick) variant = "darkGray";
        else if (isShowingResults && isCorrect) variant = "brightGreen";
        else if (isShowingResults && isUserPick) variant = "red";

        return (
          <Button key={option} onClick={() => isSelecting && setUserSelectedAnswer(option)} disabled={!isSelecting} variant={variant} className='border w-full text-left p-2 rounded'>
            {addTooltips(option, tooltipTerms ?? [])}
          </Button>
        );
      })}
    </div>
  );
}

export default function QuizGame({ quiz }: QuizGameProps) {
  const router = useRouter();

  const [questionsToAsk, setQuestionsToAsk] = useState<Quiz["questions"]>(quiz.questions);
  const [isMounted, setIsMounted] = useState(false);
  const [questionsToAskIndex, setQuestionsToAskIndex] = useState(0);
  const [questionsToRetry, setQuestionsToRetry] = useState<Quiz["questions"]>([]);
  const [userSelectedAnswer, setUserSelectedAnswer] = useState<string | null>(null);
  const [userMatches, setUserMatches] = useState<Record<string, string>>({});
  const [quizState, setQuizState] = useState<QuizState>(QuizState.SELECT_ANSWER);
  const [score, setScore] = useState(0);

  const currentQuestion = questionsToAsk[questionsToAskIndex] || quiz.questions[0];

  useEffect(() => {
    if (!isMounted) {
      setQuestionsToAsk(shuffleAnswerOptions(quiz.questions));
      setIsMounted(true);
    }
  }, [quiz.questions, isMounted]);

  const handleCheck = {
    check: () => {
      // MULTIPLE CHOICE
      if (currentQuestion.type === "multiple-choice") {
        if (!userSelectedAnswer) return;
        const isCorrect = userSelectedAnswer === currentQuestion.answer;
        if (isCorrect) handleCheck.correct();
        else handleCheck.incorrect();
      }

      // MATCHING QUESTIONS
      if (currentQuestion.type === "matching") {
        const correct = currentQuestion.pairs!.every((pair) => userMatches[pair.left] === pair.right);
        if (correct) handleCheck.correct();
        else handleCheck.incorrect();
      }

      setQuizState(QuizState.CONTINUE_BUTTON);
    },
    correct: () => setScore((prev) => prev + 1),
    incorrect: () => setQuestionsToRetry((prev) => [...prev, currentQuestion]),
  };

  const handleContinue = {
    continue: () => {
      const nextIndex = questionsToAskIndex + 1;

      if (nextIndex < questionsToAsk.length) return handleContinue.askNext();
      if (questionsToRetry.length > 0) return handleContinue.reask();

      setQuizState(QuizState.VIEW_SUMMARY);
    },
    askNext: () => {
      setQuestionsToAskIndex((i) => i + 1);
      setUserSelectedAnswer(null);
      setUserMatches({});
      setQuizState(QuizState.SELECT_ANSWER);
    },
    reask: () => {
      setQuestionsToAsk(shuffleAnswerOptions(questionsToRetry));
      setQuestionsToAskIndex(0);
      setQuestionsToRetry([]);
      setUserSelectedAnswer(null);
      setUserMatches({});
      setQuizState(QuizState.SELECT_ANSWER);
    },
  };

  const restartQuiz = () => {
    setQuestionsToAsk(shuffleAnswerOptions(quiz.questions));
    setQuestionsToAskIndex(0);
    setUserSelectedAnswer(null);
    setUserMatches({});
    setQuizState(QuizState.SELECT_ANSWER);
    setQuestionsToRetry([]);
    setScore(0);
  };

  const exitQuiz = () => router.push("/");

  const quizScreen = (
    <div className='mt-8'>
      <h2 className='text-2xl font-bold mb-2'>
        Question {questionsToAskIndex + 1} / {quiz.questions.length}
      </h2>

      <Question question={currentQuestion.question} tooltipTerms={currentQuestion.tooltipTerms ?? []} />

      {/* MULTIPLE CHOICE */}
      {currentQuestion.type === "multiple-choice" && <AnswerOptions currentQuestion={currentQuestion} quizState={quizState} userSelectedAnswer={userSelectedAnswer} setUserSelectedAnswer={setUserSelectedAnswer} tooltipTerms={currentQuestion.tooltipTerms ?? []} />}

      {/* MATCHING */}
      {currentQuestion.type === "matching" && <MatchingQuestion pairs={currentQuestion.pairs ?? []} userMatches={userMatches} setUserMatches={setUserMatches} disabled={quizState !== QuizState.SELECT_ANSWER} />}

      <div className='mt-4'>
        {quizState === QuizState.SELECT_ANSWER ? (
          <Button variant='skyBlue' onClick={handleCheck.check} disabled={(currentQuestion.type === "multiple-choice" && !userSelectedAnswer) || (currentQuestion.type === "matching" && Object.keys(userMatches).length !== currentQuestion.pairs?.length)}>
            CHECK
          </Button>
        ) : (
          <Button variant='skyBlue' onClick={handleContinue.continue}>
            CONTINUE
          </Button>
        )}

        {quizState === QuizState.CONTINUE_BUTTON && currentQuestion.answerImage && (
          <div className='mt-4'>
            <img src={currentQuestion.answerImage} alt='Answer explanation' className='max-w-full h-auto rounded border' />
          </div>
        )}

        {quizState === QuizState.CONTINUE_BUTTON && currentQuestion.answerExplanation && <div className='mt-4'>{currentQuestion.answerExplanation}</div>}
      </div>
    </div>
  );

  const summaryScreen = (
    <div className='flex flex-col items-center gap-4 mt-8'>
      <h2 className='text-2xl font-bold mb-2'>Quiz Finished!</h2>
      <p className='text-xl mb-4'>
        You answered {score} / {quiz.questions.length} correctly on the first attempt
      </p>

      <div className='flex gap-4'>
        <button onClick={restartQuiz} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
          Retry Quiz
        </button>

        <button onClick={exitQuiz} className='px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition'>
          Back to Quizzes
        </button>
      </div>
    </div>
  );

  return (
    <div className='p-8 relative'>
      <button onClick={exitQuiz} className='absolute top-4 left-4 text-xl font-bold text-gray-700 hover:text-gray-900' aria-label='Back to quiz list'>
        ✕
      </button>

      {quizState !== QuizState.VIEW_SUMMARY ? quizScreen : summaryScreen}
    </div>
  );
}
