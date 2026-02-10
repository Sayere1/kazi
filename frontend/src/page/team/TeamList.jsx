import AddTeamModal from "../../modal/team/AddTeamModal";
import TeamHeader from "../../components/team/list/TeamHeader";
import TeamToolbar from "../../components/team/list/TeamToolbar";
import TeamFilter from "../../components/team/list/TeamFilter";
import TeamTable from "../../components/team/list/TeamTable";
import TeamPagination from "../../components/team/list/TeamPagination";

const TeamList = () => {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-8 lg:px-12 flex">
      <div className="flex flex-col w-full gap-6">

        <AddTeamModal />

        <TeamHeader />
        <TeamToolbar />
        <TeamFilter />
        <TeamTable/>
        <TeamPagination />

      </div>
    </div>
  );
};

export default TeamList;
