import { MdRocketLaunch, MdWarning, MdVerifiedUser } from "react-icons/md";

const StatsBar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* Total Active Projects */}
      <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-[#dbe0e6]
       dark:border-slate-800 shadow-sm flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-sm text-[#617589]">Total Active Projects</p>
          <MdRocketLaunch className="text-primary text-xl" />
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold">1,248</p>
          <p className="text-green-600 text-sm font-bold">+12.5%</p>
        </div>
      </div>

      {/* Flagged Issues */}
      <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-[#dbe0e6]
       dark:border-slate-800 shadow-sm flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-sm text-[#617589]">Flagged Issues</p>
          <MdWarning className="text-red-500 text-xl" />
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold">24</p>
          <p className="text-red-500 text-sm font-bold">-2 active</p>
        </div>
      </div>

      {/* System Health */}
      <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-[#dbe0e6]
       dark:border-slate-800 shadow-sm flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-sm text-[#617589]">System Health</p>
          <MdVerifiedUser className="text-teal-500 text-xl" />
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold">99.9%</p>
          <p className="text-green-600 text-sm font-bold">Stable</p>
        </div>
      </div>

    </div>
  );
};

export default StatsBar;
