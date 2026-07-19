import { Briefcase, Code, FolderGit2, FileText } from "lucide-react";

function StatsCard({ title, value, icon }) {
  const icons = {
    skills: <Code size={28} className="text-blue-400" />,
    projects: <FolderGit2 size={28} className="text-green-400" />,
    sections: <FileText size={28} className="text-purple-400" />,
    ats: <Briefcase size={28} className="text-yellow-400" />,
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-400 text-sm">{title}</p>

          <h2 className="text-4xl font-bold text-white mt-2">{value}</h2>
        </div>

        {icons[icon]}
      </div>
    </div>
  );
}

export default StatsCard;
