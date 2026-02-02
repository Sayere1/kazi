import PageHeader from "../../components/project/manage/Pageheader";
import StatsBar from "../../components/project/manage/StatsBar";
import ManageToolbar from "../../components/project/manage/ManageToolbar";
import ManageTable from "../../components/project/manage/ManageTable";
import MPagination from "../../components/project/manage/MPagination";
import ActivityFeed from "../../components/project/manage/ActivityFeed";
import ProjectDetailsDrawer from "../../components/project/manage/ProjectDetailsDrawer";
import BulkDrawer from "../../components/project/manage/BulkDrawer";
import CreateFlow from "../../components/project/create/CreateFlow";

const ManageProject = () => {
  return (
    <div className="grid grid-cols-12 gap-8 max-w-360 mx-auto">
      
      {/* LEFT SIDE */}
      <div className="col-span-12 lg:col-span-9 flex flex-col gap-6">
        <PageHeader />
        <StatsBar />
        <ManageToolbar />
        <ManageTable />
        <MPagination />
      </div>

      {/* RIGHT SIDE */}
      <aside className="col-span-12 lg:col-span-3">
        <ActivityFeed />
      </aside>
      <ProjectDetailsDrawer />

      {/* FIXED BULK DRAWER */}
      <BulkDrawer />
  
      <CreateFlow />

    </div>
  );
};

export default ManageProject;
