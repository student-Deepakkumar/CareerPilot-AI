import { CheckCircle, AlertTriangle } from "lucide-react";

function AnalysisCard({ title, items = [], type }) {
  const isStrength = type === "strength";

  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg h-full">
      <div className="flex items-center gap-3 mb-6">
        {isStrength ? (
          <CheckCircle className="text-green-400" size={28} />
        ) : (
          <AlertTriangle className="text-yellow-400" size={28} />
        )}

        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex gap-3 p-4 rounded-xl transition duration-300 hover:scale-[1.02]
            ${
              isStrength
                ? "bg-green-900/20 border border-green-700"
                : "bg-yellow-900/20 border border-yellow-700"
            }`}
          >
            <div className="mt-1">
              {isStrength ? (
                <CheckCircle size={18} className="text-green-400" />
              ) : (
                <AlertTriangle size={18} className="text-yellow-400" />
              )}
            </div>

            <p className="text-slate-300 leading-7">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnalysisCard;
