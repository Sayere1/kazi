import TopBarNav from "../../components/teamdashboard/overview/TopNavBar";
import OverviewHeading from "../../components/teamdashboard/overview/Overviewheading";
import OverviewCard from "../../components/teamdashboard/overview/OverviewCard";
import OverviewRemarks from "../../components/teamdashboard/overview/OverviewRemarks";
import OngoingProjects from "../../components/teamdashboard/overview/OngoingProjects";
import MilestonesTable from "../../components/teamdashboard/overview/MilestonesTable";
import OverviewSkills from "../../components/teamdashboard/overview/OverviewSkills";
import CareerMilestone from "../../components/teamdashboard/overview/CareerMilestone";

const TMOverview  = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <TopBarNav />

      <main className="mx-auto w-full px-10 py-8 flex flex-col gap-8">
        <OverviewHeading />

        {/* Health & Feedback */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OverviewCard />
          <OverviewRemarks/>
        </div>

        {/* Projects + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <OngoingProjects />
            <MilestonesTable />
          </div>

          <aside className="w-full lg:w-80 flex flex-col gap-6">
            <OverviewSkills />
            <CareerMilestone />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default TMOverview;