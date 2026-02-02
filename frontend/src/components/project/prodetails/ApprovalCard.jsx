const ApprovalCard = ({ priority, due, title, description, highlight }) => (
  <div
    className={`rounded-xl shadow-sm overflow-hidden p-5 space-y-4 border ${
      highlight
        ? "bg-white dark:bg-slate-900 border-primary/20 dark:border-primary/40 ring-1 ring-primary/5"
        : "bg-white dark:bg-slate-900 border-[#dbe0e6] dark:border-slate-800 opacity-75"
    }`}
  >
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span
          className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded ${
            highlight
              ? "text-primary bg-primary/10"
              : "text-slate-500 bg-slate-100 dark:bg-slate-800"
          }`}
        >
          {priority}
        </span>
        <span className="text-[10px] text-slate-400 font-medium">{due}</span>
      </div>

      <h3 className="text-base font-bold dark:text-white">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
    </div>

    <div className="flex gap-2">
      <button className="flex-1 bg-primary text-white text-xs font-bold py-2.5 rounded
       hover:bg-primary/90 transition-all">
        Approve
      </button>
      <button className="flex-1 bg-[#f0f2f4] dark:bg-slate-800 text-[#111418] dark:text-white
       text-xs font-bold py-2.5 rounded hover:bg-[#e4e6e8] transition-all">
        Review
      </button>
    </div>
  </div>
);

export default ApprovalCard