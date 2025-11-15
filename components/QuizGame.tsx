"use client";

// TODO: Fix reask bug.

import { useState } from "react";
import { Quiz } from "../data/quizzes";
import { useRouter } from "next/navigation";

type QuizGameProps = {
  quiz: Quiz;
};

export default function QuizGame({ quiz }: QuizGameProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setselectedAnswer] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  const [correctAnswersIndices, setCorrectAnswersIndices] = useState<Set<number>>(new Set());
  const [countUserFirstAttemptAnswersCorrect, setCountUserFirstAttemptAnswersCorrect] = useState<Set<number>>(new Set());
  const [queue, setQueue] = useState<Quiz["questions"]>(quiz.questions);
  const [reaskQueue, setReaskQueue] = useState<Quiz["questions"]>([]);
  const [countCorrectlyAnswered, setCountCorrectlyAnswer] = useState(0);

  const router = useRouter();
  const currentQuestion = queue[currentQuestionIndex];
  const globalIndex = quiz.questions.indexOf(currentQuestion);

  // ------------------- Logic Functions -------------------

  const handleAnswer = (isCorrect: boolean) => {
    const alreadyCorrect = correctAnswersIndices.has(globalIndex);
    const inRetryQueue = reaskQueue.includes(currentQuestion);
    const firstAttempt = !alreadyCorrect && !inRetryQueue;
    if (isCorrect) {
      setCorrectAnswersIndices((prev) => new Set(prev).add(globalIndex));
      setCountCorrectlyAnswer((prev) => prev + 1);
      if (firstAttempt) {
        setCountUserFirstAttemptAnswersCorrect((prev) => new Set(prev).add(globalIndex));
      }
    } else if (firstAttempt) {
      setReaskQueue((prev) => [...prev, currentQuestion]);
    }
  };

  const moveToNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < queue.length) {
      // Move to next question in the current queue
      setCurrentQuestionIndex(nextIndex);
      setselectedAnswer(null);
    } else if (reaskQueue.length > 0) {
      // If there are any wrong questions, reask them
      setQueue(reaskQueue);
      setCurrentQuestionIndex(0);
      setselectedAnswer(null);
      setReaskQueue([]); // Clear the retry queue for this pass
    } else {
      // All questions answered correctly
      setCountCorrectlyAnswer(0);
      setFinished(true);
    }
  };

  const onSelectAnswer = (option: string) => {
    setselectedAnswer(option);
    const isCorrect = option === currentQuestion.answer;
    handleAnswer(isCorrect);
    setTimeout(() => moveToNextQuestion(), 500);
  };

  const restartQuiz = () => {
    setQueue(quiz.questions);
    setCurrentQuestionIndex(0);
    setselectedAnswer(null);
    setFinished(false);
    setCorrectAnswersIndices(new Set());
    setCountUserFirstAttemptAnswersCorrect(new Set());
    setReaskQueue([]);
  };

  const exitQuiz = () => router.push("/");

  // ------------------- Render Helpers -------------------

  const renderOptions = () => {
    return currentQuestion.options.map((option) => {
      let bgClass = "hover:bg-gray-200";
      if (selectedAnswer) {
        if (option === currentQuestion.answer) bgClass = "bg-green-300";
        else if (option === selectedAnswer) bgClass = "bg-red-300";
      }
      return (
        <button key={option} onClick={() => onSelectAnswer(option)} className={`p-2 rounded border ${bgClass}`} disabled={!!selectedAnswer}>
          {option}
        </button>
      );
    });
  };

  // ------------------- JSX -------------------

  const currentQuestionJSX = (
    <div className='mt-8'>
      <h2 className='text-2xl font-bold mb-2'>
        Question {countCorrectlyAnswered} / {quiz.questions.length}
      </h2>
      <p className='text-lg mb-4'>{currentQuestion.question}</p>
      <p className='mb-2 text-gray-700'>
        Score so far: {correctAnswersIndices.size} / {quiz.questions.length}
      </p>
      <div className='grid gap-2'>{renderOptions()}</div>
    </div>
  );

  const summaryJSX = (
    <div className='flex flex-col items-center gap-4 mt-8'>
      <h2 className='text-2xl font-bold mb-2'>Quiz Finished!</h2>
      <p className='text-xl mb-4'>
        You answered {countUserFirstAttemptAnswersCorrect.size} / {quiz.questions.length} correctly on the first attempt
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
      {!finished ? currentQuestionJSX : summaryJSX}
    </div>
  );
}
