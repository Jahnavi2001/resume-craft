const Summary = () => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-xl font-semibold">Summary</h1>
      <p className="text-gray-400">
        Summarize your work experience, education and skills here.
      </p>

      <div className="py-4">
        <textarea
          className="border-gray-500"
          rows="10"
          placeholder="Dedicated [High School] Teacher with [7] years of experience..."
        ></textarea>
      </div>
    </div>
  );
};

export default Summary;
