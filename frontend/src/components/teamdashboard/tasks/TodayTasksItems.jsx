import { FiMoreVertical } from "react-icons/fi";

const TodayTasksItems = ({
  title,
  project,
  priority,
  priorityColor,
  completed = false,
  statusColor,
}) => {
  return (
    <div className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition group">
      <div className="flex size-7 items-center justify-center">
        <input
          type="checkbox"
          defaultChecked={completed}
          className="h-5 w-5 rounded-lg border-2 border-[#dbe0e6] dark:border-slate-700 text-primary 
          focus:ring-0 cursor-pointer"
        />
      </div>

      <div className="flex flex-col flex-1">
        <p
          className={`text-base font-medium ${
            completed
              ? "text-[#617589] line-through"
              : "text-[#111418] dark:text-white"
          }`}
        >
          {title}
        </p>

        <div className="flex items-center gap-2 mt-1">
          <p className="text-xs text-[#617589]">{project}</p>

          {priority && (
            <>
              <span className="size-1 rounded-full bg-slate-300"></span>
              <span className={`text-xs font-medium ${priorityColor}`}>
                {priority}
              </span>
            </>
          )}
        </div>
      </div>

      <div className="shrink-0 flex items-center gap-3">
        <FiMoreVertical className="text-slate-400 opacity-0 group-hover:opacity-100 cursor-pointer" />
        <div className={`size-2 rounded-full ${statusColor}`}></div>
      </div>
    </div>
  );
};

export default TodayTasksItems;
