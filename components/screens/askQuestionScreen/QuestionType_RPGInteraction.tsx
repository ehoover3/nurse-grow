import React, { useState } from "react";
import { QuizState } from "../../Quiz";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */

type RPGObject = {
  id: string;
  label: string;
  dialogue: string[];
  portrait?: string;

  /** Grid position */
  gridX: number;
  gridY: number;
};

type Props = {
  currentQuestion: {
    rpgObjects?: RPGObject[];
    rpgRequiredInteractions?: number;
  };
  quizState: QuizState;
  setQuizState: (s: QuizState) => void;
  onScoreIncrement: () => void;

  /** ✅ REQUIRED: parent-provided continue handler */
  handleContinue: () => void;
};

/* ─────────────────────────────────────────────
   Grid Configuration
───────────────────────────────────────────── */

const GRID_COLS = 10;
const GRID_ROWS = 6;
const WALK_DURATION_MS = 500;

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */

/** Convert grid coordinate → centered percentage */
const gridToPercent = (value: number, total: number) => ((value + 0.5) / total) * 100;

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */

export default function QuestionType_RPGInteraction({ currentQuestion, quizState, setQuizState, onScoreIncrement, handleContinue }: Props) {
  const objects = currentQuestion.rpgObjects ?? [];
  const required = currentQuestion.rpgRequiredInteractions ?? objects.length;

  const [playerPos, setPlayerPos] = useState({ x: 5, y: 4 });
  const [interacted, setInteracted] = useState<Record<string, boolean>>({});
  const [activeObject, setActiveObject] = useState<RPGObject | null>(null);
  const [isWalking, setIsWalking] = useState(false);

  /* ─────────────────────────────────────────────
     Tile Click → Move → Auto Interact
  ────────────────────────────────────────────── */

  const handleTileClick = (x: number, y: number) => {
    if (isWalking || quizState !== QuizState.SELECT_ANSWER) return;

    setIsWalking(true);
    setActiveObject(null);
    setPlayerPos({ x, y });

    window.setTimeout(() => {
      const obj = objects.find((o) => o.gridX === x && o.gridY === y);

      if (obj && !interacted[obj.id]) {
        setInteracted((prev) => ({ ...prev, [obj.id]: true }));
        setActiveObject(obj);
      }

      setIsWalking(false);
    }, WALK_DURATION_MS);
  };

  const interactionCount = Object.values(interacted).filter(Boolean).length;
  const completed = interactionCount >= required;

  /* ─────────────────────────────────────────────
     Continue (ADVANCES QUESTION)
  ────────────────────────────────────────────── */

  const handleContinueClick = () => {
    if (!completed) return;

    onScoreIncrement();
    handleContinue(); // ✅ THIS IS THE FIX
  };

  /* ─────────────────────────────────────────────
     Render
  ────────────────────────────────────────────── */

  return (
    <div className='grid gap-6'>
      {/* Scene */}
      <div
        className='relative grid border rounded bg-slate-100 overflow-hidden'
        style={{
          gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
          height: 256,
        }}>
        {/* Floor Tiles */}
        {Array.from({ length: GRID_ROWS }).map((_, row) => Array.from({ length: GRID_COLS }).map((_, col) => <button key={`${col}-${row}`} onClick={() => handleTileClick(col, row)} className='border border-slate-200 hover:bg-slate-200' />))}

        {/* Objects */}
        {objects.map((obj) => (
          <div
            key={obj.id}
            className={`absolute px-2 py-1 text-xs rounded border bg-white pointer-events-none
              ${interacted[obj.id] ? "bg-green-100 border-green-400" : "border-slate-300"}`}
            style={{
              left: `${gridToPercent(obj.gridX, GRID_COLS)}%`,
              top: `${gridToPercent(obj.gridY, GRID_ROWS)}%`,
              transform: "translate(-50%, -50%)",
            }}>
            {obj.label}
          </div>
        ))}

        {/* Player */}
        <div
          className='absolute w-6 h-6 rounded-full bg-blue-500 transition-all ease-in-out'
          style={{
            left: `${gridToPercent(playerPos.x, GRID_COLS)}%`,
            top: `${gridToPercent(playerPos.y, GRID_ROWS)}%`,
            transform: "translate(-50%, -50%)",
            transitionDuration: `${WALK_DURATION_MS}ms`,
          }}
        />
      </div>

      {/* Dialogue */}
      {activeObject && (
        <div className='flex gap-4 p-4 border rounded bg-white items-start'>
          {activeObject.portrait && <img src={activeObject.portrait} alt={activeObject.label} className='w-24 h-24 object-contain' />}

          <div className='grid gap-2'>
            <p className='font-semibold'>{activeObject.label}</p>
            {activeObject.dialogue.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      )}

      {/* Continue */}
      <button
        disabled={!completed}
        onClick={handleContinueClick}
        className={`self-end px-4 py-2 rounded
          ${completed ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"}`}>
        Continue
      </button>
    </div>
  );
}
