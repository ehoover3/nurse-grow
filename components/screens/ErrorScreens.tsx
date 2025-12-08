export function ErrorScreen({ quizState }: any) {
  return <div className='p-8 text-red-600 font-bold'>Error: Unknown quiz state "{quizState}"</div>;
}
