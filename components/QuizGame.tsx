"use client";

import { useState, useEffect } from "react"; // 👈 IMPORT useEffect
import { Quiz } from "../data/quizzes";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import shuffleArray from "../utils/shuffleArray";

type QuizGameProps = {
  quiz: Quiz;
};

enum QuizState {
  SELECT_ANSWER,
  CHECK_BUTTON,
  CONTINUE_BUTTON,
  VIEW_SUMMARY,
}

const shuffleQuizAnswerOptions = (questions: Quiz["questions"]): Quiz["questions"] => {
  return questions.map((question) => ({
    ...question,
    options: shuffleArray(question.options),
  }));
};

export default function QuizGame({ quiz }: QuizGameProps) {
  const router = useRouter();
  const [questionsToAsk, setQuestionsToAsk] = useState<Quiz["questions"]>(() => quiz.questions);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setQuestionsToAsk(shuffleQuizAnswerOptions(quiz.questions));
      setIsMounted(true);
    }
  }, [quiz.questions, isMounted]);

  const [questionsToAskIndex, setQuestionsToAskIndex] = useState(0);
  const [questionsToRetry, setQuestionsToRetry] = useState<Quiz["questions"]>([]);
  const [userSelectedAnswer, setUserSelectedAnswer] = useState<string | null>(null);
  const [quizState, setQuizState] = useState<QuizState>(QuizState.SELECT_ANSWER);
  const [score, setScore] = useState(0);

  // Use a fallback to prevent crashing while options are potentially undefined during initial render
  const currentQuestion = questionsToAsk[questionsToAskIndex] || quiz.questions[0];

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
      // Shuffling is safe here as it only runs on the client after interaction
      setQuestionsToAsk(shuffleQuizAnswerOptions(questionsToRetry));
      setQuestionsToAskIndex(0);
      setQuestionsToRetry([]);
      setUserSelectedAnswer(null);
      setQuizState(QuizState.SELECT_ANSWER);
    },
  };

  const restartQuiz = () => {
    // Shuffling is safe here as it only runs on the client after interaction
    setQuestionsToAsk(shuffleQuizAnswerOptions(quiz.questions));
    setQuestionsToAskIndex(0);
    setUserSelectedAnswer(null);
    setQuizState(QuizState.SELECT_ANSWER);
    setQuestionsToRetry([]);
    setScore(0);
  };

  const exitQuiz = () => router.push("/");

  // ------------------- Render Helpers -------------------

  // ... (renderOptions remains the same)
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

  // Hide quiz screen until it's mounted to prevent brief flash of unshuffled options.
  if (!isMounted) {
    return (
      <div className='p-8 relative'>
        <p>Loading Quiz...</p>
        <button onClick={exitQuiz} className='absolute top-4 left-4 text-xl font-bold text-gray-700 hover:text-gray-900' aria-label='Back to quiz list'>
          ✕
        </button>
      </div>
    );
  }

  const quizScreen = (
    <div className='mt-8'>
      <h2 className='text-2xl font-bold mb-2'>
        Question {questionsToAskIndex + 1} / {quiz.questions.length}
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
