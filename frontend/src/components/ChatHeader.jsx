import { Trash2, Settings, Moon, Bot } from "lucide-react";

function ChatHeader({ onNewChat }) {
  return (
    <div className="flex items-center justify-between p-5 border-b border-slate-700 bg-slate-900">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-xl">
          <Bot size={22} className="text-white" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">CareerPilot AI</h2>

          <div className="flex items-center gap-2 text-sm text-green-400">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Online
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <button
          onClick={onNewChat}
          className="p-2 rounded-lg hover:bg-slate-800 transition"
          title="New Chat"
        >
          <Trash2 size={20} className="text-gray-300" />
        </button>

        <button
          className="p-2 rounded-lg hover:bg-slate-800 transition"
          title="Theme"
        >
          <Moon size={20} className="text-gray-300" />
        </button>

        <button
          className="p-2 rounded-lg hover:bg-slate-800 transition"
          title="Settings"
        >
          <Settings size={20} className="text-gray-300" />
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
