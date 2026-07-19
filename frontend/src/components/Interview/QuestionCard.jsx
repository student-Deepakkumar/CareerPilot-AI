import { MessageSquare } from "lucide-react";

function QuestionCard({ question }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg mb-8">
      <div className="flex items-center gap-3 mb-4">
        <MessageSquare className="text-blue-400" size={28} />
        <h2 className="text-2xl font-bold text-white">Interview Question</h2>
      </div>

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">
        <p className="text-lg text-slate-200 leading-8">{question}</p>
      </div>
    </div>
  );
}

export default QuestionCard;
