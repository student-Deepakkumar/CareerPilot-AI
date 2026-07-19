function FeedbackCard({ feedback }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">
        AI Interview Feedback
      </h2>

      {/* Feedback */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-green-400 mb-3">
          💡 Improvement Tips
        </h3>

        <ul className="space-y-3">
          {feedback.feedback?.map((tip, index) => (
            <li
              key={index}
              className="bg-slate-900 rounded-xl p-4 text-slate-300"
            >
              ✅ {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Next Question */}
      {feedback.nextQuestion && (
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-3">
            🎯 Next Interview Question
          </h3>

          <div className="bg-blue-500/10 border border-blue-500 rounded-xl p-5">
            <p className="text-white text-lg">{feedback.nextQuestion}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedbackCard;
