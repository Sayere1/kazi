import { FiMoreHorizontal, FiPlus, FiTrash2 } from "react-icons/fi";

import BoardTaskCard from "./BoardTaskCard";
import { useKanbanStore } from "../../../store/kanbanStore";

const colorMap = {
  gray: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  primary: "bg-primary/20 text-primary",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  green: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
};

const BoardColumn = ({ column, tasks }) => {
  const { deleteColumn, openAddTask } = useKanbanStore();

  return (
    <div className="flex flex-col w-80 bg-[#eaedf0] dark:bg-gray-900/50 rounded-xl p-3 h-fit
     max-h-[calc(100vh-200px)] relative group">

      {/* COLUMN HEADER */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-sm uppercase tracking-wider text-[#617589]">
            {column.title}
          </h3>

          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              colorMap[column.color] || ""
            }`}
          >
            {column.taskIds.length}
          </span>
        </div>

        {/* ACTION MENU */}
        <div className="relative">
          <button className="text-[#617589] hover:text-primary">
            <FiMoreHorizontal />
          </button>

          {/* DELETE BUTTON appears on hover */}
          <button
            onClick={() => deleteColumn(column.id)}
            className="absolute right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500
             hover:text-red-700 bg-white dark:bg-gray-800 p-1 rounded shadow"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>

      {/* TASK LIST */}
      <div className="flex flex-col gap-3 overflow-y-auto pr-1">
        {tasks.map((task) => (
          <BoardTaskCard key={task.id} task={task} />
        ))}
      </div>

      {/* ADD TASK BUTTON */}
      <button
        onClick={() => openAddTask(column.id)}
        className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300
         hover:text-primary transition-colors"
      >
        <FiPlus />
        Add Task
      </button>
    </div>
  );
};

export default BoardColumn;
