import { FiTrendingUp } from "react-icons/fi";

const Productivity = () => {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-[#f0f2f4]
     dark:border-slate-800 p-6">
      <h2 className="text-lg font-bold text-[#111418] dark:text-white mb-4">
        Personal Productivity
      </h2>

      <div className="flex flex-col items-center py-4">
        <div className="relative size-32 flex items-center justify-center">
          <svg className="size-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="58"
              strokeWidth="8"
              className="text-slate-100 dark:text-slate-800"
              fill="transparent"
              stroke="currentColor"
            />
            <circle
              cx="64"
              cy="64"
              r="58"
              strokeWidth="8"
              className="text-primary"
              fill="transparent"
              stroke="currentColor"
              strokeDasharray="364.4"
              strokeDashoffset="100"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-black dark:text-white">72%</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase">
              Weekly goal
            </span>
          </div>
        </div>

        <div className="mt-6 w-full space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-[#617589]">Tasks completed</span>
            <span className="font-bold dark:text-white">18/25</span>
          </div>

          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[72%]"></div>
          </div>

          <p className="text-xs text-green-600 font-medium text-center mt-2 flex items-center justify-center gap-1">
            <FiTrendingUp className="text-sm" />
            +5% from last week
          </p>
        </div>
      </div>
    </section>
  );
};

export default Productivity;
