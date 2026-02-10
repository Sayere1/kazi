import { FaListAlt, FaUserPlus, FaRedo, FaLock } from "react-icons/fa";

const RecentActions = () => (
  <div className="bg-white dark:bg-[#1a222c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] 
  shadow-sm overflow-hidden">
    <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3748] flex justify-between items-center">
      <h2 className="text-lg font-bold flex items-center gap-2">
        <FaListAlt className="text-primary" />
        Recent Administrative Actions
      </h2>
      <button className="text-sm font-bold text-primary hover:underline">
        View All Audit Logs
      </button>
    </div>

    <div className="p-6 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5
     before:bg-linear-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 
     before:to-transparent">
      {[
        {
          icon: <FaRedo />,
          title: "Updated Project Permissions",
          time: "Today at 10:45 AM",
          desc: "Changed access level for 'Nebula Cloud Migrate' from Standard to Full Control.",
          active: true,
        },
        {
          icon: <FaUserPlus />,
          title: "Invited New Member",
          time: "Yesterday, 3:20 PM",
          desc: "Added team@kazihub.com to 'Apollo Initiative'.",
        },
        {
          icon: <FaLock />,
          title: "Security Patch Applied",
          time: "Oct 24, 09:12 AM",
          desc: "Triggered global password reset for all project collaborators in 'Apollo Initiative'.",
        },
      ].map((item, i) => (
        <div key={i} className="relative flex items-center gap-4">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow shrink-0 ${
              item.active ? "bg-primary" : "bg-slate-400 dark:bg-slate-700"
            }`}
          >
            {item.icon}
          </div>

          <div className="p-4 rounded-lg border border-[#e5e7eb] dark:border-[#2d3748] w-full">
            <div className="flex items-center justify-between mb-1">
              <div className="font-bold text-slate-900 dark:text-white">{item.title}</div>
              <time className="text-xs font-medium text-primary">{item.time}</time>
            </div>
            <div className="text-slate-500 dark:text-slate-400 text-sm">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RecentActions;
