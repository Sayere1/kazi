import { 
  MdAddCircle, 
  MdManageAccounts, 
  MdWarning, 
  MdMail 
} from "react-icons/md";

const OverviewQuickActions = () => {
  return (
    <div className="bg-white dark:bg-[#1a2632] p-5 rounded-xl border border-[#dbe0e6]
     dark:border-[#2d3a49] shadow-sm flex flex-col gap-3">
      <h3 className="font-bold text-sm mb-2">Global Actions</h3>

      <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold
       py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm transition-all shadow-md shadow-primary/20">
        <MdAddCircle className="text-xl" />
        Provision New Project
      </button>

      <button className="w-full bg-white dark:bg-[#2d3a49] hover:bg-[#f0f2f4] dark:hover:bg-[#3d4d5d] 
      text-[#111418] dark:text-white border border-[#dbe0e6] dark:border-transparent font-semibold py-2.5 
      rounded-lg flex items-center justify-center gap-2 text-sm transition-all">
        <MdMail className="text-xl" />
        Workflow Templates
      </button>

      <button className="w-full bg-white dark:bg-[#2d3a49] hover:bg-[#f0f2f4] dark:hover:bg-[#3d4d5d] 
      text-[#111418] dark:text-white border border-[#dbe0e6] dark:border-transparent font-semibold py-2.5 
      rounded-lg flex items-center justify-center gap-2 text-sm transition-all">
        <MdManageAccounts className="text-xl" />
        Admin User Directory
      </button>

      <div className="h-px bg-[#dbe0e6] dark:bg-[#2d3a49] my-1"></div>

      <button className="w-full text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 font-semibold py-2.5
       rounded-lg flex items-center justify-center gap-2 text-sm transition-all">
        <MdWarning className="text-xl" />
        Emergency System Lock
      </button>
    </div>
  );
};

export default OverviewQuickActions;
