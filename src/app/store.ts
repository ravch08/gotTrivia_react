import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quizSlice";

const store = configureStore({
  reducer: {
    gotTrivia: quizSlice,
  },
});

export default store;
