"use client";

import { useState } from "react";
import { Quiz } from "../data/quizzes";
import { useRouter } from "next/navigation";
import Button from "../components/Button";

type QuizGameProps = {
  quiz: Quiz;
};

enum QuizState {
  SELECT_ANSWER,
  CHECK_BUTTON,
  CONTINUE_BUTTON,
  VIEW_SUMMARY,
}

export default function QuizGame({ quiz }: QuizGameProps) {
  const router = useRouter();
  const [questionsToAsk, setQuestionsToAsk] = useState<Quiz["questions"]>(quiz.questions);
  const [questionsToAskIndex, setQuestionsToAskIndex] = useState(0);
  const [questionsToRetry, setQuestionsToRetry] = useState<Quiz["questions"]>([]);
  const [userSelectedAnswer, setUserSelectedAnswer] = useState<string | null>(null);
  const [quizState, setQuizState] = useState<QuizState>(QuizState.SELECT_ANSWER);
  const [score, setScore] = useState(0);
  const currentQuestion = questionsToAsk[questionsToAskIndex];

  const handleCheck = {
    check: () => {
      if (!userSelectedAnswer) return;
      const isCorrect = userSelectedAnswer === currentQuestion.answer;
      if (isCorrect) handleCheck.correct();
      else handleCheck.incorrect();
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
      setQuizState(QuizState.SELECT_ANSWER);
    },
    reask: () => {
      setQuestionsToAsk(questionsToRetry);
      setQuestionsToAskIndex(0);
      setQuestionsToRetry([]);
      setUserSelectedAnswer(null);
      setQuizState(QuizState.SELECT_ANSWER);
    },
  };

  const restartQuiz = () => {
    setQuestionsToAsk(quiz.questions);
    setQuestionsToAskIndex(0);
    setUserSelectedAnswer(null);
    setQuizState(QuizState.SELECT_ANSWER);
    setQuestionsToRetry([]);
    setScore(0);
  };

  const exitQuiz = () => router.push("/");

  // ------------------- Render Helpers -------------------

  const renderOptions = () =>
    currentQuestion.options.map((option) => {
      let bgClass = "hover:bg-gray-200";

      if (userSelectedAnswer === option && quizState === QuizState.SELECT_ANSWER) {
        bgClass = "bg-gray-200"; // highlight selected answer before checking
      }

      if (quizState === QuizState.CONTINUE_BUTTON) {
        if (option === currentQuestion.answer) bgClass = "bg-green-300"; // correct answer green
        else if (option === userSelectedAnswer && option !== currentQuestion.answer) bgClass = "bg-red-300"; // wrong selection red
      }

      return (
        <button key={option} onClick={() => quizState === QuizState.SELECT_ANSWER && setUserSelectedAnswer(option)} className={`p-2 rounded border ${bgClass}`}>
          {option}
        </button>
      );
    });

  // ------------------- JSX -------------------

  const quizScreen = (
    <div className='mt-8'>
      <h2 className='text-2xl font-bold mb-2'>
        Question {score} / {quiz.questions.length}
      </h2>
      <p className='text-lg mb-4'>{currentQuestion.question}</p>

      <div className='grid gap-2'>{renderOptions()}</div>

      <div className='mt-4'>
        {quizState === QuizState.SELECT_ANSWER ? (
          <Button variant='skyBlue' onClick={handleCheck.check} disabled={!userSelectedAnswer}>
            CHECK
          </Button>
        ) : (
          <Button variant='skyBlue' onClick={handleContinue.continue}>
            CONTINUE
          </Button>
        )}
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
