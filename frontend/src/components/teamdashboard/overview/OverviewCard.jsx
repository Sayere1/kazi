const OverviewCard = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold">Work-Life Balance</h3>
        <span className="px-2.5 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 
        text-xs font-bold rounded-full">
          Balanced
        </span>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1 h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden flex">
          <div className="h-full bg-primary" style={{ width: "85%" }}></div>
          <div className="h-full bg-red-400" style={{ width: "5%" }}></div>
        </div>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-gray-500 dark:text-gray-400">34 / 40 hours logged</span>
        <span className="text-primary font-bold">85% Capacity</span>
      </div>
    </div>
  );
};

export default OverviewCard;
