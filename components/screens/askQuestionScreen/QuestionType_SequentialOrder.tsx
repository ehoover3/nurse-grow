import { useState, useEffect } from "react";
import shuffleArray from "@/utils/shuffleArray";
import Button from "@/components/Button";
import { QuizState } from "@/components/Quiz";
import { QuizType } from "@/data/quizzes";

type QuestionType_SequentialOrder_WordBankItem = {
  text: string;
  image?: string;
};

export default function QuestionType_SequentialOrder({ currentQuestion, quizState, setQuizState, onScoreIncrement, handleContinue }: { currentQuestion: QuizType["questions"][number]; quizState: QuizState; setQuizState: React.Dispatch<React.SetStateAction<QuizState>>; onScoreIncrement: () => void; handleContinue: any }) {
  const [availableWords, setAvailableWords] = useState<QuestionType_SequentialOrder_WordBankItem[]>([]);
  const [answerWords, setAnswerWords] = useState<QuestionType_SequentialOrder_WordBankItem[]>([]);
  const [result, setResult] = useState<boolean | null>(null);

  useEffect(() => {
    setAvailableWords(shuffleArray(currentQuestion.sequentialOrderWordBank ?? []));
    setAnswerWords([]);
    setResult(null);
  }, [currentQuestion]);

  const addWord = (word: QuestionType_SequentialOrder_WordBankItem) => {
    if (quizState !== QuizState.SELECT_ANSWER) return;
    setAvailableWords((prev) => prev.filter((w) => w !== word));
    setAnswerWords((prev) => [...prev, word]);
  };

  const removeWord = (index: number) => {
    if (quizState !== QuizState.SELECT_ANSWER) return;
    const word = answerWords[index];
    setAnswerWords((prev) => prev.filter((_, i) => i !== index));
    setAvailableWords((prev) => [...prev, word]);
  };

  const checkAnswer = () => {
    if (!currentQuestion.sequentialOrderAnswer) return;

    const isCorrect = answerWords.length === currentQuestion.sequentialOrderAnswer.length && answerWords.every((w, i) => w.text === currentQuestion.sequentialOrderAnswer![i]);

    setResult(isCorrect);

    if (isCorrect) {
      onScoreIncrement();
      setQuizState(QuizState.CONTINUE_BUTTON);
    } else {
      setQuizState(QuizState.SELECT_ANSWER);
    }
  };

  const reset = () => {
    setAvailableWords(shuffleArray(currentQuestion.sequentialOrderWordBank ?? []));
    setAnswerWords([]);
    setResult(null);
  };

  return (
    <div className='space-y-4'>
      {/* Answer Area */}
      <div className='min-h-[60px] p-3 border rounded-xl flex flex-wrap gap-2 bg-gray-50'>
        {answerWords.length === 0 && <span className='text-gray-400'>Tap words to build your answer</span>}

        {answerWords.map((word, index) => (
          <button key={`${word.text}-${index}`} onClick={() => removeWord(index)} className='px-3 py-1 rounded-lg bg-blue-600 text-white shadow flex items-center gap-2'>
            {word.image && <img src={word.image} alt='' className='h-6 w-6 object-contain' />}
            {word.text}
          </button>
        ))}
      </div>

      {/* Word Bank */}
      <div className='p-3 border rounded-xl flex flex-wrap gap-2'>
        {availableWords.map((word) => (
          <button key={word.text} onClick={() => addWord(word)} className='px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center gap-2'>
            {word.image && <img src={word.image} alt='' className='h-6 w-6 object-contain' />}
            {word.text}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className='flex gap-2'>
        {quizState === QuizState.SELECT_ANSWER ? (
          <Button variant='green' onClick={checkAnswer} disabled={answerWords.length === 0}>
            CHECK
          </Button>
        ) : (
          <Button variant='skyBlue' onClick={handleContinue}>
            CONTINUE
          </Button>
        )}

        <Button variant='gray' onClick={reset}>
          RESET
        </Button>
      </div>

      {/* Result */}
      {result !== null && <div className={`p-3 rounded-xl text-white ${result ? "bg-green-600" : "bg-red-600"}`}>{result ? "Correct!" : "Not quite — try again."}</div>}
    </div>
  );
}
