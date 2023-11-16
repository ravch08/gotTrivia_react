const StartingScreen = ({ numOfQuestions, dispatch }) => {
  return (
    <section className="text-center">
      <h2 className="text-5xl font-semibold">Welcome to the GOT Quiz</h2>
      <h3 className="py-4 text-xl">
        {numOfQuestions} questions to test you GOT trivia knowledge!
      </h3>
      <button className="btn btn-primary mt-8" onClick={dispatch}>
        Start Quiz
      </button>
    </section>
  );
};

export default StartingScreen;
