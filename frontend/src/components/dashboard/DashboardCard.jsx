function DashboardCard({ title, value, color }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
      <h3 className="text-slate-400">{title}</h3>

      <h1 className={`text-5xl font-bold mt-4 ${color}`}>{value}</h1>
    </div>
  );
}

export default DashboardCard;
