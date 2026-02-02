import { MdAccountTree, MdGroups, MdCheckCircle, MdStorage, MdTrendingUp } from "react-icons/md";

const OverviewRibbon = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Total Projects */}
      <div className="bg-white dark:bg-[#1a2632] p-5 rounded-xl border border-[#dbe0e6] 
      dark:border-[#2d3a49] shadow-sm flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <span className="text-[#617589] text-xs font-semibold uppercase tracking-wider">
            Total Projects
          </span>
          <MdAccountTree className="text-primary text-xl" />
        </div>

        <div className="flex items-baseline gap-2 mt-1">
          <h3 className="text-2xl font-bold">4,528</h3>
          <span className="text-emerald-500 text-xs font-bold flex items-center">
            <MdTrendingUp className="text-sm" /> 12%
          </span>
        </div>

        <p className="text-[11px] text-[#617589] mt-1">Across 42 organizations</p>
      </div>

      {/* Active Teams */}
      <div className="bg-white dark:bg-[#1a2632] p-5 rounded-xl border border-[#dbe0e6] 
      dark:border-[#2d3a49] shadow-sm flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <span className="text-[#617589] text-xs font-semibold uppercase tracking-wider">
            Active Teams
          </span>
          <MdGroups className="text-primary text-xl" />
        </div>

        <div className="flex items-baseline gap-2 mt-1">
          <h3 className="text-2xl font-bold">1,284</h3>
          <span className="text-emerald-500 text-xs font-bold flex items-center">
            <MdTrendingUp className="text-sm" /> 5%
          </span>
        </div>

        <p className="text-[11px] text-[#617589] mt-1">89 teams added this month</p>
      </div>

      {/* Server Status */}
      <div className="bg-white dark:bg-[#1a2632] p-5 rounded-xl border border-[#dbe0e6] 
      dark:border-[#2d3a49] shadow-sm flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <span className="text-[#617589] text-xs font-semibold uppercase tracking-wider">
            Server Status
          </span>
          <MdCheckCircle className="text-emerald-500 text-xl" />
        </div>

        <div className="flex items-baseline gap-2 mt-1">
          <h3 className="text-2xl font-bold text-emerald-500">99.9%</h3>
          <span className="text-[#617589] text-xs font-medium">Uptime</span>
        </div>

        <p className="text-[11px] text-[#617589] mt-1">Global latency: 42ms</p>
      </div>

      {/* Storage Usage */}
      <div className="bg-white dark:bg-[#1a2632] p-5 rounded-xl border border-[#dbe0e6]
       dark:border-[#2d3a49] shadow-sm flex flex-col gap-1 md:hidden lg:flex">
        <div className="flex justify-between items-start">
          <span className="text-[#617589] text-xs font-semibold uppercase tracking-wider">
            Storage Usage
          </span>
          <MdStorage className="text-primary text-xl" />
        </div>

        <div className="flex items-baseline gap-2 mt-1">
          <h3 className="text-2xl font-bold">14.2 TB</h3>
          <span className="text-amber-500 text-xs font-bold">78% Full</span>
        </div>

        <div className="w-full bg-[#f0f2f4] dark:bg-[#2d3a49] h-1.5 rounded-full mt-2 overflow-hidden">
          <div className="bg-primary h-full rounded-full" style={{ width: "78%" }}></div>
        </div>
      </div>
    </section>
  );
};

export default OverviewRibbon;
