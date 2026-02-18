
import TodayTasks from "../../components/teamdashboard/tasks/TodayTasks";
import TeamTaskHeader from "../../components/teamdashboard/tasks/TeamTaskHeader";
import TRecentActivity from "../../components/teamdashboard/tasks/TRecentActivity";
import Productivity from "../../components/teamdashboard/tasks/Productivity";
import UpcomingDeadlines from "../../components/teamdashboard/tasks/UpcomingDeadlines";

const MembersTaskPage = () => {
  return (
    <main className="flex-1 overflow-y-auto px-10 py-8">
      <div className="mx-auto">
        <TeamTaskHeader />

        <div className="grid grid-cols-12 gap-8 mt-8">
          {/* LEFT COLUMN */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
            <TodayTasks />
            <TRecentActivity />
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
            <Productivity />
            <UpcomingDeadlines />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MembersTaskPage;
