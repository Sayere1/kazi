import { MdListAlt } from "react-icons/md";
import TeamActivityItem from "./TeamActivityItem";

import userImage1 from "../../../assets/images/image1.png";
import userImage2 from "../../../assets/images/image2.png";
import userImage3 from "../../../assets/images/image3.png";
import userImage4 from "../../../assets/images/image4.png";


const TeamLog = () => {
  const logs = [
    {
      name: "Tracy Nyono",
      action: "created a new task",
      target: `"Rebranding"`,
      time: "2m ago",
      sub: "Senior Admin",
      avatar: userImage1,
    },
    {
      name: "Shumacker James",
      action: "updated environmental variiables",
      target: "for Financial Team",
      time: "15m ago",
      sub: "Resource planning • Project: EcoTransportation",
      avatar: userImage2
    },
    {
      name: "Ali Omar",
      action: "authorized",
      target: "a bulk export of design logs",
      time: "1h ago",
      sub: "Project  • Project: Design and Implementation",
      avatar: userImage3
    },
    {
      name: "Omarion Fabrizo",
      action: "modified security policies",
      target: "for MFA",
      time: "3h ago",
      sub: "Finanace Lead • Project: Audting",
      avatar: userImage4
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800
     shadow-sm overflow-hidden flex flex-col">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <MdListAlt className="text-slate-400" size={20} />
          System Activity Log
        </h3>
        <button className="text-xs font-bold text-primary hover:underline">View All</button>
      </div>

      <div className="p-0 overflow-y-auto custom-scrollbar h-100 divide-y divide-slate-50 dark:divide-slate-800">
        {logs.map((log, i) => (
          <TeamActivityItem key={i} {...log} />
        ))}
      </div>
    </div>
  );
};

export default TeamLog;
