const OverviewHeading = () => {
  return (
    <div className="flex flex-wrap justify-between items-end gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-4xl font-black">My Dashboard</p>
        <p className="text-[#617589] dark:text-gray-400 text-lg">
          Welcome back, Nyono. Here's your weekly progress and growth overview.
        </p>
      </div>

      <div className="flex gap-3">
        <button className="flex items-center justify-center rounded-lg h-11 px-5 bg-gray-100 dark:bg-gray-800 
        text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700">
          Log Hours
        </button>

        <button className="flex items-center justify-center rounded-lg h-11 px-5 bg-primary text-white
         text-sm font-bold hover:bg-primary/90 shadow-sm">
          New Project
        </button>
      </div>
    </div>
  );
};

export default OverviewHeading;
