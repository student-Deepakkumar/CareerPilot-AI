import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import API from "../services/api";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import Loader from "./Loader";

function ChatWindow() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Welcome to CareerPilot AI\n\nHow can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessage("");

    setLoading(true);

    try {
      const res = await API.post("/chat", {
        message: userMessage.text,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: res.data.reply,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  const handleNewChat = () => {
    setMessages([
      {
        sender: "ai",
        text: "👋 Welcome to CareerPilot AI\n\nHow can I help you today?",
      },
    ]);

    setMessage("");
  };

  return (
    <div className="flex-1 bg-slate-900 text-white flex flex-col h-screen">
      {/* Header */}
      <ChatHeader onNewChat={handleNewChat} />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-5">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-3xl rounded-2xl px-5 py-4 leading-7 ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-white"
              }`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}

        {loading && <TypingIndicator />}

        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div className="border-t border-slate-700 p-5">
        <div className="flex gap-3">
          <input
            type="text"
            value={message}
            placeholder="Ask anything about your career..."
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            className="flex-1 bg-slate-800 rounded-xl px-5 py-4 outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 px-8 rounded-xl font-semibold transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
