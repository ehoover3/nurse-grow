import { useState, useEffect } from "react";
import Button, { Variant } from "../Button";
import shuffleArray from "../../utils/shuffleArray";
import { QuizState } from "../Quiz";
import { QuizType } from "@/data/quizzes";

type MultipleChoiceProps = {
  currentQuestion: QuizType["questions"][number];
  quizState: QuizState;
  userSelectedAnswer: string | null;
  setUserSelectedAnswer: (answer: string | null) => void;
  tooltipTerms?: { label: string; meaning: string }[];
};

type MatchingState = {
  matched: Record<string, string>;
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

type AskQuestionScreenProps = {
  exitQuiz: () => void;
  quizState: QuizState;
  setQuizState: React.Dispatch<React.SetStateAction<QuizState>>;
  quiz: QuizType;
};

function Tooltip(text: string, tooltipTerms: { label: string; meaning: string }[] = []) {
  return text.split(/(\{.*?\})/g).map((part, i) => {
    const match = part.match(/^\{(.+?)\}$/);
    if (!match) return part;
    const label = match[1];
    const term = tooltipTerms.find((t) => t.label === label);
    if (!term) return label;
    return (
      <span className='relative group cursor-help font-semibold underline decoration-dotted' key={i}>
        {label}
        <span className='absolute left-0 top-full mt-1 hidden group-hover:block p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-20 w-max'>{term.meaning}</span>
      </span>
    );
  });
}

const shuffleArrayCopy = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);
const shuffleAnswerOptions = (questions: QuizType["questions"]): QuizType["questions"] => questions.map((q) => ({ ...q, options: q.options ? shuffleArray(q.options) : q.options }));

export function Header({ exitQuiz, score, totalQuestions }: any) {
  return (
    <header className='w-full flex items-center justify-between p-4 border-b border-gray-200'>
      <button onClick={exitQuiz} aria-label='Back to quiz list'>
        ✕
      </button>
      <div>
        Correct: {score} / {totalQuestions}
      </div>
      <div>Points</div>
    </header>
  );
}

function Question({ question, tooltipTerms }: { question: string; tooltipTerms?: { label: string; meaning: string }[] }) {
  return <p className='text-lg mb-4'>{Tooltip(question, tooltipTerms ?? [])}</p>;
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
            {Tooltip(option, tooltipTerms ?? [])}
          </Button>
        );
      })}
    </div>
  );
}

export function Matching({ pairs, userMatches, setUserMatches, disabled }: MatchingProps) {
  const originalLeft = pairs.map((p) => p.left);
  const originalRight = pairs.map((p) => p.right);
  const [leftSide] = useState<string[]>(() => shuffleArrayCopy(originalLeft));
  const [rightSide] = useState<string[]>(() => shuffleArrayCopy(originalRight));
  const [state, setState] = useState<MatchingState>({
    matched: {},
    selectedLeft: null,
    selectedRight: null,
    wrongAttempt: false,
  });

  const selectLeft = (left: string) => {
    if (state.matched[left] || disabled) return;
    setState((s) => ({ ...s, selectedLeft: left }));
  };

  const selectRight = (right: string) => {
    if (Object.values(state.matched).includes(right) || disabled) return;
    setState((s) => ({ ...s, selectedRight: right }));
  };

  useEffect(() => {
    if (!state.selectedLeft || !state.selectedRight) return;
    const correctPair = pairs.find((p) => p.left === state.selectedLeft && p.right === state.selectedRight);
    if (correctPair) {
      const newMatched = { ...state.matched, [correctPair.left]: correctPair.right };
      setState({ matched: newMatched, selectedLeft: null, selectedRight: null, wrongAttempt: false });
      setUserMatches(newMatched);
    } else {
      setState((s) => ({ ...s, wrongAttempt: true }));
      const t = setTimeout(() => {
        setState((s) => ({ ...s, selectedLeft: null, selectedRight: null, wrongAttempt: false }));
      }, 700);
      return () => clearTimeout(t);
    }
  }, [state.selectedLeft, state.selectedRight]);

  const isMatchedLeft = (l: string) => state.matched[l] !== undefined;
  const isMatchedRight = (r: string) => Object.values(state.matched).includes(r);
  const baseWhite = "bg-white dark:bg-white dark:text-black";
  const getLeftStyles = (left: string) => {
    const sel = state.selectedLeft === left;
    const match = isMatchedLeft(left);
    const wrong = state.wrongAttempt && sel;
    return ["border rounded p-2 cursor-pointer text-left transition", match && "bg-green-300 border-green-500 opacity-70", sel && !match && "bg-green-200 border-green-500", wrong && "bg-red-300 border-red-500", !sel && !match && !wrong && baseWhite].filter(Boolean).join(" ");
  };
  const getRightStyles = (right: string) => {
    const sel = state.selectedRight === right;
    const match = isMatchedRight(right);
    const wrong = state.wrongAttempt && sel;
    return ["border rounded p-2 cursor-pointer text-left transition", match && "bg-green-300 border-green-500 opacity-70", sel && !match && "bg-green-200 border-green-500", wrong && "bg-red-300 border-red-500", !sel && !match && !wrong && baseWhite].filter(Boolean).join(" ");
  };
  return (
    <div className='grid grid-cols-2 gap-6 mt-4'>
      <div className='flex flex-col gap-3'>
        {leftSide.map((left) => (
          <div key={left} className={getLeftStyles(left)} onClick={() => selectLeft(left)}>
            {left}
          </div>
        ))}
      </div>
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

export function AskQuestionScreen({ exitQuiz, quizState, setQuizState, quiz }: AskQuestionScreenProps) {
  const [score, setScore] = useState(0);
  const [questionsToAsk, setQuestionsToAsk] = useState<QuizType["questions"]>([]);
  const [questionsToAskIndex, setQuestionsToAskIndex] = useState(0);
  const [questionsToRetry, setQuestionsToRetry] = useState<QuizType["questions"]>([]);
  const [userSelectedAnswer, setUserSelectedAnswer] = useState<string | null>(null);
  const [userMatches, setUserMatches] = useState<Record<string, string>>({});
  const totalQuestions = quiz.questions.length;
  useEffect(() => {
    setQuestionsToAsk(shuffleAnswerOptions(quiz.questions));
  }, [quiz.questions]);
  const currentQuestion = questionsToAsk[questionsToAskIndex] || quiz.questions[0];
  const handleCheck = () => {
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

  const handleContinue = () => {
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

  return (
    <div className='p-8 relative'>
      <Header exitQuiz={exitQuiz} score={score} totalQuestions={totalQuestions} />
      <div className='mt-8'>
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
