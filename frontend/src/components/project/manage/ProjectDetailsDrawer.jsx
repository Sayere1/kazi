import { MdClose } from "react-icons/md";
import { useProjectStore } from "../../../store/useProjectStore";

const ProjectDetailsDrawer = () => {
  const store = useProjectStore();
  const project = store.drawerProject;

  if (!store.drawerOpen || !project) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-90"
        onClick={store.closeDrawer}
      />

      {/* Drawer */}
      <div
        className="
          fixed right-0 top-0 h-full w-105 bg-white dark:bg-slate-900 
          shadow-2xl border-l border-slate-200 dark:border-slate-700 
          z-100 p-6 flex flex-col gap-6 
          animate-slideIn
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{project.name}</h2>
          <button
            onClick={store.closeDrawer}
            className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <MdClose className="text-xl" />
          </button>
        </div>

        {/* Meta */}
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-[#617589]">Project ID: {project.id}</p>
          <p className="text-[#617589]">Department: {project.dept}</p>
          <p className="text-[#617589]">Lead: {project.lead}</p>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2">
          <span
            className={`size-3 rounded-full bg-${project.statusColor}-500`}
          ></span>
          <span className="font-semibold">{project.status}</span>
        </div>

        {/* Health */}
        <div>
          <p className="text-sm font-semibold mb-1">Health</p>
          <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
            <div
              className={`h-2 rounded-full bg-${project.statusColor}-500`}
              style={{ width: `${project.health}%` }}
            ></div>
          </div>
        </div>

        {/* Description placeholder */}
        <div className="mt-4">
          <p className="text-sm text-[#617589]">
            This is where extended project details, activity logs, team members,
            and configuration settings can be displayed.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsDrawer;
