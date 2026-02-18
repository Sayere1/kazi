import { FiFilter, FiPlus } from "react-icons/fi";

const MyWorkHeader = ({ onNewTask }) => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-3 p-6 pb-0">
      <div className="flex flex-col gap-1">
        <h1 className="text-[#111418] dark:text-white text-3xl font-black tracking-[-0.033em]">
          My Work
        </h1>
        <p className="text-[#617589] dark:text-gray-400 text-sm">
          Organize your daily agenda and track every second of progress.
        </p>
      </div>

      <div className="flex gap-3">
        <button className="flex items-center gap-2 rounded-lg px-4 py-2 bg-white dark:bg-[#1a222c] border 
        border-[#dbe0e6] dark:border-[#2d3748] text-sm font-semibold hover:shadow-sm transition-all">
          <FiFilter className="text-lg" />
          Filter
        </button>

        <button
          onClick={onNewTask}
          className="flex items-center gap-2 rounded-lg px-4 py-2 bg-primary text-white text-sm 
          font-bold shadow-md hover:bg-primary/90 transition-all"
        >
          <FiPlus className="text-lg" />
          New Task
        </button>
      </div>
    </div>
  );
};

export default MyWorkHeader;
