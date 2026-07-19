import { Send, Loader2 } from "lucide-react";

function AnswerBox({ answer, setAnswer, submitAnswer, loading }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">Your Answer</h2>

      <textarea
        rows={8}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your interview answer here..."
        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 outline-none focus:border-blue-500 resize-none"
      />

      <div className="flex justify-end mt-5">
        <button
          onClick={submitAnswer}
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 px-6 py-3 rounded-xl text-white font-semibold transition"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Analyzing...
            </>
          ) : (
            <>
              <Send size={20} />
              Submit Answer
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default AnswerBox;
