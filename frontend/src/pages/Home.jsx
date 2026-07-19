import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">
        🚀 CareerPilot AI
      </h1>

      <p className="text-xl text-gray-300 mb-8">
        Your AI Career Assistant powered by Gemini
      </p>

      <button
        onClick={() => navigate("/chat")}
        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg"
      >
        Start Chat
      </button>
    </div>
  );
}

export default Home;