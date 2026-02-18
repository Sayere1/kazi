import { useState } from "react";

import MyWorkHeader from "../../components/teamdashboard/mywork/MyWorkHeader";
import MyWorkTabs from "../../components/teamdashboard/mywork/MyWorkTabs";
import TaskTable from "../../components/teamdashboard/mywork/TaskTable";
import WorkSidebar from "../../components/teamdashboard/mywork/WorkSidebar";

import CreateTaskModal from "../../modal/teamdashboard/CreateTaskModal";

const MyWorkPage = () => {

      const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
        <MyWorkHeader onNewTask={() => setOpenModal(true)} 
         />
        <MyWorkTabs />
        <TaskTable />
      </main>
      {/* RIGHT AI SIDEBAR */}
      <WorkSidebar />
       <CreateTaskModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default MyWorkPage;


