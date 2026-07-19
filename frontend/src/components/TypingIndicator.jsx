function TypingIndicator() {
  return (
    <div className="flex justify-start mb-6">
      <div className="flex gap-3 items-end">
        {/* AI Avatar */}
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          🤖
        </div>

        {/* Typing Bubble */}
        <div className="bg-slate-800 rounded-2xl px-5 py-4 flex gap-2">
          <span className="w-2 h-2 rounded-full bg-white animate-bounce"></span>

          <span
            className="w-2 h-2 rounded-full bg-white animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>

          <span
            className="w-2 h-2 rounded-full bg-white animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;
