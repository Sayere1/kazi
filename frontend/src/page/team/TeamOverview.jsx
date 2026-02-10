import OverviewStatCard from "../../components/team/overview/OverviewStatCard";
import TeamLog from "../../components/team/overview/TeamLog";
import StatusAlerts from "../../components/team/overview/StatusAlerts";
import RoleDistribution from "../../components/team/overview/RoleDistribution";
import TeamQuickAction from "../../components/team/overview/TeamQuickAction";

const TeamOverview = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="mx-auto space-y-7">

        {/* TOP STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <OverviewStatCard
            icon="stars"
            iconColor="text-blue-600"
            bgColor="bg-blue-50 dark:bg-blue-900/20"
            label="Total Admins"
            value="12"
            badge="+2%"
            badgeColor="text-green-600 bg-green-50"
          />

          <OverviewStatCard
            icon="admin_panel_settings"
            iconColor="text-teal-600"
            bgColor="bg-teal-50 dark:bg-teal-900/20"
            label="Total Coordinator"
            value="84"
            badge="Stable"
            badgeColor="text-slate-500 bg-slate-100"
          />

          <OverviewStatCard
            icon="timer"
            iconColor="text-amber-600"
            bgColor="bg-amber-50 dark:bg-amber-900/20"
            label="Time (MTD)"
            value="1,248h"
            badge="+12h"
            badgeColor="text-red-600 bg-red-50"
          />

          <OverviewStatCard
            icon="bolt"
            iconColor="text-purple-600"
            bgColor="bg-purple-50 dark:bg-purple-900/20"
            label="Active Sessions"
            value="16"
            badge="Active Now"
            badgeColor="text-teal-600 bg-teal-50"
          />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TeamLog />
          </div>

          <div className="space-y-6">
            <StatusAlerts />
            <RoleDistribution />
            <TeamQuickAction />
          </div>
        </div>

       {/*<FooterNote /> */}
      </div>
    </div>
  );
};

export default TeamOverview;
