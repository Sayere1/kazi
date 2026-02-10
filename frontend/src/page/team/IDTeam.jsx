import IDBreadcrumbs from "../../components/team/idteam/IDBreadcrumbs";
import IDProfileHeader from "../../components/team/idteam/IDProfileHeader";
import ProjectOwnership from "../../components/team/idteam/ProjectOwnership";
import TeamPermissions from "../../components/team/idteam/TeamPermissions";
import RecentActions from "../../components/team/idteam/RecentActions";
import CriticalActions from "../../components/team/idteam/CriticalActions";
import SecurityOverview from "../../components/team/idteam/SecurityOverview";
import InternalNotes from "../../components/team/idteam/InternalNotes";

const IDTeam = () => {
  return (
    <div className="flex-1 overflow-y-auto px-7 py-8 lg:px-12">
      <div className="mx-auto flex flex-col gap-8">

        <IDBreadcrumbs />

        <IDProfileHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <ProjectOwnership />
            <TeamPermissions />
            <RecentActions />
          </div>

          {/* RIGHT COLUMN */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            <CriticalActions />
            <SecurityOverview />
            <InternalNotes />
          </aside>

        </div>

        <div className="h-20" />
      </div>
    </div>
  );
};

export default IDTeam;
