import StatsCards from "../../components/dashboard/StatsCards";
import ProjectHealth from "../../components/dashboard/ProjectHealth";
import TeamWorkload from "../../components/dashboard/TeamWorkload";
import BottlenecksTable from "../../components/dashboard/BottlenecksTable";

const DashboardPage = () => {
  return (
    <div className="space-y-8">

      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-navy dark:text-white tracking-tight">
            Executive Overview
          </h2>
          <p className="text-slate-custom mt-1">
            Real-time organization health and performance metrics.
          </p>
        </div>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectHealth />
        <TeamWorkload />
      </div>

      <BottlenecksTable />

    </div>
  );
};

export default DashboardPage;
