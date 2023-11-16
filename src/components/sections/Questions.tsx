import { useDispatch } from "react-redux";
import { checkAnswer } from "../../app/quizSlice";
import { NextQuestion, SubmitBtn } from "../utils/helper";

const Questions = ({ question, answer, numOfQuestions, index }) => {
  const dispatch = useDispatch();

  const hasAnswered = answer !== null;

  return (
    <>
      <section>
        <h2 className="mb-12 text-2xl">{question?.question}</h2>
        <div className="flex flex-col items-center gap-4">
          {question?.options.map((option, idx) => {
            return (
              <button
                key={option}
                disabled={hasAnswered}
                onClick={() => dispatch(checkAnswer(idx))}
                className={`btn btn-option ${idx === answer ? "answer" : ""} ${
                  hasAnswered
                    ? idx === question?.correctOption
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </section>
      {index < numOfQuestions - 1 ? (
        <NextQuestion answer={answer} />
      ) : (
        <SubmitBtn />
      )}
    </>
  );
};

export default Questions;
