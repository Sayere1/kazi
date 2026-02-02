import { MdCheck } from "react-icons/md";

const DatabaseLoad = () => {
  return (
    <div className="bg-[#111418] dark:bg-[#0a0f14] p-5 rounded-xl shadow-lg flex flex-col gap-3">
      <h4 className="text-white font-bold text-xs uppercase tracking-widest opacity-60">
        Database Load
      </h4>

      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-white">24%</span>

        <div className="flex gap-1 h-12 items-end">
          <div className="w-1.5 bg-primary/30 h-4 rounded-t-sm"></div>
          <div className="w-1.5 bg-primary/40 h-6 rounded-t-sm"></div>
          <div className="w-1.5 bg-primary/50 h-5 rounded-t-sm"></div>
          <div className="w-1.5 bg-primary/70 h-8 rounded-t-sm"></div>
          <div className="w-1.5 bg-primary h-10 rounded-t-sm"></div>
        </div>
      </div>

      <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
        <MdCheck className="text-sm" />
        All clusters operational
      </div>
    </div>
  );
};

export default DatabaseLoad;
