"use client";

import Link from "next/link";

type QuizCardProps = {
  quiz: {
    slug: string;
    title: string;
    description: string;
    image: string;
  };
};

export default function LearningStep({ quiz }: QuizCardProps) {
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
