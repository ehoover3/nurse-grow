import { QuizState } from "@/components/Quiz";
import { QuizType } from "@/data/quizzes";
import { Tooltip } from ".";
import Button, { Variant } from "@/components/Button";

type QuestionType_MultipleChoice_Props = {
  currentQuestion: QuizType["questions"][number];
  quizState: QuizState;
  userSelectedAnswer: string | null;
  setUserSelectedAnswer: (multipleChoiceAnswer: string | null) => void;
  tooltipTerms?: { label: string; meaning: string }[];
  setQuizState: any;
  handleCheck: any;
  userMatches: any;
  handleContinue: any;
};

export default function QuestionType_MultipleChoice({ currentQuestion, quizState, userSelectedAnswer, setUserSelectedAnswer, tooltipTerms, handleCheck, handleContinue }: QuestionType_MultipleChoice_Props) {
  if (!currentQuestion.multipleChoiceOptions) return null;
  const disableCheck = !userSelectedAnswer;
  return (
    <div className='grid gap-2'>
      {currentQuestion.multipleChoiceOptions.map((option) => {
        const text = option.text;
        const image = option.image;
        const isSelecting = quizState === QuizState.SELECT_ANSWER;
        const isShowingResults = quizState === QuizState.CONTINUE_BUTTON;
        const isUserPick = userSelectedAnswer === text;
        const isCorrect = text === currentQuestion.multipleChoiceAnswer;
        let variant: Variant = "white";
        if (isSelecting && isUserPick) variant = "darkGray";
        else if (isShowingResults && isCorrect) variant = "brightGreen";
        else if (isShowingResults && isUserPick) variant = "red";
        return (
          <Button key={text} onClick={() => isSelecting && setUserSelectedAnswer(text)} disabled={!isSelecting} variant={variant} className='border w-full p-3 rounded flex flex-col items-center text-left'>
            {Boolean(image && image.trim()) && <img src={image} alt='' className='h-48 object-contain rounded' />}
            <span>{Tooltip(text, tooltipTerms ?? [])}</span>
          </Button>
        );
      })}

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
