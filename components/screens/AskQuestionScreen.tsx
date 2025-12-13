import React from "react";
import { useState, useEffect } from "react";
import Button, { Variant } from "../Button";
import shuffleArray from "../../utils/shuffleArray";
import { QuizState } from "../Quiz";
import { QuizType } from "@/data/quizzes";

type HeaderExitButtonProps = {
  onClick: () => void;
};

type HeaderProgressBarProps = {
  progress: number;
};

type HeaderScoreDisplayProps = {
  score: number;
  totalQuestions: number;
};

type HeaderProps = {
  exitQuiz: () => void;
  score: number;
  totalQuestions: number;
};

type MultipleChoiceProps = {
  currentQuestion: QuizType["questions"][number];
  quizState: QuizState;
  userSelectedAnswer: string | null;
  setUserSelectedAnswer: (answer: string | null) => void;
  tooltipTerms?: { label: string; meaning: string }[];
  setQuizState: any;
  handleCheck: any;
  userMatches: any;
  handleContinue: any;
};

type MatchingProps = {
  pairs: { left: string; right: string }[];
  userMatches: Record<string, string>;
  setUserMatches: (m: Record<string, string>) => void;
  setQuizState: React.Dispatch<React.SetStateAction<QuizState>>;
  quizState: any;
  currentQuestion: any;
  handleCheck: any;
  userSelectedAnswer: any;
  handleContinue: any;
};

type WordBankItem = {
  text: string;
  image?: string;
};

type AskQuestionScreenProps = {
  exitQuiz: () => void;
  quizState: QuizState;
  setQuizState: React.Dispatch<React.SetStateAction<QuizState>>;
  quiz: QuizType;
};

type AnswerFeedbackProps = {
  quizState: QuizState;
  currentQuestion: QuizType["questions"][number];
};

const shuffleArrayCopy = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

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

function HeaderExitButton({ onClick }: HeaderExitButtonProps) {
  return (
    <button onClick={onClick} aria-label='Exit quiz'>
      ✕
    </button>
  );
}

function HeaderProgressBar({ progress }: HeaderProgressBarProps) {
  return (
    <section className='w-full sm:flex-1'>
      <div className='w-full bg-gray-200 rounded-full h-4 overflow-hidden'>
        <div className='h-full bg-green-500 transition-all duration-300' style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
}

function HeaderScoreDisplay({ score, totalQuestions }: HeaderScoreDisplayProps) {
  return (
    <section className='text-sm text-gray-700 dark:text-white'>
      {score} / {totalQuestions} Correct
    </section>
  );
}

function Header({ exitQuiz, score, totalQuestions }: HeaderProps) {
  const progress = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  return (
    <header className='w-full flex flex-col sm:flex-row items-center justify-between p-4 border-b border-gray-200 gap-2'>
      <HeaderExitButton onClick={exitQuiz} />
      <HeaderProgressBar progress={progress} />
      <HeaderScoreDisplay score={score} totalQuestions={totalQuestions} />
    </header>
  );
}

function Question({ question, tooltipTerms }: { question: string; tooltipTerms?: { label: string; meaning: string }[] }) {
  return <p className='text-lg font-bold mb-4'>{Tooltip(question, tooltipTerms ?? [])}</p>;
}

function QuestionType_MultipleChoice({ currentQuestion, quizState, userSelectedAnswer, setUserSelectedAnswer, tooltipTerms, handleCheck, handleContinue }: MultipleChoiceProps) {
  if (!currentQuestion.options) return null;
  const disableCheck = !userSelectedAnswer;
  return (
    <div className='grid gap-2'>
      {currentQuestion.options.map((option) => {
        const text = option.text;
        const image = option.image;
        const isSelecting = quizState === QuizState.SELECT_ANSWER;
        const isShowingResults = quizState === QuizState.CONTINUE_BUTTON;
        const isUserPick = userSelectedAnswer === text;
        const isCorrect = text === currentQuestion.answer;
        let variant: Variant = "white";
        if (isSelecting && isUserPick) variant = "darkGray";
        else if (isShowingResults && isCorrect) variant = "brightGreen";
        else if (isShowingResults && isUserPick) variant = "red";
        return (
          <Button key={text} onClick={() => isSelecting && setUserSelectedAnswer(text)} disabled={!isSelecting} variant={variant} className='border w-full p-3 rounded flex flex-col items-center text-left'>
            {Boolean(image && image.trim()) && <img src={image} alt='' className='h-48 object-contain rounded' />}
            <span>{Tooltip(text, tooltipTerms ?? [])}</span>
          </Button>
        );
      })}

      <div className='mt-4'>
        {quizState === QuizState.SELECT_ANSWER ? (
          <Button variant='skyBlue' onClick={handleCheck} disabled={disableCheck}>
            CHECK
          </Button>
        ) : (
          <Button variant='skyBlue' onClick={handleContinue}>
            CONTINUE
          </Button>
        )}
      </div>
    </div>
  );
}

function QuestionType_Matching({ pairs, userMatches, setUserMatches, setQuizState, quizState, currentQuestion, handleCheck, handleContinue }: MatchingProps) {
  let disabled = quizState !== QuizState.SELECT_ANSWER;
  const originalLeft = pairs.map((p) => p.left);
  const originalRight = pairs.map((p) => p.right);
  const [leftSide] = useState<string[]>(() => shuffleArrayCopy(originalLeft));
  const [rightSide] = useState<string[]>(() => shuffleArrayCopy(originalRight));
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [wrongAttempt, setWrongAttempt] = useState(false);

  const selectLeft = (left: string) => {
    if (userMatches[left] || disabled) return;
    setSelectedLeft(left);
  };

  const selectRight = (right: string) => {
    if (Object.values(userMatches).includes(right) || disabled) return;
    setSelectedRight(right);
  };

  useEffect(() => {
    if (!selectedLeft || !selectedRight) return;

    const correctPair = pairs.find((p) => p.left === selectedLeft && p.right === selectedRight);

    if (correctPair) {
      const newMatches = { ...userMatches, [correctPair.left]: correctPair.right };
      setUserMatches(newMatches);
      setSelectedLeft(null);
      setSelectedRight(null);
      setWrongAttempt(false);

      // Auto-advance if all pairs are matched
      const allMatched = pairs.every((p) => newMatches[p.left] === p.right);
      if (allMatched) {
        setQuizState(QuizState.CONTINUE_BUTTON);
      }
    } else {
      setWrongAttempt(true);
      const t = setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrongAttempt(false);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [selectedLeft, selectedRight]);

  const isMatchedLeft = (l: string) => userMatches[l] !== undefined;
  const isMatchedRight = (r: string) => Object.values(userMatches).includes(r);
  const baseWhite = "bg-white dark:bg-white dark:text-black";
  const getLeftStyles = (left: string) => {
    const sel = selectedLeft === left;
    const match = isMatchedLeft(left);
    const wrong = wrongAttempt && sel;
    return ["border rounded p-2 cursor-pointer text-left transition", match && "bg-green-300 border-green-500 opacity-70", sel && !match && "bg-green-200 border-green-500", wrong && "bg-red-300 border-red-500", !sel && !match && !wrong && baseWhite].filter(Boolean).join(" ");
  };
  const getRightStyles = (right: string) => {
    const sel = selectedRight === right;
    const match = isMatchedRight(right);
    const wrong = wrongAttempt && sel;
    return ["border rounded p-2 cursor-pointer text-left transition", match && "bg-green-300 border-green-500 opacity-70", sel && !match && "bg-green-200 border-green-500", wrong && "bg-red-300 border-red-500", !sel && !match && !wrong && baseWhite].filter(Boolean).join(" ");
  };
  const disableCheck = Object.keys(userMatches).length !== currentQuestion.pairs?.length;

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

      <div className='mt-4'>
        {quizState === QuizState.SELECT_ANSWER ? (
          <Button variant='skyBlue' onClick={handleCheck} disabled={disableCheck}>
            CHECK
          </Button>
        ) : (
          <Button variant='skyBlue' onClick={handleContinue}>
            CONTINUE
          </Button>
        )}
      </div>
    </div>
  );
}

function QuestionType_WordOrder({ currentQuestion, quizState, setQuizState, onScoreIncrement, handleContinue }: { currentQuestion: QuizType["questions"][number]; quizState: QuizState; setQuizState: React.Dispatch<React.SetStateAction<QuizState>>; onScoreIncrement: () => void; handleContinue: any }) {
  const [availableWords, setAvailableWords] = useState<WordBankItem[]>([]);
  const [answerWords, setAnswerWords] = useState<WordBankItem[]>([]);
  const [result, setResult] = useState<boolean | null>(null);

  useEffect(() => {
    setAvailableWords(shuffleArray(currentQuestion.wordBank ?? []));
    setAnswerWords([]);
    setResult(null);
  }, [currentQuestion]);

  const addWord = (word: WordBankItem) => {
    if (quizState !== QuizState.SELECT_ANSWER) return;
    setAvailableWords((prev) => prev.filter((w) => w !== word));
    setAnswerWords((prev) => [...prev, word]);
  };

  const removeWord = (index: number) => {
    if (quizState !== QuizState.SELECT_ANSWER) return;
    const word = answerWords[index];
    setAnswerWords((prev) => prev.filter((_, i) => i !== index));
    setAvailableWords((prev) => [...prev, word]);
  };

  const checkAnswer = () => {
    if (!currentQuestion.correctAnswer) return;

    const isCorrect = answerWords.length === currentQuestion.correctAnswer.length && answerWords.every((w, i) => w.text === currentQuestion.correctAnswer![i]);

    setResult(isCorrect);

    if (isCorrect) {
      onScoreIncrement();
      setQuizState(QuizState.CONTINUE_BUTTON);
    } else {
      setQuizState(QuizState.SELECT_ANSWER);
    }
  };

  const reset = () => {
    setAvailableWords(shuffleArray(currentQuestion.wordBank ?? []));
    setAnswerWords([]);
    setResult(null);
  };

  return (
    <div className='space-y-4'>
      {/* Answer Area */}
      <div className='min-h-[60px] p-3 border rounded-xl flex flex-wrap gap-2 bg-gray-50'>
        {answerWords.length === 0 && <span className='text-gray-400'>Tap words to build your answer</span>}

        {answerWords.map((word, index) => (
          <button key={`${word.text}-${index}`} onClick={() => removeWord(index)} className='px-3 py-1 rounded-lg bg-blue-600 text-white shadow flex items-center gap-2'>
            {word.image && <img src={word.image} alt='' className='h-6 w-6 object-contain' />}
            {word.text}
          </button>
        ))}
      </div>

      {/* Word Bank */}
      <div className='p-3 border rounded-xl flex flex-wrap gap-2'>
        {availableWords.map((word) => (
          <button key={word.text} onClick={() => addWord(word)} className='px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center gap-2'>
            {word.image && <img src={word.image} alt='' className='h-6 w-6 object-contain' />}
            {word.text}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className='flex gap-2'>
        {quizState === QuizState.SELECT_ANSWER ? (
          <Button variant='green' onClick={checkAnswer} disabled={answerWords.length === 0}>
            CHECK
          </Button>
        ) : (
          <Button variant='skyBlue' onClick={handleContinue}>
            CONTINUE
          </Button>
        )}

        <Button variant='gray' onClick={reset}>
          RESET
        </Button>
      </div>

      {/* Result */}
      {result !== null && <div className={`p-3 rounded-xl text-white ${result ? "bg-green-600" : "bg-red-600"}`}>{result ? "Correct!" : "Not quite — try again."}</div>}
    </div>
  );
}

function AnswerFeedback({ quizState, currentQuestion }: AnswerFeedbackProps) {
  if (quizState !== QuizState.CONTINUE_BUTTON) return null;
  return (
    <>
      {currentQuestion.answerImage && (
        <div className='mt-4'>
          <img src={currentQuestion.answerImage} alt='Answer explanation' className='max-w-full h-auto rounded border' />
        </div>
      )}
      {currentQuestion.answerExplanation && <div className='mt-4'>{currentQuestion.answerExplanation}</div>}
    </>
  );
}

const shuffleAnswerOptions = (questions: QuizType["questions"]): QuizType["questions"] => questions.map((q) => ({ ...q, options: q.options ? shuffleArray(q.options) : q.options }));
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
      <Question question={currentQuestion.question} tooltipTerms={currentQuestion.tooltipTerms ?? []} />
      {currentQuestion.type === "multiple-choice" && <QuestionType_MultipleChoice currentQuestion={currentQuestion} handleCheck={handleCheck} handleContinue={handleContinue} quizState={quizState} setQuizState={setQuizState} setUserSelectedAnswer={setUserSelectedAnswer} tooltipTerms={currentQuestion.tooltipTerms ?? []} userMatches={userMatches} userSelectedAnswer={userSelectedAnswer} />}
      {currentQuestion.type === "matching" && <QuestionType_Matching currentQuestion={currentQuestion} handleCheck={handleCheck} handleContinue={handleContinue} pairs={currentQuestion.pairs ?? []} quizState={quizState} setQuizState={setQuizState} setUserMatches={setUserMatches} userMatches={userMatches} userSelectedAnswer={userSelectedAnswer} />}
      {currentQuestion.type === "word-order" && <QuestionType_WordOrder currentQuestion={currentQuestion} handleContinue={handleContinue} onScoreIncrement={() => setScore((s) => s + 1)} quizState={quizState} setQuizState={setQuizState} />}
      <AnswerFeedback quizState={quizState} currentQuestion={currentQuestion} />
    </div>
  );
}
