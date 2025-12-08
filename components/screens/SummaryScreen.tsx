type SummaryScreenProps = {
  exitQuiz: () => void;
};

export function SummaryScreen({ exitQuiz }: SummaryScreenProps) {
  return (
    <div className='p-8 relative'>
      <div className='flex flex-col items-center gap-4 mt-8'>
        <h2 className='text-2xl font-bold mb-2'>Lesson Complete!</h2>
        <button onClick={exitQuiz} className='px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition'>
          Continue
        </button>
      </div>
    </div>
  );
}
