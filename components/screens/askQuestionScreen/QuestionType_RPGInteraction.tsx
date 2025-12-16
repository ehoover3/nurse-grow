import React, { useState } from "react";
import { QuizState } from "../../Quiz";

type RPGObject = {
  id: string;
  label: string;
  dialogue: string[];
};

type Props = {
  currentQuestion: any;
  quizState: QuizState;
  setQuizState: (s: QuizState) => void;
  onScoreIncrement: () => void;
};

export default function QuestionType_RPGInteraction({ currentQuestion, quizState, setQuizState, onScoreIncrement }: Props) {
  const objects: RPGObject[] = currentQuestion.rpgObjects ?? [];
  const required = currentQuestion.rpgRequiredInteractions ?? objects.length;

  const [interacted, setInteracted] = useState<Record<string, boolean>>({});
  const [activeDialogue, setActiveDialogue] = useState<string[] | null>(null);

  const handleInteract = (obj: RPGObject) => {
    setInteracted((prev) => ({ ...prev, [obj.id]: true }));
    setActiveDialogue(obj.dialogue);
  };

  const interactionCount = Object.values(interacted).filter(Boolean).length;
  const completed = interactionCount >= required;

  const handleContinue = () => {
    if (!completed) return;
    onScoreIncrement();
    setQuizState(QuizState.CONTINUE_BUTTON);
  };

  return (
    <div className='grid gap-6'>
      {/* RPG Scene */}
      <div className='relative h-64 border rounded bg-slate-100 flex items-center justify-center'>
        {/* Player */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500' />

        {/* Objects */}
        <div className='flex gap-8'>
          {objects.map((obj) => (
            <button key={obj.id} onClick={() => handleInteract(obj)} className={`px-4 py-2 rounded border ${interacted[obj.id] ? "bg-green-100 border-green-400" : "bg-white"}`}>
              {obj.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dialogue Box */}
      {activeDialogue && (
        <div className='p-4 border rounded bg-white'>
          {activeDialogue.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}

      {/* Continue */}
      <button disabled={!completed} onClick={handleContinue} className={`self-end px-4 py-2 rounded ${completed ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"}`}>
        Continue
      </button>
    </div>
  );
}
