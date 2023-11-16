import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  status: "loading", //"loading", "ready", "active", "finished", "error",
  points: 0,
  answer: null,
  index: 0,
};

const quizSlice = createSlice({
  name: "gotTrivia",
  initialState,
  reducers: {
    dataReceived: (state, action) => {
      state.questions = action.payload;
      state.status = "ready";
    },
    dataActive: (state) => {
      state.status = "active";
    },
    dataFailed: (state) => {
      state.status = "error";
    },
    nextQuestion: (state) => {
      state.index += 1;
      state.answer = null;
    },
    checkAnswer: (state, action) => {
      const question = state.questions.at(state.index);
      state.answer = action.payload;

      if (action.payload === question?.correctOption) {
        state.points += question?.points;
      } else {
        state.points;
      }
    },
    quizFinished: (state) => {
      state.status = "finished";
    },
    quizRestart: (state) => {
      state.index = 0;
      state.answer = null;
      state.points = 0;
      state.status = "ready";
    },
  },
});

export const {
  dataActive,
  dataFailed,
  dataReceived,
  checkAnswer,
  nextQuestion,
  quizRestart,
  quizFinished,
} = quizSlice.actions;

export default quizSlice.reducer;
