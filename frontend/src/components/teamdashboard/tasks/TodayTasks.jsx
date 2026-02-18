import TodayTasksItems from "./TodayTasksItems";

const TodayTasks = () => {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-[#f0f2f4] dark:border-slate-800 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#f0f2f4] dark:border-slate-800">
        <h2 className="text-lg font-bold text-[#111418] dark:text-white">
          Tasks for Today
        </h2>
        <span className="text-xs font-bold text-primary uppercase tracking-wider">
          4 Tasks
        </span>
      </div>

      <div className="divide-y divide-[#f0f2f4] dark:divide-slate-800">
        <TodayTasksItems
          title="Finalize Brand Design"
          project="Eco transportation Branding"
          priority="High Priority"
          priorityColor="text-red-500"
          statusColor="bg-[#078838]"
        />

        <TodayTasksItems
          title="Client Presentation Prep"
          project="Q4 Marketing"
          priority="Medium"
          priorityColor="text-amber-500"
          statusColor="bg-[#078838]"
        />

        <TodayTasksItems
          title="Weekly Sync Meeting Notes"
          project="Internal Admin"
          completed
          statusColor="bg-slate-300"
        />
      </div>

      <div className="p-4 bg-slate-50 dark:bg-slate-800/30 text-center">
        <button className="text-primary text-sm font-bold hover:underline">
          View all tasks
        </button>
      </div>
    </section>
  );
};

export default TodayTasks;
