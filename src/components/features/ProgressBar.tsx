const ProgressBar = ({ index, maxPoints, points, numOfQuestions }) => {
  return (
    <section className="mb-24">
      <div className="mt-8 flex items-center justify-center gap-4">
        <span>
          <strong>Points:</strong>
        </span>
        <span>
          {points}/{maxPoints}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <progress
          value={index + 1}
          max={numOfQuestions}
          className="w-full bg-slate-100"
        >
          {index + 1}
        </progress>
        <span className="text-lg font-bold">{index + 1}</span>
      </div>
    </section>
  );
};

export default ProgressBar;
