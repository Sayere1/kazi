const TaskItem = ({ title, priority, date }) => {
  const priorityColors = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-blue-100 text-blue-600",
    Low: "bg-gray-100 text-gray-600",
  };

  return (
    <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 hover:border-primary/50 transition-colors cursor-pointer group">
      <div className="flex items-start gap-2 mb-2">
        <div className="mt-0.5 size-4 rounded-sm border border-gray-300 dark:border-gray-600 group-hover:border-primary" />
        <p className="text-xs font-bold text-gray-800 dark:text-gray-200 line-clamp-2">
          {title}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span
          className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${priorityColors[priority]}`}
        >
          {priority}
        </span>
        <span className="text-[10px] text-gray-500">{date}</span>
      </div>
    </div>
  );
};

export default TaskItem;
