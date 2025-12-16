import { QuizState } from "@/components/Quiz";
import { useState, useEffect } from "react";
import Button from "@/components/Button";

type QuestionType_Matching_Props = {
  pairs: { left: string; right: string }[];
  userMatches: Record<string, string>;
  setUserMatches: (m: Record<string, string>) => void;
  setQuizState: React.Dispatch<React.SetStateAction<QuizState>>;
  quizState: any;
  currentQuestion: any;
  handleCheck: any;
  userSelectedAnswer: any;
  handleContinue: any;
};

const shuffleArrayCopy = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

export default function QuestionType_Matching({ pairs, userMatches, setUserMatches, setQuizState, quizState, currentQuestion, handleCheck, handleContinue }: QuestionType_Matching_Props) {
  let disabled = quizState !== QuizState.SELECT_ANSWER;
  const originalLeft = pairs.map((p) => p.left);
  const originalRight = pairs.map((p) => p.right);
  const [leftSide] = useState<string[]>(() => shuffleArrayCopy(originalLeft));
  const [rightSide] = useState<string[]>(() => shuffleArrayCopy(originalRight));
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [wrongAttempt, setWrongAttempt] = useState(false);

  const selectLeft = (left: string) => {
    if (userMatches[left] || disabled) return;
    setSelectedLeft(left);
  };

  const selectRight = (right: string) => {
    if (Object.values(userMatches).includes(right) || disabled) return;
    setSelectedRight(right);
  };

  useEffect(() => {
    if (!selectedLeft || !selectedRight) return;

    const correctPair = pairs.find((p) => p.left === selectedLeft && p.right === selectedRight);

    if (correctPair) {
      const newMatches = { ...userMatches, [correctPair.left]: correctPair.right };
      setUserMatches(newMatches);
      setSelectedLeft(null);
      setSelectedRight(null);
      setWrongAttempt(false);

      // Auto-advance if all pairs are matched
      const allMatched = pairs.every((p) => newMatches[p.left] === p.right);
      if (allMatched) {
        setQuizState(QuizState.CONTINUE_BUTTON);
      }
    } else {
      setWrongAttempt(true);
      const t = setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrongAttempt(false);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [selectedLeft, selectedRight]);

  const isMatchedLeft = (l: string) => userMatches[l] !== undefined;
  const isMatchedRight = (r: string) => Object.values(userMatches).includes(r);
  const baseWhite = "bg-white dark:bg-white dark:text-black";
  const getLeftStyles = (left: string) => {
    const sel = selectedLeft === left;
    const match = isMatchedLeft(left);
    const wrong = wrongAttempt && sel;
    return ["border rounded p-2 cursor-pointer text-left transition", match && "bg-green-300 border-green-500 opacity-70", sel && !match && "bg-green-200 border-green-500", wrong && "bg-red-300 border-red-500", !sel && !match && !wrong && baseWhite].filter(Boolean).join(" ");
  };
  const getRightStyles = (right: string) => {
    const sel = selectedRight === right;
    const match = isMatchedRight(right);
    const wrong = wrongAttempt && sel;
    return ["border rounded p-2 cursor-pointer text-left transition", match && "bg-green-300 border-green-500 opacity-70", sel && !match && "bg-green-200 border-green-500", wrong && "bg-red-300 border-red-500", !sel && !match && !wrong && baseWhite].filter(Boolean).join(" ");
  };
  const disableCheck = Object.keys(userMatches).length !== currentQuestion.pairs?.length;

  return (
    <div className='grid grid-cols-2 gap-6 mt-4'>
      <div className='flex flex-col gap-3'>
        {leftSide.map((left) => (
          <div key={left} className={getLeftStyles(left)} onClick={() => selectLeft(left)}>
            {left}
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-3'>
        {rightSide.map((right) => (
          <div key={right} className={getRightStyles(right)} onClick={() => selectRight(right)}>
            {right}
          </div>
        ))}
      </div>

      <div className='mt-4'>
        {quizState === QuizState.SELECT_ANSWER ? (
          <Button variant='skyBlue' onClick={handleCheck} disabled={disableCheck}>
            CHECK
          </Button>
        ) : (
          <Button variant='skyBlue' onClick={handleContinue}>
            CONTINUE
          </Button>
        )}
      </div>
    </div>
  );
}
