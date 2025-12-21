import React from "react";

type HeaderExitButtonProps = {
  onClick: () => void;
};

type HeaderProgressBarProps = {
  progress: number;
};

type HeaderScoreDisplayProps = {
  score: number;
  totalQuestions: number;
};

type HeaderProps = {
  exitQuiz: () => void;
  score: number;
  totalQuestions: number;
};

function HeaderExitButton({ onClick }: HeaderExitButtonProps) {
  return (
    <button onClick={onClick} aria-label='Exit quiz'>
      ✕
    </button>
  );
}

function HeaderProgressBar({ progress }: HeaderProgressBarProps) {
  return (
    <section className='w-full sm:flex-1'>
      <div className='w-full bg-gray-200 rounded-full h-4 overflow-hidden'>
        <div className='h-full bg-green-500 transition-all duration-300' style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
}

function HeaderScoreDisplay({ score, totalQuestions }: HeaderScoreDisplayProps) {
  return (
    <section className='text-sm text-gray-700 dark:text-white'>
      {score} / {totalQuestions} Correct
    </section>
  );
}

export function Header({ exitQuiz, score, totalQuestions }: HeaderProps) {
  const progress = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  return (
    <header className='w-full flex flex-col sm:flex-row items-center justify-between p-4 border-b border-gray-200 gap-2'>
      <HeaderExitButton onClick={exitQuiz} />
      <HeaderProgressBar progress={progress} />
      <HeaderScoreDisplay score={score} totalQuestions={totalQuestions} />
    </header>
  );
}
