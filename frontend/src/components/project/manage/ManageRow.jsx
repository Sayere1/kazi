import { MdVisibility } from "react-icons/md";
import { useProjectStore } from "../../../store/useProjectStore";

const ManageRow = ({ project }) => {

  // Zustand actions
  const store = useProjectStore();
  const isSelected = store.isSelected(project.id);

  return (
    <tr
      className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${
        isSelected ? "bg-blue-50/30 dark:bg-primary/5" : ""
      }`}
    >
      {/* Checkbox */}
      <td className="px-4 py-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => store.toggleSelect(project.id)}
          className="h-4 w-4 rounded border-[#dbe0e6] dark:border-slate-700 text-primary"
        />
      </td>

      {/* Project Name */}
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="flex flex-col">
          <span className="font-bold text-sm text-[#111418] dark:text-white">
            {project.name}
          </span>
          <span className="text-xs text-[#617589]">ID: {project.id}</span>
        </div>
      </td>

      {/* Department */}
      <td className="px-4 py-4">
        <span
          className={`px-2 py-1 rounded-full bg-${project.deptColor}-100 dark:bg-${project.deptColor}-900/30 
          text-${project.deptColor}-700 dark:text-${project.deptColor}-300 text-[10px] font-bold uppercase
           tracking-wide`}
        >
          {project.dept}
        </span>
      </td>

      {/* Lead */}
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <div
            className="size-6 rounded-full bg-slate-200 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.avatar})` }}
          ></div>
          <span className="text-sm">{project.lead}</span>
        </div>
      </td>

      {/* Status */}
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="flex items-center gap-1.5">
          <span className={`size-2 rounded-full bg-${project.statusColor}-500`}></span>
          <span className="text-sm font-medium">{project.status}</span>
        </div>
      </td>

      {/* Health */}
      <td className="px-4 py-4">
        <div className="w-16 bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
          <div
            className={`h-1.5 rounded-full bg-${project.statusColor}-500`}
            style={{ width: `${project.health}%` }}
          ></div>
        </div>
      </td>

      {/* Actions */}
      <td className="px-4 py-4 text-right">
        <div className="flex items-center justify-end gap-2">

          {/* VIEW BUTTON */}
      <td className="px-4 py-4 text-right">
        <div className="flex items-center justify-end gap-2">

          {/* VIEW BUTTON + OPENS DRAWER */}
          <button
            onClick={() => store.openDrawer(project)}
            className="p-1.5 rounded hover:bg-primary/10 text-primary transition-colors"
            title="View Project"
          >
            <MdVisibility className="text-lg" />
          </button>

        </div>
      </td>
        </div>
      </td>
    </tr>
  );
};

export default ManageRow;
