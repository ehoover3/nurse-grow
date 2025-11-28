"use client";

import { useState, useEffect } from "react";
import { Quiz } from "../data/quizzes";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import shuffleArray from "../utils/shuffleArray";
import { Variant } from "../components/Button";

type QuizGameProps = {
  quiz: Quiz;
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
};

const shuffleQuizAnswerOptions = (questions: Quiz["questions"]): Quiz["questions"] => {
  return questions.map((question) => ({
    ...question,
    options: shuffleArray(question.options),
  }));
};

function Question({ question }: { question: string }) {
  return <p className='text-lg mb-4'>{question}</p>;
}

function AnswerOptions({ currentQuestion, quizState, userSelectedAnswer, setUserSelectedAnswer }: AnswerOptionsProps) {
  return (
    <div className='grid gap-2'>
      {currentQuestion.options.map((option: any) => {
        const isAnswerSelected = quizState === QuizState.SELECT_ANSWER;
        const isCheckButtonClicked = quizState === QuizState.CONTINUE_BUTTON;
        const isUserPick = userSelectedAnswer === option;
        const isCorrect = option === currentQuestion.answer;
        let variant: Variant = "white";

        if (isAnswerSelected && isUserPick) {
          variant = "darkGray";
        } else if (isCheckButtonClicked && isCorrect) {
          variant = "brightGreen";
        } else if (isCheckButtonClicked && isUserPick) {
          variant = "red";
        }
        return (
          <Button key={option} onClick={() => isAnswerSelected && setUserSelectedAnswer(option)} disabled={!isAnswerSelected} variant={variant} className='border w-full text-left p-2 rounded'>
            {option}
          </Button>
        );
      })}
    </div>
  );
}

export default function QuizGame({ quiz }: QuizGameProps) {
  const router = useRouter();
  const [questionsToAsk, setQuestionsToAsk] = useState<Quiz["questions"]>(() => quiz.questions);
  const [isMounted, setIsMounted] = useState(false);
  const [questionsToAskIndex, setQuestionsToAskIndex] = useState(0);
  const [questionsToRetry, setQuestionsToRetry] = useState<Quiz["questions"]>([]);
  const [userSelectedAnswer, setUserSelectedAnswer] = useState<string | null>(null);
  const [quizState, setQuizState] = useState<QuizState>(QuizState.SELECT_ANSWER);
  const [score, setScore] = useState(0);
  const currentQuestion = questionsToAsk[questionsToAskIndex] || quiz.questions[0];

  useEffect(() => {
    if (!isMounted) {
      setQuestionsToAsk(shuffleQuizAnswerOptions(quiz.questions));
      setIsMounted(true);
    }
  }, [quiz.questions, isMounted]);

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
      setQuestionsToAsk(shuffleQuizAnswerOptions(questionsToRetry));
      setQuestionsToAskIndex(0);
      setQuestionsToRetry([]);
      setUserSelectedAnswer(null);
      setQuizState(QuizState.SELECT_ANSWER);
    },
  };

  const restartQuiz = () => {
    setQuestionsToAsk(shuffleQuizAnswerOptions(quiz.questions));
    setQuestionsToAskIndex(0);
    setUserSelectedAnswer(null);
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
      <Question question={currentQuestion.question} />
      <AnswerOptions currentQuestion={currentQuestion} quizState={quizState} userSelectedAnswer={userSelectedAnswer} setUserSelectedAnswer={setUserSelectedAnswer} />

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

        {quizState === QuizState.CONTINUE_BUTTON && currentQuestion.answerImage && (
          <div className='mt-4'>
            <img src={currentQuestion.answerImage} alt='Answer explanation' className='max-w-full h-auto rounded border' />{" "}
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
