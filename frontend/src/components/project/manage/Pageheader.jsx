import { MdDownload, MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
//import { useProjectStore } from "../../../store/useProjectStore";

const PageHeader = () => {
  
  const navigate = useNavigate();

  //const openCreateFlow = useProjectStore((s) => s.openCreateFlow);

  return (
    <div className="flex flex-wrap justify-between items-end gap-3">
      <div className="flex flex-col gap-1">
        <p className="text-3xl font-black leading-tight tracking-tight">
          Global Project Management
        </p>
        <p className="text-[#617589] dark:text-slate-400 text-base">
          Super Admin Oversight & Bulk Operations Console
        </p>
      </div>

      <div className="flex gap-3">
        <button className="flex items-center h-10 px-4 rounded-lg bg-white dark:bg-slate-800 border">
          <MdDownload className="text-lg mr-2" />
          Global Export
        </button>

        <button
          onClick={() => navigate("/projects/create")}
          className="flex items-center h-10 px-4 rounded-lg bg-primary text-white font-bold shadow-md hover:bg-primary/90"
        >
          <MdAdd className="text-lg mr-2" />
          Create Project
        </button>
      </div>
    </div>
  );
};

export default PageHeader;


