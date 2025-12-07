"use client";

import { useState, useEffect } from "react";
import Button, { Variant } from "../components/Button";
import { useRouter } from "next/navigation";
import { QuizType } from "../data/quizzes";
import shuffleArray from "../utils/shuffleArray";

enum QuizState {
  SELECT_ANSWER,
  CHECK_BUTTON,
  CONTINUE_BUTTON,
  VIEW_SUMMARY,
}

type MultipleChoiceProps = {
  currentQuestion: QuizType["questions"][number];
  quizState: QuizState;
  userSelectedAnswer: string | null;
  setUserSelectedAnswer: (answer: string) => void;
  tooltipTerms?: { label: string; meaning: string }[];
};

type MatchingState = {
  matched: Record<string, string>; // correct matches {left: right}
  selectedLeft: string | null;
  selectedRight: string | null;
  wrongAttempt: boolean;
};

type MatchingProps = {
  pairs: { left: string; right: string }[];
  userMatches: Record<string, string>;
  setUserMatches: (m: Record<string, string>) => void;
  disabled: boolean;
};

function Tooltip({ label, meaning }: { label: string; meaning: string }) {
  return (
    <span className='relative group cursor-help font-semibold underline decoration-dotted'>
      {label}
      <span className='absolute left-0 top-full mt-1 hidden group-hover:block p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-20 w-max'>{meaning}</span>
    </span>
  );
}

const shuffleArrayCopy = <T,>(arr: T[]): T[] => {
  return [...arr].sort(() => Math.random() - 0.5);
};

function addTooltips(text: string, tooltipTerms: { label: string; meaning: string }[] = []) {
  return text.split(/(\{.*?\})/g).map((part, i) => {
    const match = part.match(/^\{(.+?)\}$/);
    if (!match) return part;
    const label = match[1];
    const term = tooltipTerms.find((t) => t.label === label);
    if (!term) return label;
    return <Tooltip key={i} label={label} meaning={term.meaning} />;
  });
}

const shuffleAnswerOptions = (questions: QuizType["questions"]): QuizType["questions"] => {
  return questions.map((q) => ({
    ...q,
    options: q.options ? shuffleArray(q.options) : q.options,
  }));
};

function Question({ question, tooltipTerms }: { question: string; tooltipTerms?: { label: string; meaning: string }[] }) {
  return <p className='text-lg mb-4'>{addTooltips(question, tooltipTerms ?? [])}</p>;
}

function MultipleChoice({ currentQuestion, quizState, userSelectedAnswer, setUserSelectedAnswer, tooltipTerms }: MultipleChoiceProps) {
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

export function Matching({ pairs, setUserMatches, disabled }: MatchingProps) {
  // Extract original left/right
  const originalLeft = pairs.map((p) => p.left);
  const originalRight = pairs.map((p) => p.right);
  // Shuffle each side independently ONCE
  const [leftSide] = useState<string[]>(() => shuffleArrayCopy(originalLeft));
  const [rightSide] = useState<string[]>(() => shuffleArrayCopy(originalRight));
  const [state, setState] = useState<MatchingState>({
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

export function Header(exitQuiz: any) {
  return (
    <header className='w-full flex items-center justify-between p-4 border-b border-gray-200'>
      <button onClick={exitQuiz} aria-label='Back to quiz list'>
        ✕
      </button>
      <div>Progress Bar</div>
      <div>Points</div>
    </header>
  );
}

type SummaryScreenProps = {
  score: number;
  totalQuestions: number;
  restartQuiz: () => void;
  exitQuiz: () => void;
};

type AskQuestionModeProps = {
  currentQuestion: QuizType["questions"][number];
  questionsToAskIndex: number;
  totalQuestions: number;
  quizState: QuizState;
  userSelectedAnswer: string | null;
  setUserSelectedAnswer: (answer: string) => void;
  userMatches: Record<string, string>;
  setUserMatches: (matches: Record<string, string>) => void;
  handleCheck: () => void;
  handleContinue: () => void;
  exitQuiz: any;
};

function AskQuestionScreen({ currentQuestion, questionsToAskIndex, totalQuestions, quizState, userSelectedAnswer, setUserSelectedAnswer, userMatches, setUserMatches, handleCheck, handleContinue, exitQuiz }: AskQuestionModeProps) {
  return (
    <div className='p-8 relative'>
      <Header exitQuiz={exitQuiz} />
      <div className='mt-8'>
        <h2 className='text-2xl font-bold mb-2'>
          Question {questionsToAskIndex + 1} / {totalQuestions}
        </h2>

        <Question question={currentQuestion.question} tooltipTerms={currentQuestion.tooltipTerms ?? []} />

        {currentQuestion.type === "multiple-choice" && <MultipleChoice currentQuestion={currentQuestion} quizState={quizState} userSelectedAnswer={userSelectedAnswer} setUserSelectedAnswer={setUserSelectedAnswer} tooltipTerms={currentQuestion.tooltipTerms ?? []} />}

        {currentQuestion.type === "matching" && <Matching pairs={currentQuestion.pairs ?? []} userMatches={userMatches} setUserMatches={setUserMatches} disabled={quizState !== QuizState.SELECT_ANSWER} />}

        <div className='mt-4'>
          {quizState === QuizState.SELECT_ANSWER ? (
            <Button variant='skyBlue' onClick={handleCheck} disabled={(currentQuestion.type === "multiple-choice" && !userSelectedAnswer) || (currentQuestion.type === "matching" && Object.keys(userMatches).length !== currentQuestion.pairs?.length)}>
              CHECK
            </Button>
          ) : (
            <Button variant='skyBlue' onClick={handleContinue}>
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
    </div>
  );
}

function SummaryScreen({ score, totalQuestions, restartQuiz, exitQuiz }: SummaryScreenProps) {
  return (
    <div className='p-8 relative'>
      <Header exitQuiz={exitQuiz} />

      <div className='flex flex-col items-center gap-4 mt-8'>
        <h2 className='text-2xl font-bold mb-2'>Quiz Finished!</h2>
        <p className='text-xl mb-4'>
          You answered {score} / {totalQuestions} correctly on the first attempt
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
    </div>
  );
}

function ErrorScreen({ quizState }: any) {
  return <div className='p-8 text-red-600 font-bold'>Error: Unknown quiz state "{quizState}"</div>;
}

export default function Quiz({ quiz }: { quiz: QuizType }) {
  const router = useRouter();
  const [questionsToAsk, setQuestionsToAsk] = useState<QuizType["questions"]>(quiz.questions);
  const [isMounted, setIsMounted] = useState(false);
  const [questionsToAskIndex, setQuestionsToAskIndex] = useState(0);
  const [questionsToRetry, setQuestionsToRetry] = useState<QuizType["questions"]>([]);
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

  const handleCheckFn = () => {
    if (currentQuestion.type === "multiple-choice") {
      if (!userSelectedAnswer) return;
      userSelectedAnswer === currentQuestion.answer ? setScore((s) => s + 1) : setQuestionsToRetry((prev) => [...prev, currentQuestion]);
    }
    if (currentQuestion.type === "matching") {
      const correct = currentQuestion.pairs!.every((pair) => userMatches[pair.left] === pair.right);
      correct ? setScore((s) => s + 1) : setQuestionsToRetry((prev) => [...prev, currentQuestion]);
    }
    setQuizState(QuizState.CONTINUE_BUTTON);
  };

  const handleContinueFn = () => {
    const nextIndex = questionsToAskIndex + 1;
    if (nextIndex < questionsToAsk.length) {
      setQuestionsToAskIndex(nextIndex);
      setUserSelectedAnswer(null);
      setUserMatches({});
      setQuizState(QuizState.SELECT_ANSWER);
    } else if (questionsToRetry.length > 0) {
      setQuestionsToAsk(shuffleAnswerOptions(questionsToRetry));
      setQuestionsToAskIndex(0);
      setQuestionsToRetry([]);
      setUserSelectedAnswer(null);
      setUserMatches({});
      setQuizState(QuizState.SELECT_ANSWER);
    } else {
      setQuizState(QuizState.VIEW_SUMMARY);
    }
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

  switch (quizState) {
    case QuizState.SELECT_ANSWER:
    case QuizState.CHECK_BUTTON:
    case QuizState.CONTINUE_BUTTON:
      return <AskQuestionScreen exitQuiz={exitQuiz} currentQuestion={currentQuestion} questionsToAskIndex={questionsToAskIndex} totalQuestions={quiz.questions.length} quizState={quizState} userSelectedAnswer={userSelectedAnswer} setUserSelectedAnswer={setUserSelectedAnswer} userMatches={userMatches} setUserMatches={setUserMatches} handleCheck={handleCheckFn} handleContinue={handleContinueFn} />;

    case QuizState.VIEW_SUMMARY:
      return <SummaryScreen score={score} totalQuestions={quiz.questions.length} restartQuiz={restartQuiz} exitQuiz={exitQuiz} />;

    default:
      return <ErrorScreen quizState={quizState} />;
  }
}
