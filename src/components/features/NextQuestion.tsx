import { useDispatch } from "react-redux";
import { nextQuestion } from "../../app/quizSlice";
import { NextQuestionProps } from "../../types/types";

const NextQuestion = ({ answer }: NextQuestionProps) => {
  const dispatch = useDispatch();

  if (answer === null) return;

  return (
    <button
      className="btn btn-primary mt-16"
      onClick={() => dispatch(nextQuestion())}
    >
      Next Question
    </button>
  );
};

export default NextQuestion;
