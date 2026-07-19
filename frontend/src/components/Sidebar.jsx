import { Link, useLocation } from "react-router-dom";
import {
  FaPlus,
  FaComments,
  FaFileAlt,
  FaBriefcase,
  FaRobot,
  FaCalendarAlt,
  FaChartBar,
  FaUserCircle,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      id: "chat",
      title: "AI Chat",
      icon: <FaComments />,
      path: "/",
    },
    {
      id: "resume",
      title: "Resume Analyzer",
      icon: <FaFileAlt />,
      path: "/resume",
    },
    {
      id: "jobs",
      title: "Job Matcher",
      icon: <FaBriefcase />,
      path: "/job-matcher",
    },
    {
      id: "interview",
      title: "Interview Coach",
      icon: <FaRobot />,
      path: "/interview",
    },
    {
      id: "planner",
      title: "Study Planner",
      icon: <FaCalendarAlt />,
      path: "/planner",
    },
    {
      id: "dashboard",
      title: "Dashboard",
      icon: <FaChartBar />,
      path: "/dashboard",
    },
    {
      id: "interview",
      title: "Interview Coach",
      icon: <FaRobot />,
      path: "/interview",
    },
  ];

  return (
    <aside className="w-72 h-screen bg-slate-950 border-r border-slate-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-blue-500">🚀 CareerPilot AI</h1>

        <p className="text-slate-400 text-sm mt-2">
          Your Personal AI Career Coach
        </p>
      </div>

      {/* New Chat Button */}
      <div className="p-5">
        <Link
          to="/"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition"
        >
          <FaPlus />
          New Chat
        </Link>
      </div>

      {/* Menu */}
      <div className="flex-1 px-4 overflow-y-auto">
        <p className="text-xs text-slate-500 uppercase mb-4 tracking-wider">
          AI Tools
        </p>

        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-blue-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <span className="text-lg">{item.icon}</span>

            <span className="font-medium">{item.title}</span>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 p-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-2xl">
            <FaUserCircle />
          </div>

          <div>
            <h3 className="text-white font-semibold">Deepak Kumar</h3>

            <p className="text-xs text-slate-400">B.Tech CSE Student</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
