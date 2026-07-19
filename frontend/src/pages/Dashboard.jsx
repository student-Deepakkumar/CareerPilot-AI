import DashboardCard from "../components/dashboard/DashboardCard";
import ProfileCard from "../components/dashboard/ProfileCard";
import ProgressCard from "../components/dashboard/ProgressCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import GoalCard from "../components/dashboard/GoalCard";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 p-10">
      <h1 className="text-4xl font-bold text-white mb-8">
        CareerPilot Dashboard
      </h1>

      {/* Profile */}
      <ProfileCard />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <DashboardCard
          title="Resume ATS Score"
          value="85%"
          color="text-green-400"
        />

        <DashboardCard
          title="Job Match Score"
          value="82%"
          color="text-blue-400"
        />

        <DashboardCard
          title="Interview Score"
          value="7.8/10"
          color="text-yellow-400"
        />
      </div>

      {/* Goal & Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <GoalCard />

        <ProgressCard title="Career Progress" value={75} />
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <RecentActivity />
      </div>
    </div>
  );
}

export default Dashboard;
