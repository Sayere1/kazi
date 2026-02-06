import Board from "../../components/taskboard/tboard/Board";
import BoardFA from "../../components/taskboard/tboard/BoardFA";
import BoardToolbar from "../../components/taskboard/tboard/BoardToolbar";
import EditTaskDrawer from "../../components/taskboard/tboard/EditTaskDrawer";
import AddColumnModal from "../../modal/board/AddColumnModal";
import AddTaskModal from "../../modal/board/AddTaskModal";
import BoardMessageModal from "../../modal/board/BoardMessageModal";

const TaskBoardPage = () => {
  return (
    <div className="flex flex-col h-full">
      <BoardToolbar />
      <Board />
      <BoardFA />

            <AddColumnModal />
      <AddTaskModal />
      <EditTaskDrawer />
      <BoardMessageModal />
    </div>
  );
};

export default TaskBoardPage;
