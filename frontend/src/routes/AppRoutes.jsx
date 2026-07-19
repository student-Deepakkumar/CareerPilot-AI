import { Routes, Route } from "react-router-dom";

import Chat from "../pages/Chat";
import Resume from "../pages/Resume";
import JobMatcher from "../pages/JobMatcher";
import Interview from "../pages/Interview";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Chat />} />

      <Route path="/resume" element={<Resume />} />

      <Route path="/job-matcher" element={<JobMatcher />} />

      <Route path="/interview" element={<Interview />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route
        path="/planner"
        element={
          <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center text-4xl">
            📅 Study Planner (Coming Soon)
          </div>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
