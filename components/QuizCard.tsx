"use client";

import Link from "next/link";
import React from "react";

type Quiz = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

type QuizCardProps = {
  quiz: Quiz;
};

export default function QuizCard({ quiz }: QuizCardProps) {
  return (
    <Link href={`/quiz/${quiz.slug}`}>
      <div className='border p-4 rounded-xl shadow hover:shadow-lg transition'>
        <img src={quiz.image} alt={quiz.title} className='w-full h-32 object-cover rounded-md' />
        <h2 className='text-xl font-bold mt-2'>{quiz.title}</h2>
        <p className='text-gray-600'>{quiz.description}</p>
      </div>
    </Link>
  );
}
