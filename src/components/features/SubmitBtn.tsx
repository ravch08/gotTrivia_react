import { useDispatch } from "react-redux";
import { quizFinished } from "../../app/quizSlice";

const SubmitBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-primary mt-12"
      onClick={() => dispatch(quizFinished())}
    >
      Submit
    </button>
  );
};

export default SubmitBtn;
