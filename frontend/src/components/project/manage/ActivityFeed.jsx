import { MdHistory, MdSettings } from "react-icons/md";
import userImage from "../../../assets/images/image1.png";

const ActivityFeed = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-[#dbe0e6] dark:border-slate-800 
    shadow-sm flex flex-col h-full max-h-[calc(100vh-160px)]">
      <div className="px-5 py-4 border-b border-[#dbe0e6] dark:border-slate-800 flex items-center justify-between">
        <h3 className="font-bold text-sm">Recent Activity</h3>
        <MdHistory className="text-[#617589] text-xl" />
      </div>

      <div className="p-4 overflow-y-auto flex flex-col gap-5 custom-scrollbar">

        {/* Activity Item */}
        <div className="flex gap-3 relative">
          <div className="absolute left-4 top-10 -bottom-5 w-px bg-[#dbe0e6] dark:bg-slate-800"></div>

          <div
            className="size-8 rounded-full bg-cover bg-center border shadow-sm shrink-0"
            style={{
              backgroundImage: `url(${userImage})`
            }}
          ></div>

          <div className="flex flex-col gap-1">
            <p className="text-xs">
              <span className="font-bold">Tracy Nyono</span> moved{" "}
              <span className="text-primary underline">Project iW-3112</span> to Review.
            </p>
            <span className="text-[10px] text-[#617589] uppercase font-bold">
              2 mins ago
            </span>
          </div>
        </div>

        {/* System Activity */}
        <div className="flex gap-3 relative">
          <div className="absolute left-4 top-10 -bottom-5 w-px bg-[#dbe0e6] dark:bg-slate-800"></div>

          <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center 
          border shadow-sm shrink-0">
            <MdSettings className="text-sm" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs">
              <span className="font-bold">System</span> automatically archived 14 projects.
            </p>
            <span className="text-[10px] text-[#617589] uppercase font-bold">
              1 hour ago
            </span>
          </div>
        </div>

        {/* populate dynamically */}
      </div>

      <div className="mt-auto p-4 border-t border-[#dbe0e6] dark:border-slate-800">
        <button className="w-full py-2 bg-background-light dark:bg-slate-800 hover:bg-slate-200
         dark:hover:bg-slate-700 rounded-lg text-xs font-bold text-[#617589]">
          View Full Audit Trail
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;
