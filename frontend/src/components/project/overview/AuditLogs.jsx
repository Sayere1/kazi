import { 
  MdSecurity, 
  MdDelete, 
  MdSettings 
} from "react-icons/md";

const logs = [
  {
    icon: <MdSecurity className="text-amber-600 text-sm" />,
    bg: "bg-amber-100",
    title: "Ownership Transferred",
    desc: "Admin (super_sa) moved Project Orion to User Jane.",
    time: "2 mins ago",
  },
  {
    icon: <MdDelete className="text-red-600 text-sm" />,
    bg: "bg-red-100",
    title: "Hard Deletion",
    desc: 'Project "Test Workspace" deleted by Admin.',
    time: "1 hour ago",
  },
  {
    icon: <MdSettings className="text-primary text-sm" />,
    bg: "bg-primary/10",
    title: "Global Policy Updated",
    desc: "Retention policy set to 5 years for all projects.",
    time: "3 hours ago",
  },
];

const AuditLogs = () => {
  return (
    <div className="bg-white dark:bg-[#1a2632] p-5 rounded-xl border border-[#dbe0e6] 
    dark:border-[#2d3a49] shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-sm">System Audit Logs</h3>
        <a className="text-xs text-primary font-semibold hover:underline" href="#">
          View All
        </a>
      </div>

      <div className="flex flex-col gap-4">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-3">
            <div className={`size-8 rounded-full flex items-center justify-center shrink-0 ${log.bg}`}>
              {log.icon}
            </div>

            <div className="flex flex-col">
              <p className="text-xs font-semibold">{log.title}</p>
              <p className="text-[10px] text-[#617589]">{log.desc}</p>
              <p className="text-[9px] text-[#617589] mt-1 uppercase font-bold">{log.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuditLogs;
