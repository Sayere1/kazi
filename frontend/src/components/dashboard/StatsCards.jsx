import { FiClipboard, FiAlertTriangle, FiZap } from "react-icons/fi";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Active Projects */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200
       dark:border-slate-800 shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-slate-custom">Active Projects</p>
            <h3 className="text-3xl font-bold text-navy dark:text-white mt-1">24</h3>
          </div>
          <div className="p-2 bg-primary/10 text-primary rounded-lg">
            <FiClipboard />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-green-600 text-sm font-bold">+5%</span>
          <span className="text-xs text-slate-400 font-medium">vs last month</span>
        </div>
      </div>

      {/* Overdue Tasks */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200
       dark:border-slate-800 shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-slate-custom">Overdue Tasks</p>
            <h3 className="text-3xl font-bold text-navy dark:text-white mt-1">12</h3>
          </div>
          <div className="p-2 bg-red-100 text-red-600 rounded-lg">
            <FiAlertTriangle />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-red-600 text-sm font-bold">-2%</span>
          <span className="text-xs text-slate-400 font-medium">decreased from 14</span>
        </div>
      </div>

      {/* Team Velocity */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200
       dark:border-slate-800 shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-slate-custom">Team Velocity</p>
            <h3 className="text-3xl font-bold text-navy dark:text-white mt-1">88%</h3>
          </div>
          <div className="p-2 bg-teal-accent/10 text-teal-accent rounded-lg">
            <FiZap />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-green-600 text-sm font-bold">+3.2%</span>
          <span className="text-xs text-slate-400 font-medium">above target</span>
        </div>
      </div>

    </div>
  );
};

export default StatsCards;
