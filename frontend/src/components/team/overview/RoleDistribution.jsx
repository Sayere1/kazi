import { MdBarChart } from "react-icons/md";

const RoleDistribution = () => {
  const roles = [
    { label: "Global Admins", percent: 42, color: "bg-navy dark:bg-blue-400" },
    { label: "Project Coordinator", percent: 35, color: "bg-primary" },
    { label: "Financial Lead", percent: 18, color: "bg-teal-400" },
    { label: "Other Roles", percent: 5, color: "bg-slate-300 dark:bg-slate-600" },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800
     shadow-sm overflow-hidden flex flex-col">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800">
        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <MdBarChart className="text-slate-400" size={20} />
          Role Distribution
        </h3>
      </div>

      <div className="p-5">
        <p className="text-xs text-slate-500 mb-4">
          Time spent per administrative role (Last 7 days)
        </p>

        <div className="space-y-4">
          {roles.map((r, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {r.label}
                </span>
                <span className="text-slate-500">{r.percent}%</span>
              </div>

              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className={`${r.color} h-full`} style={{ width: `${r.percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleDistribution;
