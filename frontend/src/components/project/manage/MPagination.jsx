const MPagination = () => {
  return (
    <div className="flex items-center justify-between px-4 py-4 bg-background-light/50 dark:bg-slate-800/30">
      <span className="text-xs text-[#617589]">
        Showing 1 to 10 of 1,248 entries
      </span>

      <div className="flex gap-1">
        <button className="px-3 py-1 text-xs border rounded bg-white dark:bg-slate-800">
          Prev
        </button>

        <button className="px-3 py-1 text-xs border border-primary bg-primary text-white font-bold">
          1
        </button>

        <button className="px-3 py-1 text-xs border rounded bg-white dark:bg-slate-800">
          2
        </button>

        <button className="px-3 py-1 text-xs border rounded bg-white dark:bg-slate-800">
          3
        </button>

        <button className="px-3 py-1 text-xs border rounded bg-white dark:bg-slate-800">
          Next
        </button>
      </div>
    </div>
  );
};

export default MPagination;
