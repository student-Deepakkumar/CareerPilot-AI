import { FaPaperPlane, FaPaperclip, FaMicrophone } from "react-icons/fa";

function MessageInput({ message, setMessage, sendMessage, loading }) {
  return (
    <div className="border-t border-slate-700 bg-slate-900 p-5">
      <div className="flex items-center gap-3 bg-slate-800 rounded-2xl p-3">
        {/* Attachment Button */}
        <button
          className="text-slate-400 hover:text-white transition"
          title="Upload Resume (Coming Soon)"
        >
          <FaPaperclip size={18} />
        </button>

        {/* Input */}
        <input
          type="text"
          placeholder="Ask anything about your career..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-400"
        />

        {/* Voice Button */}
        <button
          className="text-slate-400 hover:text-white transition"
          title="Voice Chat (Coming Soon)"
        >
          <FaMicrophone size={18} />
        </button>

        {/* Send Button */}
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 rounded-xl px-5 py-3 transition"
        >
          <FaPaperPlane />
        </button>
      </div>

      <p className="text-xs text-slate-500 mt-2 text-center">
        CareerPilot AI can make mistakes. Verify important career information.
      </p>
    </div>
  );
}

export default MessageInput;
