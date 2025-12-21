import React, { useState } from "react";
import { QuizState } from "../../Quiz";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */

type RPGChoice = {
  text: string;
  correct: boolean;
  explanation: string;
};

type RPGObject = {
  id: string;
  label: string;
  dialogue: string[];
  portrait?: string;
  gridX: number;
  gridY: number;
  choices?: RPGChoice[];
};

type Props = {
  currentQuestion: {
    rpgObjects?: RPGObject[];
    rpgRequiredInteractions?: number;
  };
  quizState: QuizState;
  setQuizState: (s: QuizState) => void;
  onScoreIncrement: () => void;
  handleContinue: () => void;
};

/* ───────────────────────────────────────────── */

const GRID_COLS = 10;
const GRID_ROWS = 6;
const WALK_DURATION_MS = 500;

const gridToPercent = (value: number, total: number) => ((value + 0.5) / total) * 100;

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */

export default function QuestionType_RPGInteraction({ currentQuestion, quizState, onScoreIncrement, handleContinue }: Props) {
  const objects = currentQuestion.rpgObjects ?? [];
  const required = currentQuestion.rpgRequiredInteractions ?? objects.length;

  const [playerPos, setPlayerPos] = useState({ x: 5, y: 4 });
  const [interacted, setInteracted] = useState<Record<string, boolean>>({});
  const [activeObject, setActiveObject] = useState<RPGObject | null>(null);
  const [isWalking, setIsWalking] = useState(false);

  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [choiceFeedback, setChoiceFeedback] = useState<string | null>(null);
  const [choiceCorrect, setChoiceCorrect] = useState(false);

  /* ───────────────────────────────────────────── */

  const handleTileClick = (x: number, y: number) => {
    if (isWalking || quizState !== QuizState.SELECT_ANSWER) return;

    setIsWalking(true);
    setActiveObject(null);
    setSelectedChoice(null);
    setChoiceFeedback(null);
    setChoiceCorrect(false);
    setPlayerPos({ x, y });

    window.setTimeout(() => {
      const obj = objects.find((o) => o.gridX === x && o.gridY === y);
      if (obj && !interacted[obj.id]) {
        setActiveObject(obj);
      }
      setIsWalking(false);
    }, WALK_DURATION_MS);
  };

  const handleChoiceSelect = (index: number) => {
    if (!activeObject?.choices) return;

    const choice = activeObject.choices[index];
    setSelectedChoice(index);
    setChoiceFeedback(choice.explanation);
    setChoiceCorrect(choice.correct);

    if (choice.correct) {
      setInteracted((prev) => ({ ...prev, [activeObject.id]: true }));
    }
  };

  const completed = Object.values(interacted).filter(Boolean).length >= required;

  const handleContinueClick = () => {
    if (!completed) return;
    onScoreIncrement();
    handleContinue();
  };

  /* ─────────────────────────────────────────────
     Render
  ────────────────────────────────────────────── */

  return (
    <div className='grid gap-6'>
      {/* Scene */}
      <div
        className='relative grid border rounded bg-slate-200'
        style={{
          gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
          height: 256,
        }}>
        {Array.from({ length: GRID_ROWS }).map((_, row) => Array.from({ length: GRID_COLS }).map((_, col) => <button key={`${col}-${row}`} onClick={() => handleTileClick(col, row)} className='border border-slate-300 hover:bg-slate-300' />))}

        {objects.map((obj) => (
          <div
            key={obj.id}
            className={`absolute px-2 py-1 text-xs rounded border text-slate-900
      ${interacted[obj.id] ? "bg-green-100 border-green-400" : "bg-white border-slate-300"} 
      shadow-sm`}
            style={{
              left: `${gridToPercent(obj.gridX, GRID_COLS)}%`,
              top: `${gridToPercent(obj.gridY, GRID_ROWS)}%`,
              transform: "translate(-50%, -50%)",
            }}>
            {obj.label}
          </div>
        ))}

        <div
          className='absolute w-6 h-6 rounded-full bg-blue-500 transition-all'
          style={{
            left: `${gridToPercent(playerPos.x, GRID_COLS)}%`,
            top: `${gridToPercent(playerPos.y, GRID_ROWS)}%`,
            transform: "translate(-50%, -50%)",
            transitionDuration: `${WALK_DURATION_MS}ms`,
          }}
        />
      </div>

      {/* Dialogue + Choices */}
      {activeObject && (
        <div className='p-4 border rounded bg-slate-50 text-slate-900 grid gap-3 shadow-sm'>
          <p className='font-semibold text-slate-900'>{activeObject.label}</p>

          {activeObject.dialogue.map((line, i) => (
            <p key={i} className='text-slate-800'>
              {line}
            </p>
          ))}

          {activeObject.choices?.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoiceSelect(index)}
              disabled={choiceCorrect}
              className={`p-3 text-left rounded border
                ${selectedChoice === index ? (choice.correct ? "bg-green-100 border-green-400 text-green-900" : "bg-red-100 border-red-400 text-red-900") : "bg-white border-slate-300 hover:bg-slate-100 text-slate-900"}`}>
              {choice.text}
            </button>
          ))}

          {choiceFeedback && (
            <div
              className={`p-3 rounded text-sm
                ${choiceCorrect ? "bg-green-50 text-green-900" : "bg-red-50 text-red-900"}`}>
              {choiceFeedback}
            </div>
          )}
        </div>
      )}

      {/* Continue */}
      <button
        disabled={!completed}
        onClick={handleContinueClick}
        className={`self-end px-4 py-2 rounded font-semibold
          ${completed ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}>
        Continue
      </button>
    </div>
  );
}
