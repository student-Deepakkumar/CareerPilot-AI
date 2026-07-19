import CircularScore from "./CircularScore";

function ATSCard({ score }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">ATS Score</h2>

      <CircularScore score={score} />

      <p className="text-center mt-6 text-slate-400">AI Resume Compatibility</p>
    </div>
  );
}

export default ATSCard;
