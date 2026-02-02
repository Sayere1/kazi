import AuditLogs from "../../components/project/overview/AuditLogs";
import DatabaseLoad from "../../components/project/overview/DatabaseLoad";
import OverviewQuickActions from "../../components/project/overview/OverviewQuickActions";
import OverviewRibbon from "../../components/project/overview/OverviewRibbon";
import ProjectList from "../../components/project/overview/ProjectList";

const ProjectOverview = () => {
  return (
    <div className="flex flex-col gap-6">
      <OverviewRibbon />
      <div className="flex flex-col lg:flex-row gap-6">
        <ProjectList />
        <aside className="w-full lg:w-80 flex flex-col gap-6">
          <OverviewQuickActions />
          <AuditLogs />
          <DatabaseLoad />
        </aside>
      </div>
    </div>
  );
};

export default ProjectOverview;
