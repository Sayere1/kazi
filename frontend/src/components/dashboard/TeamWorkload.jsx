const TeamWorkload = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <h4 className="text-lg font-bold text-navy dark:text-white mb-6">
        Team Workload Distribution
      </h4>

      <div className="space-y-5">

        {/* Sarah */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-bold uppercase text-slate-400">
            <span>Sarah Jenkins (Lead)</span>
            <span>12 Tasks</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[85%] rounded-full"></div>
          </div>
        </div>

        {/* Marcus */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-bold uppercase text-slate-400">
            <span>Marcus Chen</span>
            <span>8 Tasks</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-teal-accent w-[60%] rounded-full"></div>
          </div>
        </div>

        {/* Elena */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-bold uppercase text-slate-400">
            <span>Elena Rodriguez</span>
            <span>15 Tasks</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-red-400 w-[95%] rounded-full"></div>
          </div>
        </div>

        {/* David */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-bold uppercase text-slate-400">
            <span>David Park</span>
            <span>4 Tasks</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[30%] rounded-full"></div>
          </div>
        </div>

      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
        <button className="text-sm font-bold text-primary hover:underline">
          View All Resource Loads
        </button>
      </div>
    </div>
  );
};

export default TeamWorkload;
