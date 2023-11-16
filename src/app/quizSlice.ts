import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  status: "loading",
  points: 0,
  answer: null,
  index: 0,
};

const quizSlice = createSlice({
  name: "gotTrivia",
  initialState,
  reducers: {
    dataReceived: () => {},
    dataActive: () => {},
    dataFailed: () => {},
    nextQuestion: () => {},
    nextAnswer: () => {},
    quizFinished: () => {},
    quizRestart: () => {},
  },
});

export const {
  dataActive,
  dataFailed,
  dataReceived,
  nextAnswer,
  nextQuestion,
  quizRestart,
  quizFinished,
} = quizSlice.actions;

export default quizSlice.reducer;
