import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ErrorMessage,
  FinishingScreen,
  LoadingMessage,
  ProgressBar,
  Questions,
  StartingScreen,
} from "../utils/helper";

import {
  dataActive,
  dataFailed,
  dataReceived,
  quizRestart,
} from "../../app/quizSlice";

const Home = () => {
  const { questions, status, index, points, answer } = useSelector(
    (state) => state.gotTrivia,
  );

  const dispatch = useDispatch();

  const numOfQuestions = questions.length;
  const maxPoints = questions.reduce((acc, cur) => acc + cur.points, 0);
  const percent = (points / maxPoints) * 100;

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        return dispatch(dataReceived(data));
      } catch (err) {
        dispatch(dataFailed());
      }
    }
    getData();
  }, [dispatch]);

  return (
    <main className="mx-auto w-1/2">
      {status === "error" && <ErrorMessage />}
      {status === "loading" && <LoadingMessage />}
      {status === "ready" && (
        <StartingScreen
          numOfQuestions={numOfQuestions}
          dispatch={() => dispatch(dataActive())}
        />
      )}
      {status === "active" && (
        <>
          <ProgressBar
            index={index}
            points={points}
            maxPoints={maxPoints}
            numOfQuestions={numOfQuestions}
          />
          <Questions
            index={index}
            answer={answer}
            question={questions[index]}
            numOfQuestions={numOfQuestions}
          />
        </>
      )}
      {status === "finished" && (
        <FinishingScreen
          points={points}
          percent={percent}
          maxPoints={maxPoints}
          dispatch={() => dispatch(quizRestart())}
        />
      )}
    </main>
  );
};

export default Home;
