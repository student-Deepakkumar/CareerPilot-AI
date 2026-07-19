function InterviewForm({
  company,
  setCompany,
  role,
  setRole,
  difficulty,
  setDifficulty,
}) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-8 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Interview Setup</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Company */}
        <div>
          <label className="block text-slate-300 mb-2">Company</label>

          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-blue-500"
          >
            <option>Google</option>
            <option>Microsoft</option>
            <option>Amazon</option>
            <option>Meta</option>
            <option>Adobe</option>
            <option>Flipkart</option>
            <option>Oracle</option>
          </select>
        </div>

        {/* Role */}
        <div>
          <label className="block text-slate-300 mb-2">Role</label>

          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Software Engineer Intern"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        {/* Difficulty */}
        <div>
          <label className="block text-slate-300 mb-2">Difficulty</label>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-blue-500"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default InterviewForm;
