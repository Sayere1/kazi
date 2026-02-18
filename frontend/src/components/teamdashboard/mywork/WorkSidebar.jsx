import { FiTrendingUp, FiCheckCircle, FiClock } from "react-icons/fi";

const WorkSidebar = () => {
  return (
    <aside className="w-80 bg-white dark:bg-[#1a222c] border-l border-[#dbe0e6] dark:border-[#2d3748] 
    p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiCheckCircle className="text-primary" />
          <h3 className="font-bold text-[#111418] dark:text-white">Smart Focus</h3>
        </div>
        <button className="text-xs font-bold text-primary hover:underline">Focus Mode</button>
      </div>

      <div className="space-y-4">
        <p className="text-xs font-bold text-[#617589] uppercase tracking-widest">
          Suggested Next Tasks
        </p>

        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 relative overflow-hidden 
        group hover:shadow-md transition-all cursor-pointer">
          <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20">
            <FiTrendingUp className="text-4xl" />
          </div>

          <div className="flex items-start gap-3 relative z-10">
            <FiCheckCircle className="text-primary text-xl mt-1" />
            <div>
              <h4 className="text-sm font-bold text-[#111418] dark:text-white mb-1">
                Update Stakeholder Report
              </h4>
              <p className="text-xs text-[#617589] mb-3">
                Kazi AI: "This has been pending for 3 days and is blocking the Sales team."
              </p>
              <button className="px-3 py-1.5 bg-primary text-white text-[10px] font-bold rounded">
                Start Now
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#dbe0e6] hover:bg-background-light transition-all 
        cursor-pointer">
          <div className="flex items-start gap-3">
            <FiClock className="text-orange-500 text-xl mt-1" />
            <div>
              <h4 className="text-sm font-bold text-[#111418] dark:text-white mb-1">
                Prep for Design Sync
              </h4>
              <p className="text-xs text-[#617589]">
                "Meeting starts in 45 minutes. Previous preparation usually takes 20m."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Productivity Stats */}
      <div className="mt-auto pt-6 border-t border-[#dbe0e6]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-bold text-[#617589] uppercase tracking-widest">
            Today's Focus
          </p>
          <span className="text-xs font-bold text-green-500">+12% vs avg</span>
        </div>

        <div className="flex gap-2 h-12">
          <div className="flex-1 bg-primary/20 rounded-lg flex flex-col items-center justify-center">
            <p className="text-lg font-bold text-primary">4.2h</p>
            <p className="text-[9px] text-primary/70 uppercase">Tracked</p>
          </div>

          <div className="flex-1 bg-purple-500/10 rounded-lg flex flex-col items-center justify-center">
            <p className="text-lg font-bold text-purple-600">82%</p>
            <p className="text-[9px] text-purple-600/70 uppercase">Efficiency</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default WorkSidebar;
