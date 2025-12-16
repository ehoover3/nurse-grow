import React, { useState } from "react";
import { QuizState } from "../../Quiz";

type RPGObject = {
  id: string;
  label: string;
  dialogue: string[];

  /** Horizontal position (% from left of scene) */
  x: number;

  /** Vertical position (px from bottom of scene) */
  y: number;
};

type Props = {
  currentQuestion: {
    rpgObjects?: RPGObject[];
    rpgRequiredInteractions?: number;
  };
  quizState: QuizState;
  setQuizState: (s: QuizState) => void;
  onScoreIncrement: () => void;
};

const PLAYER_RADIUS_PX = 12;
const PLAYER_FRONT_OFFSET_PX = 20;
const WALK_DURATION_MS = 500;

export default function QuestionType_RPGInteraction({ currentQuestion, quizState, setQuizState, onScoreIncrement }: Props) {
  const objects = currentQuestion.rpgObjects ?? [];
  const required = currentQuestion.rpgRequiredInteractions ?? objects.length;

  const [playerPos, setPlayerPos] = useState({ x: 50, y: 16 });
  const [interacted, setInteracted] = useState<Record<string, boolean>>({});
  const [activeDialogue, setActiveDialogue] = useState<string[] | null>(null);
  const [isWalking, setIsWalking] = useState(false);

  const handleInteract = (obj: RPGObject) => {
    if (isWalking) return;

    setIsWalking(true);
    setActiveDialogue(null);

    // Move player to directly in front of the object
    setPlayerPos({
      x: obj.x,
      y: obj.y - PLAYER_FRONT_OFFSET_PX,
    });

    window.setTimeout(() => {
      setInteracted((prev) => ({ ...prev, [obj.id]: true }));
      setActiveDialogue(obj.dialogue);
      setIsWalking(false);
    }, WALK_DURATION_MS);
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
      {/* Scene */}
      <div className='relative h-64 border rounded bg-slate-100 overflow-hidden'>
        {/* RPG Objects */}
        {objects.map((obj) => (
          <button
            key={obj.id}
            onClick={() => handleInteract(obj)}
            disabled={isWalking}
            className={`absolute -translate-x-1/2 px-4 py-2 rounded border text-sm
              ${interacted[obj.id] ? "bg-green-100 border-green-400" : "bg-white"}`}
            style={{
              left: `${obj.x}%`,
              bottom: `${obj.y}px`,
            }}>
            {obj.label}
          </button>
        ))}

        {/* Player */}
        <div
          className='absolute w-6 h-6 rounded-full bg-blue-500
                     transition-all ease-in-out'
          style={{
            left: `${playerPos.x}%`,
            bottom: `${playerPos.y}px`,
            transform: "translateX(-50%)",
            transitionDuration: `${WALK_DURATION_MS}ms`,
          }}
        />
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
