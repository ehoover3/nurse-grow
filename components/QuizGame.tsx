"use client";

import { useState } from "react";
import { Quiz } from "../data/quizzes";
import { useRouter } from "next/navigation";

type QuizGameProps = {
  quiz: Quiz;
};

export default function QuizGame({ quiz }: QuizGameProps) {
  const router = useRouter();

  const [questionsToAsk, setQuestionsToAsk] = useState<Quiz["questions"]>(quiz.questions);
  const [questionsToAskIndex, setQuestionsToAskIndex] = useState(0);
  const [questionsToRetry, setQuestionsToRetry] = useState<Quiz["questions"]>([]);

  const [userSelectedAnswer, setUserSelectedAnswer] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const currentQuestion = questionsToAsk[questionsToAskIndex];

  // ------------------- Logic -------------------

  const handleCorrectAnswer = () => {
    setScore((prev) => prev + 1);
  };

  const handleIncorrectAnswer = () => {
    setQuestionsToRetry((prev) => [...prev, currentQuestion]);
  };

  const handleCheck = () => {
    if (!userSelectedAnswer) return;
    const isCorrect = userSelectedAnswer === currentQuestion.answer;
    if (isCorrect) handleCorrectAnswer();
    else handleIncorrectAnswer();
    setChecked(true);
  };

  const askNextQuestion = () => {
    const nextQuestionIndex = questionsToAskIndex + 1;

    setQuestionsToAskIndex(nextQuestionIndex);
    setUserSelectedAnswer(null);
    setChecked(false);
    return;
  };

  const reaskMissedQuestions = () => {
    setQuestionsToAsk(questionsToRetry);
    setQuestionsToAskIndex(0);
    setQuestionsToRetry([]);
    setUserSelectedAnswer(null);
    setChecked(false);
    return;
  };

  const handleContinue = () => {
    const nextQuestionIndex = questionsToAskIndex + 1;
    const doesUserHaveQuestionsRemaining = nextQuestionIndex < questionsToAsk.length;
    const doesUserNeedToRetryQuestions = questionsToRetry.length > 0;
    if (doesUserHaveQuestionsRemaining) {
      askNextQuestion();
      return;
    }
    if (doesUserNeedToRetryQuestions) {
      reaskMissedQuestions();
      return;
    }
    setShowSummary(true);
  };

  const restartQuiz = () => {
    setQuestionsToAsk(quiz.questions);
    setQuestionsToAskIndex(0);
    setUserSelectedAnswer(null);
    setChecked(false);
    setShowSummary(false);
    setQuestionsToRetry([]);
    setScore(0);
  };

  const exitQuiz = () => router.push("/");

  // ------------------- Render Helpers -------------------

  const renderOptions = () =>
    currentQuestion.options.map((option) => {
      let bgClass = "hover:bg-gray-200";

      if (userSelectedAnswer === option && !checked) {
        bgClass = "bg-gray-200"; // highlight selected answer before checking
      }

      if (checked) {
        if (option === currentQuestion.answer) bgClass = "bg-green-300"; // correct answer green
        else if (option === userSelectedAnswer && option !== currentQuestion.answer) bgClass = "bg-red-300"; // wrong selection red
      }

      return (
        <button key={option} onClick={() => !checked && setUserSelectedAnswer(option)} className={`p-2 rounded border ${bgClass}`}>
          {option}
        </button>
      );
    });

  // ------------------- JSX -------------------

  const quizScreen = (
    <div className='mt-8'>
      <h2 className='text-2xl font-bold mb-2'>
        Question {questionsToAskIndex + 1} / {quiz.questions.length}
      </h2>
      <p className='text-lg mb-4'>{currentQuestion.question}</p>

      <div className='grid gap-2'>{renderOptions()}</div>

      <div className='mt-4'>
        {!checked ? (
          <button onClick={handleCheck} disabled={!userSelectedAnswer} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition disabled:bg-gray-300'>
            Check
          </button>
        ) : (
          <button onClick={handleContinue} className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition'>
            Continue
          </button>
        )}
      </div>

      {/* Debug Panel */}
      <div className='mt-6'>
        <details className='p-4 border rounded bg-gray-50'>
          <summary className='cursor-pointer font-bold text-lg'>Debug Panel</summary>
          <div className='mt-3 grid grid-cols-1 gap-2 text-sm'>
            <p>currentQuestionIndex + 1: {questionsToAskIndex + 1};</p>
            <p>queue.length: {questionsToAsk.length};</p>
            <p>retryQueue.length: {questionsToRetry.length};</p>
          </div>
        </details>
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

      {!showSummary ? quizScreen : summaryScreen}
    </div>
  );
}
