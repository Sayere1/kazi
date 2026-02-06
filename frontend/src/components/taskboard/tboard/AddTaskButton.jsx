import { FiPlus } from "react-icons/fi";
import { useKanbanStore } from "../../../store/kanbanStore";

const AddTaskButton = () => {
  const { openAddTask } = useKanbanStore();

  return (
    <button
      onClick={() => openAddTask(null)}
      className="flex items-center justify-center rounded-lg h-10 bg-primary text-white
       gap-2 text-sm font-bold px-6 shadow-sm hover:bg-blue-600 transition-colors"
    >
      <FiPlus />
      <span>Add Task</span>
    </button>
  );
};

export default AddTaskButton;
