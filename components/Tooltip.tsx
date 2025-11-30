import React from "react";

export default function Tooltip({ label, meaning }: { label: string; meaning: string }) {
  return (
    <span className='relative group cursor-help font-semibold underline decoration-dotted'>
      {label}
      <span className='absolute left-0 top-full mt-1 hidden group-hover:block p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-20 w-max'>{meaning}</span>
    </span>
  );
}
