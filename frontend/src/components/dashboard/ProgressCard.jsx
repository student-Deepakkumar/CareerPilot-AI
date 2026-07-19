function ProgressCard({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>

      <div className="w-full bg-slate-700 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>

      <p className="text-slate-400 mt-3">{value}% Completed</p>
    </div>
  );
}

export default ProgressCard;
