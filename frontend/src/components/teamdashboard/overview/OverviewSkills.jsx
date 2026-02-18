import { FiCheckCircle, FiAward, FiBookOpen, FiUsers } from "react-icons/fi";

const OverviewSkills = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 
    shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-[#111418] dark:text-white">
          Skills & Growth
        </h3>
        <button className="text-primary text-sm font-bold hover:underline">
          Manage
        </button>
      </div>

      <div className="space-y-6">
        {/* Completed Certifications */}
        <div>
          <p className="text-xs font-bold text-[#617589] dark:text-gray-400 uppercase tracking-widest mb-3">
            Completed
          </p>

          <div className="flex flex-col gap-3">
            {/* Agile Professional */}
            <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border
             border-green-100 dark:border-green-900/30">
              <FiCheckCircle className="text-green-600 dark:text-green-400 text-lg" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#111418] dark:text-white">
                  Agile Professional
                </span>
                <span className="text-[10px] text-green-700 dark:text-green-500">
                  Certified Dec 2023
                </span>
              </div>
            </div>

            {/* Senior UI/UX Expert */}
            <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg border
             border-blue-100 dark:border-blue-900/30">
              <FiAward className="text-primary text-lg" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#111418] dark:text-white">
                  Project Management Essentials
                </span>
                <span className="text-[10px] text-primary">Certified Mar 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Learning */}
        <div>
          <p className="text-xs font-bold text-[#617589] dark:text-gray-400 uppercase tracking-widest mb-3">
            Suggested Learning
          </p>

          <div className="flex flex-col gap-4">
            {/* Advanced React Patterns */}
            <div className="flex items-start gap-3">
              <div className="size-8 rounded-lg bg-[#f0f2f4] dark:bg-gray-800 flex items-center justify-center">
                <FiBookOpen className="text-[#617589] text-lg" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-[#111418] dark:text-white">
                  Critical Sustianability
                </span>
                <p className="text-xs text-[#617589] dark:text-gray-400">
                  4 modules • High Priority
                </p>
                <button className="mt-1 text-xs text-primary font-bold w-fit border border-primary/20 px-2
                 py-0.5 rounded hover:bg-primary/5">
                  Start Learning
                </button>
              </div>
            </div>

            {/* Leadership Essentials */}
            <div className="flex items-start gap-3">
              <div className="size-8 rounded-lg bg-[#f0f2f4] dark:bg-gray-800 flex items-center justify-center">
                <FiUsers className="text-[#617589] text-lg" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-[#111418] dark:text-white">
                  Leadership Essentials
                </span>
                <p className="text-xs text-[#617589] dark:text-gray-400">
                  2 modules • Career Growth
                </p>
                <button className="mt-1 text-xs text-primary font-bold w-fit border border-primary/20 px-2
                 py-0.5 rounded hover:bg-primary/5">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View All Training */}
      <button className="w-full mt-8 py-3 px-4 bg-[#f0f2f4] dark:bg-gray-800 text-[#111418]
       dark:text-white rounded-lg text-sm font-bold hover:bg-[#e2e5e9] dark:hover:bg-gray-700 
       transition-colors">
        View All Training
      </button>
    </div>
  );
};

export default OverviewSkills;
