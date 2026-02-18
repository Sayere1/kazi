const TActivityItem = ({
  icon,
  iconBg,
  iconColor,
  user,
  action,
  target,
  message,
  time,
}) => {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <div
          className={`size-10 rounded-full ${iconBg} ${iconColor} flex items-center justify-center`}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-100 dark:bg-slate-800"></div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-sm dark:text-white">
          <span className="font-bold">{user}</span> {action}{" "}
          <span className="text-primary">{target}</span>
        </p>

        {message && (
          <p className="text-xs text-[#617589]">"{message}"</p>
        )}

        <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">
          {time}
        </p>
      </div>
    </div>
  );
};

export default TActivityItem;
