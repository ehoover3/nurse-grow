import React from "react";
import { useState, useEffect } from "react";
import shuffleArray from "../../../utils/shuffleArray";
import { QuizState } from "../../Quiz";
import { QuizType } from "@/data/quizzes";
import { Header } from "./Header";
import QuestionType_MultipleChoice from "./QuestionType_MultipleChoice";
import QuestionType_Matching from "./QuestionType_Matching";
import QuestionType_SequentialOrder from "./QuestionType_SequentialOrder";
import QuestionType_RPGInteraction from "./QuestionType_RPGInteraction";

type AskQuestionScreenProps = {
  exitQuiz: () => void;
  quizState: QuizState;
  setQuizState: React.Dispatch<React.SetStateAction<QuizState>>;
  quiz: QuizType;
};

type AnswerFeedbackProps = {
  quizState: QuizState;
  currentQuestion: QuizType["questions"][number];
};

export function Tooltip(text: string, tooltipTerms: { label: string; meaning: string }[] = []) {
  return text.split(/(\{.*?\})/g).map((part, i) => {
    const match = part.match(/^\{(.+?)\}$/);
    if (!match) return part;
    const label = match[1];
    const term = tooltipTerms.find((t) => t.label === label);
    if (!term) return label;
    return (
      <span className='relative group cursor-help font-semibold underline decoration-dotted' key={i}>
        {label}
        <span className='absolute left-0 top-full mt-1 hidden group-hover:block p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-20 w-max'>{term.meaning}</span>
      </span>
    );
  });
}

function Question({ question, tooltipTerms }: { question: string; tooltipTerms?: { label: string; meaning: string }[] }) {
  return <p className='text-lg font-bold mb-4'>{Tooltip(question, tooltipTerms ?? [])}</p>;
}

function AnswerFeedback({ quizState, currentQuestion }: AnswerFeedbackProps) {
  if (quizState !== QuizState.CONTINUE_BUTTON) return null;
  return (
    <>
      {currentQuestion.feedbackImage && (
        <div className='mt-4'>
          <img src={currentQuestion.feedbackImage} alt='Answer explanation' className='max-w-full h-auto rounded border' />
        </div>
      )}
      {currentQuestion.feedbackText && (
        <div className='mt-4' style={{ whiteSpace: "pre-line" }}>
          {currentQuestion.feedbackText}
        </div>
      )}
    </>
  );
}

const shuffleAnswerOptions = (questions: QuizType["questions"]): QuizType["questions"] => questions.map((q) => ({ ...q, options: q.multipleChoiceOptions ? shuffleArray(q.multipleChoiceOptions) : q.multipleChoiceOptions }));
export function AskQuestionScreen({ exitQuiz, quizState, setQuizState, quiz }: AskQuestionScreenProps) {
  const [score, setScore] = useState(0);
  const [questionsToAsk, setQuestionsToAsk] = useState<QuizType["questions"]>([]);
  const [questionsToAskIndex, setQuestionsToAskIndex] = useState(0);
  const [questionsToRetry, setQuestionsToRetry] = useState<QuizType["questions"]>([]);
  const [userSelectedAnswer, setUserSelectedAnswer] = useState<string | null>(null);
  const [userMatches, setUserMatches] = useState<Record<string, string>>({});
  const totalQuestions = quiz.questions.length;
  useEffect(() => {
    setQuestionsToAsk(shuffleAnswerOptions(quiz.questions));
  }, [quiz.questions]);
  const currentQuestion = questionsToAsk[questionsToAskIndex] || quiz.questions[0];
  const handleCheck = () => {
    if (currentQuestion.type === "multiple-choice") {
      if (!userSelectedAnswer) return;
      userSelectedAnswer === currentQuestion.multipleChoiceAnswer ? setScore((s) => s + 1) : setQuestionsToRetry((prev) => [...prev, currentQuestion]);
    }
    if (currentQuestion.type === "matching") {
      const correct = currentQuestion.matchingPairs!.every((pair) => userMatches[pair.left] === pair.right);
      correct ? setScore((s) => s + 1) : setQuestionsToRetry((prev) => [...prev, currentQuestion]);
    }
    setQuizState(QuizState.CONTINUE_BUTTON);
  };

  const handleContinue = () => {
    const nextIndex = questionsToAskIndex + 1;
    if (nextIndex < questionsToAsk.length) {
      setQuestionsToAskIndex(nextIndex);
      setUserSelectedAnswer(null);
      setUserMatches({});
      setQuizState(QuizState.SELECT_ANSWER);
    } else if (questionsToRetry.length > 0) {
      setQuestionsToAsk(shuffleAnswerOptions(questionsToRetry));
      setQuestionsToAskIndex(0);
      setQuestionsToRetry([]);
      setUserSelectedAnswer(null);
      setUserMatches({});
      setQuizState(QuizState.SELECT_ANSWER);
    } else {
      setQuizState(QuizState.VIEW_SUMMARY);
    }
  };

  return (
    <div className='p-8 relative'>
      <Header exitQuiz={exitQuiz} score={score} totalQuestions={totalQuestions} />
      <Question question={currentQuestion.question} tooltipTerms={currentQuestion.tooltipTerms ?? []} />
      {currentQuestion.type === "multiple-choice" && <QuestionType_MultipleChoice currentQuestion={currentQuestion} handleCheck={handleCheck} handleContinue={handleContinue} quizState={quizState} setQuizState={setQuizState} setUserSelectedAnswer={setUserSelectedAnswer} tooltipTerms={currentQuestion.tooltipTerms ?? []} userMatches={userMatches} userSelectedAnswer={userSelectedAnswer} />}
      {currentQuestion.type === "matching" && <QuestionType_Matching currentQuestion={currentQuestion} handleCheck={handleCheck} handleContinue={handleContinue} pairs={currentQuestion.matchingPairs ?? []} quizState={quizState} setQuizState={setQuizState} setUserMatches={setUserMatches} userMatches={userMatches} userSelectedAnswer={userSelectedAnswer} />}
      {currentQuestion.type === "word-order" && <QuestionType_SequentialOrder currentQuestion={currentQuestion} handleContinue={handleContinue} onScoreIncrement={() => setScore((s) => s + 1)} quizState={quizState} setQuizState={setQuizState} />}
      {currentQuestion.type === "rpg-interaction" && <QuestionType_RPGInteraction currentQuestion={currentQuestion} handleContinue={handleContinue} quizState={quizState} setQuizState={setQuizState} onScoreIncrement={() => setScore((s) => s + 1)} />}
      <AnswerFeedback quizState={quizState} currentQuestion={currentQuestion} />
    </div>
  );
}
