import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";

export type QuestionsProps = {
  id?: number;
  question: string;
  options: [string, string, string, string];
  correctOption: number;
  points: number;
};

export type QuestionProps = {
  index: number;
  answer: number;
  question: QuestionsProps;
  numOfQuestions: number;
};

export type StateProps = {
  questions: QuestionsProps;
  status: string;
  points: number;
  answer: number | null;
  index: number;
};

export type ProgressBarProps = {
  index: number;
  points: number;
  maxPoints: number;
  numOfQuestions: number;
};

export type NextQuestionProps = {
  answer: number;
};

export type FinishingScreenProps = {
  points: number;
  percent: number;
  maxPoints: number;
  dispatch: Dispatch<AnyAction>;
};

export type StartingScreenProps = {
  numOfQuestions: number;
  dispatch: Dispatch<AnyAction>;
};
