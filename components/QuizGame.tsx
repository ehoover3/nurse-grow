"use client";

import React, { useState } from "react";
import { Quiz } from "../data/quizzes";
import { useRouter } from "next/navigation"; // Next 13+ App Router

type QuizGameProps = {
  quiz: Quiz;
};

export default function QuizGame({ quiz }: QuizGameProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const router = useRouter(); // for navigation

  const currentQuestion = quiz.questions[currentIndex];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === currentQuestion.answer) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      if (currentIndex + 1 < quiz.questions.length) {
        setCurrentIndex((i) => i + 1);
        setSelectedOption(null);
      } else {
        setFinished(true);
      }
    }, 500);
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setFinished(false);
  };

  const handleBack = () => {
    router.push("/"); // navigate back to quiz list
  };

  if (finished) {
    return (
      <div className='p-8 flex flex-col items-center gap-4'>
        <h2 className='text-2xl font-bold mb-2'>Quiz Finished!</h2>
        <p className='text-xl mb-4'>
          You scored {score} / {quiz.questions.length}
        </p>
        <div className='flex gap-4'>
          <button onClick={handleRetry} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
            Retry Quiz
          </button>
          <button onClick={handleBack} className='px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition'>
            Back to Quizzes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='p-8'>
      <h2 className='text-2xl font-bold mb-2'>
        Question {currentIndex + 1} / {quiz.questions.length}
      </h2>
      <p className='text-lg mb-4'>{currentQuestion.question}</p>
      <div className='grid gap-2'>
        {currentQuestion.options.map((option) => (
          <button key={option} onClick={() => handleOptionClick(option)} className={`p-2 rounded border ${selectedOption ? (option === currentQuestion.answer ? "bg-green-300" : option === selectedOption ? "bg-red-300" : "") : "hover:bg-gray-200"}`}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
