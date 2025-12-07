import React from "react";
import { quizzes, QuizType } from "../data/quizzes";
import QuizCard from "../components/QuizCard";

export default function Home() {
  return (
    <main className='p-8'>
      <h1 className='text-4xl font-bold mb-6'>Medical Learning Quizzes</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {quizzes.map((quiz: QuizType) => (
          <QuizCard key={quiz.slug} quiz={quiz} />
        ))}
      </div>
    </main>
  );
}
