import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Bot, User, Copy, Check } from "lucide-react";

function MessageBubble({ sender, text }) {
  const [copied, setCopied] = useState(false);

  const isUser = sender === "user";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`flex gap-3 mb-6 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {/* AI Avatar */}
      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
          <Bot size={20} className="text-white" />
        </div>
      )}

      {/* Bubble */}
      <div
        className={`relative max-w-3xl rounded-2xl px-5 py-4 shadow-lg ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-800 text-white border border-slate-700"
        }`}
      >
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 text-xs text-slate-400">
          <span>{time}</span>

          {!isUser && (
            <button
              onClick={handleCopy}
              className="hover:text-white transition"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          )}
        </div>
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center shrink-0">
          <User size={18} className="text-white" />
        </div>
      )}
    </div>
  );
}

export default MessageBubble;
