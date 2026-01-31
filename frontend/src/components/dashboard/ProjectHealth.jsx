const ProjectHealth = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200
     dark:border-slate-800 shadow-sm flex flex-col">
      <h4 className="text-lg font-bold text-navy dark:text-white mb-6">
        Project Health Status
      </h4>

      <div className="flex-1 flex items-center justify-around">

        {/* Doughnut Chart */}
        <div className="relative size-48">
          <svg className="size-full" viewBox="0 0 36 36">
            <path
              className="text-slate-100 dark:text-slate-800"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray="100, 100"
            />

            {/* On Track */}
            <path
              className="text-primary"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray="65, 100"
              strokeLinecap="round"
            />

            {/* At Risk */}
            <path
              className="text-yellow-400"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray="20, 100"
              strokeDashoffset="-65"
              strokeLinecap="round"
            />

            {/* Delayed */}
            <path
              className="text-red-500"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray="15, 100"
              strokeDashoffset="-85"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-navy dark:text-white">24</span>
            <span className="text-[10px] uppercase font-bold text-slate-400">Total</span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-primary"></span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              On Track (16)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-yellow-400"></span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              At Risk (5)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-red-500"></span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Delayed (3)
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectHealth;
