//TaskTable.jsx
import { useMemo } from "react";
import { FiPlay, FiPause, FiTrash2 } from "react-icons/fi";

import { useTasksStore } from "../../../store/useTasksStore";

const TaskTable = () => {
  


const getVisibleTasks = useTasksStore((s) => s.getVisibleTasks);

const { groups } = useMemo(() => getVisibleTasks(), [getVisibleTasks]);


const tasks = useTasksStore((s) => s.tasks);


  const sortBy = useTasksStore((s) => s.sortBy);
  const sortDir = useTasksStore((s) => s.sortDir);
  const setSort = useTasksStore((s) => s.setSort);
  const currentPage = useTasksStore((s) => s.currentPage);
  const pageSize = useTasksStore((s) => s.pageSize);
  const setPage = useTasksStore((s) => s.setPage);
  const deleteTask = useTasksStore((s) => s.deleteTask);
  const toggleTimer = useTasksStore((s) => s.toggleTimer);

  const flatTasks = useMemo(
    () =>
      Object.entries(groups).flatMap(([group, tasks]) =>
        tasks.map((t) => ({ ...t, _group: group }))
      ),
    [groups]
  );

  const totalPages = Math.max(1, Math.ceil(flatTasks.length / pageSize));
  const pageTasks = flatTasks.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Rebuild groups for current page only
  const pageGroups = pageTasks.reduce((acc, task) => {
    if (!acc[task._group]) acc[task._group] = [];
    acc[task._group].push(task);
    return acc;
  }, {});

  const handleSortClick = (key) => {
    setSort(key);
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
      <div className="bg-white dark:bg-[#1a222c] rounded-xl border border-[#dbe0e6] dark:border-[#2d3748] 
      overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-background-light/50 dark:bg-[#2d3748]/50 border-b border-[#dbe0e6]
             dark:border-[#2d3748]">
              <th className="p-4 w-12">
                <input
                  type="checkbox"
                  className="size-4 rounded border-[#dbe0e6] dark:border-[#4a5568]"
                />
              </th>
              <th className="p-4 text-sm font-semibold text-[#617589]">
                Task Name
              </th>
              <th
                className="p-4 text-sm font-semibold text-[#617589] cursor-pointer"
                onClick={() => handleSortClick("project")}
              >
                Project {sortBy === "project" ? (sortDir === "asc" ? "↑" : "↓") : ""}
              </th>
              <th
                className="p-4 text-sm font-semibold text-[#617589] text-center cursor-pointer"
                onClick={() => handleSortClick("priority")}
              >
                Priority {sortBy === "priority" ? (sortDir === "asc" ? "↑" : "↓") : ""}
              </th>
              <th className="p-4 text-sm font-semibold text-[#617589]">
                Time Tracked
              </th>
              <th className="p-4 text-sm font-semibold text-[#617589] text-right">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#dbe0e6] dark:divide-[#2d3748]">
            {Object.entries(pageGroups).map(([groupLabel, tasks]) => (
              <GroupBlock
                key={groupLabel}
                label={groupLabel}
                tasks={tasks}
                onDelete={deleteTask}
                onToggleTimer={toggleTimer}
              />
            ))}

            {flatTasks.length === 0 && (
              <tr>
                <td colSpan={6} className="p-6 text-center text-sm text-[#617589]">
                  No tasks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-xs text-[#617589]">
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
            className="px-3 py-1 rounded border border-[#dbe0e6] disabled:opacity-40"
          >
            Prev
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setPage(currentPage + 1)}
            className="px-3 py-1 rounded border border-[#dbe0e6] disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const GroupBlock = ({ label, tasks, onDelete, onToggleTimer }) => {
  return (
    <>
      <tr className="bg-background-light/30 dark:bg-[#2d3748]/30">
        <td className="px-4 py-2" colSpan={6}>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#617589]">▼</span>
            <span className="text-xs font-bold text-[#617589] uppercase tracking-widest">
              {label}
            </span>
          </div>
        </td>
      </tr>

      {tasks.map((task) => (
        <tr
          key={task.id}
          className={`transition-colors group ${
            task.isRunning ? "bg-primary/5 border-l-4 border-l-primary" : ""
          }`}
        >
          <td className="p-4">
            <input
              type="checkbox"
              className="size-4 rounded border-[#dbe0e6] dark:border-[#4a5568]"
            />
          </td>

          <td className="p-4">
            <p
              className={`text-sm font-semibold ${
                task.isRunning ? "text-primary" : "text-[#111418] dark:text-white"
              }`}
            >
              {task.title}
            </p>
            <p
              className={`text-[11px] ${
                task.isRunning ? "text-primary/70" : "text-[#617589]"
              }`}
            >
              {task.isRunning ? "Timer running now..." : `Updated ${task.updatedAt}`}
            </p>
          </td>

          <td className="p-4">
            <span className="px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600
             dark:text-blue-400 text-xs font-medium border border-blue-100 dark:border-blue-800">
              {task.project}
            </span>
          </td>

          <td className="p-4 text-center">
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${
                task.priority === "high"
                  ? "bg-red-100 text-red-600"
                  : task.priority === "medium"
                  ? "bg-orange-100 text-orange-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {task.priority.toUpperCase()}
            </span>
          </td>

          <td className="p-4">
            <span className="text-sm font-mono text-[#617589] dark:text-gray-300">
              {task.timeTracked}
            </span>
          </td>

          <td className="p-4 text-right">
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => onToggleTimer(task.id)}
                className={`size-8 rounded-lg flex items-center justify-center transition-all ${
                  task.isRunning
                    ? "bg-red-500 text-white"
                    : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {task.isRunning ? <FiPause /> : <FiPlay />}
              </button>

              <button
                onClick={() => onDelete(task.id)}
                className="size-8 rounded-lg flex items-center justify-center bg-red-50 text-red-500
                 hover:bg-red-100 transition-all"
              >
                <FiTrash2 />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TaskTable;

