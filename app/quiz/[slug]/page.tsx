import { quizzes } from "../../../data/quizzes";
import QuizGame from "../../../components/QuizGame";

type QuizPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function QuizPage({ params }: QuizPageProps) {
  const { slug } = await params;
  const quiz = quizzes.find((q) => q.slug === slug);

  if (!quiz) {
    return <div className='p-8 text-xl text-red-600'>Quiz not found</div>;
  }

  return (
    <main className='p-8'>
      <h1 className='text-3xl font-bold mb-4'>{quiz.title}</h1>
      <p className='text-gray-700 mb-6'>{quiz.description}</p>

      <QuizGame quiz={quiz} />
    </main>
  );
}
