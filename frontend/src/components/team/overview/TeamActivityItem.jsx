const TeamActivityItem = ({ avatar, name, action, target, time, sub }) => {
  return (
    <div className="p-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
      <div
        className="size-10 rounded-full bg-cover bg-center shrink-0 border border-slate-100"
        style={{ backgroundImage: `url(${avatar})` }}
      />

      <div className="flex-1">
        <div className="flex justify-between">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {name}{" "}
            <span className="font-normal text-slate-500">{action}</span> {target}
          </p>
          <span className="text-[11px] text-slate-400 font-medium">{time}</span>
        </div>

        <p className="text-xs text-slate-400 mt-1">{sub}</p>
      </div>
    </div>
  );
};

export default TeamActivityItem;
