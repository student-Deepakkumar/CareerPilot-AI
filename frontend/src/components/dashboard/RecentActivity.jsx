function RecentActivity() {
  const activities = [
    "✅ Resume analyzed",
    "💼 Job match completed",
    "🎤 Interview completed",
    "📄 Report downloaded",
  ];

  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Recent Activity</h2>

      <ul className="space-y-3">
        {activities.map((item, index) => (
          <li key={index} className="text-slate-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivity;
