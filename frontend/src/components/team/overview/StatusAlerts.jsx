import { MdPendingActions, MdGppMaybe, MdHub } from "react-icons/md";

const StatusAlerts = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 
    shadow-sm overflow-hidden flex flex-col">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800">
        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <MdHub className="text-slate-400" size={20} />
          Status & Alerts
        </h3>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between p-3 rounded-xl bg-teal-50 dark:bg-teal-900/10 border
         border-teal-100 dark:border-teal-900/30">
          <div className="flex items-center gap-3">
            <div className="size-2 bg-teal-500 rounded-full animate-pulse"></div>
            <p className="text-sm font-medium text-teal-900 dark:text-teal-400">System Health</p>
          </div>
          <span className="text-xs font-bold text-teal-600">Optimal</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border
         border-amber-100 dark:border-amber-900/30">
          <div className="flex items-center gap-3">
            <MdPendingActions className="text-amber-600 text-lg" />
            <p className="text-sm font-medium text-amber-900 dark:text-amber-400">Pending Approvals</p>
          </div>
          <span className="text-xs font-bold text-amber-600">4 Requests</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-red-50 dark:bg-red-900/10 border
         border-red-100 dark:border-red-900/30">
          <div className="flex items-center gap-3">
            <MdGppMaybe className="text-red-600 text-lg" />
            <p className="text-sm font-medium text-red-900 dark:text-red-400">Security Alerts</p>
          </div>
          <span className="text-xs font-bold text-red-600">2 Critical</span>
        </div>
      </div>
    </div>
  );
};

export default StatusAlerts;
