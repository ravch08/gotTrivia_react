const FinishingScreen = () => {
  return (
    <section className="text-center">
      <p>
        You scored <strong>{points}</strong> points out of {maxPoints} |{" "}
        {Math.ceil(percent)}%.
      </p>

      <button className="btn btn-primary mt-12" onClick={dispatch}>
        Start Again
      </button>
    </section>
  );
};

export default FinishingScreen;
