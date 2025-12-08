"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QuizType } from "../data/quizzes";
import { AskQuestionScreen } from "./screens/AskQuestionScreen";
import { SummaryScreen } from "./screens/SummaryScreen";
import { ErrorScreen } from "./screens/ErrorScreens";

export enum QuizState {
  SELECT_ANSWER,
  CHECK_BUTTON,
  CONTINUE_BUTTON,
  VIEW_SUMMARY,
}

export default function Quiz({ quiz }: { quiz: QuizType }) {
  const router = useRouter();
  const [quizState, setQuizState] = useState<QuizState>(QuizState.SELECT_ANSWER);
  const exitQuiz = () => router.push("/");
  switch (quizState) {
    case QuizState.SELECT_ANSWER:
    case QuizState.CHECK_BUTTON:
    case QuizState.CONTINUE_BUTTON:
      return <AskQuestionScreen exitQuiz={exitQuiz} quiz={quiz} quizState={quizState} setQuizState={setQuizState} />;
    case QuizState.VIEW_SUMMARY:
      return <SummaryScreen exitQuiz={exitQuiz} />;
    default:
      return <ErrorScreen quizState={quizState} />;
  }
}
