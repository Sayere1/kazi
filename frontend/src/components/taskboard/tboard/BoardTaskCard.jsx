import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  FiCalendar,
  FiMessageSquare,
  FiPaperclip,
  FiCheckCircle,
  FiTrash2,
  FiEdit2,
} from "react-icons/fi";

import { useKanbanStore } from "../../../store/kanbanStore";

const priorityColorMap = {
  HIGH: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  MEDIUM: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  LOW: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  DONE: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
};

const BoardTaskCard = ({ task }) => {
  const { deleteTask, openEditTask } = useKanbanStore();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={() => openEditTask(task)}
      className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-transparent
         hover:border-primary/40 transition-all cursor-pointer relative group ${
        task.done
          ? "opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
          : ""
      }`}
    >
      {/* ACTION BUTTONS (Edit + Delete) */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            openEditTask(task);
          }}
          className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <FiEdit2 className="text-gray-600 dark:text-gray-300" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
          className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-900/40"
        >
          <FiTrash2 className="text-red-500" />
        </button>
      </div>

      {/* PRIORITY + AVATAR */}
      <div className="flex justify-between items-start mb-2">
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
            priorityColorMap[task.priority] || ""
          }`}
        >
          {task.priority}
        </span>

        <div
          className="size-6 rounded-full border-2 border-white dark:border-gray-800 bg-cover bg-center"
          style={{ backgroundImage: `url(${task.avatar})` }}
        />
      </div>

      {/* COVER IMAGE */}
      {task.cover && (
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-3"
          style={{ backgroundImage: `url(${task.cover})` }}
        />
      )}

      {/* TITLE */}
      <h4
        className={`text-sm font-semibold mb-3 leading-snug ${
          task.done ? "line-through decoration-[#617589]" : ""
        }`}
      >
        {task.title}
      </h4>

      {/* FOOTER: DATE + COMMENTS + ATTACHMENTS */}
      <div className="flex items-center justify-between text-[#617589] dark:text-gray-400">
        <div className="flex items-center gap-1">
          {task.done ? (
            <>
              <FiCheckCircle className="text-xs" />
              <span className="text-[11px]">{task.date}</span>
            </>
          ) : (
            <>
              <FiCalendar className="text-xs" />
              <span className="text-[11px]">{task.date}</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-3">
          {task.comments > 0 && (
            <div className="flex items-center gap-1">
              <FiMessageSquare className="text-sm" />
              <span className="text-[11px]">{task.comments}</span>
            </div>
          )}

          {task.attachments > 0 && (
            <div className="flex items-center gap-1">
              <FiPaperclip className="text-sm" />
              <span className="text-[11px]">{task.attachments}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardTaskCard;
