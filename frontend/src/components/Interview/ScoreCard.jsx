function ProgressBar({ label, value, color }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-slate-300">{label}</span>
        <span className="text-white font-semibold">{value}/10</span>
      </div>

      <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`${color} h-3 rounded-full transition-all duration-700`}
          style={{ width: `${value * 10}%` }}
        />
      </div>
    </div>
  );
}

function ScoreCard({ feedback }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Interview Score</h2>

      {/* Overall Score */}
      <div className="flex justify-center mb-8">
        <div className="w-36 h-36 rounded-full border-8 border-blue-500 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
              {feedback.overallScore}
            </h1>
            <p className="text-slate-400 text-sm">Overall</p>
          </div>
        </div>
      </div>

      <ProgressBar
        label="Communication"
        value={feedback.communication}
        color="bg-green-500"
      />

      <ProgressBar
        label="Technical"
        value={feedback.technical}
        color="bg-blue-500"
      />

      <ProgressBar
        label="Confidence"
        value={feedback.confidence}
        color="bg-yellow-500"
      />
    </div>
  );
}

export default ScoreCard;
