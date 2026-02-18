const DeadlineItem = ({
  month,
  day,
  title,
  status,
  statusColor = "text-slate-500",
  borderColor = "border-slate-100 dark:border-slate-800",
  bgColor = "",
}) => {
  return (
    <div
      className={`flex items-center gap-4 p-3 rounded-lg border ${borderColor} ${bgColor}`}
    >
      <div className="flex flex-col items-center justify-center bg-slate-200 dark:bg-slate-700 text-[#111418]
       dark:text-white rounded px-2 py-1 min-w-11">
        <span className="text-[10px] uppercase font-bold">{month}</span>
        <span className="text-lg font-black leading-none">{day}</span>
      </div>

      <div className="flex flex-col overflow-hidden">
        <p className="text-sm font-bold dark:text-white truncate">{title}</p>
        <p className={`text-xs ${statusColor}`}>{status}</p>
      </div>
    </div>
  );
};

export default DeadlineItem;
