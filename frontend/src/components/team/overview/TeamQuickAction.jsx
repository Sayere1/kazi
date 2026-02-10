import { MdPersonAdd, MdSecurity, MdSummarize } from "react-icons/md";

const TeamQuickAction = () => {
  return (
    <section className="bg-linear-to-br from-primary to-blue-700 rounded-2xl shadow-sm p-6 text-white 
    border border-slate-200/20 dark:border-slate-700/20">

      {/* HEADER */}
      <h3 className="font-bold text-lg mb-2">Quick Actions</h3>
      <p className="text-sm opacity-90 mb-6">
        Manage high-priority administrative tasks directly from this dashboard.
      </p>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-1 gap-3">

        <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg 
        transition-colors text-sm font-semibold">
          <MdPersonAdd size={20} />
          Invite New Member
        </button>

        <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg 
        transition-colors text-sm font-semibold">
          <MdSecurity size={20} />
          Force Security Audit
        </button>

        <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg 
        transition-colors text-sm font-semibold">
          <MdSummarize size={20} />
          Generate Monthly Report
        </button>

      </div>
    </section>
  );
};

export default TeamQuickAction;
