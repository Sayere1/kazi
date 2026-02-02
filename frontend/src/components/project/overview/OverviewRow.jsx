import {
  MdVisibility,
  MdTimeline,
  MdFeedback
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useProjectSelection from "../../../store/useProjectSelection";

const statusStyles = {
  Active: "bg-emerald-100 text-emerald-700",
  "At Risk": "bg-amber-100 text-amber-700",
  Archived: "bg-gray-100 text-gray-700",
};

const OverviewRow = ({ project }) => {
  const navigate = useNavigate();
  const { selected, toggleSelect, openProgressModal } = useProjectSelection();

  const isSelected = selected.includes(project.id);

  return (
    <tr className="hover:bg-[#f8f9fa] dark:hover:bg-[#1c2a38] transition-colors">
      <td className="px-6 py-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => toggleSelect(project.id)}
          className="w-4 h-4"
        />
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-col ">
          <span className="font-semibold text-sm">{project.name}</span>
          <span className="text-[10px] text-primary font-bold">{project.code}</span>
        </div>
      </td>

      <td className="px-6 py-4 text-sm text-[#617589] whitespace-nowrap">{project.owner}</td>

      <td className="px-6 py-4">
        <span
          className={`px-2 py-1 rounded text-[11px] font-bold uppercase tracking-tight ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </td>

      <td className="px-6 py-4 text-sm text-[#617589]">
        {new Date(project.created).toLocaleDateString()}
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-16 bg-[#f0f2f4] dark:bg-[#2d3a49] h-1 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full"
              style={{ width: `${project.storage}%` }}
            ></div>
          </div>
          <span className="text-xs font-medium">{project.storage}%</span>
        </div>
      </td>

      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">

          {/* View */}
          <button
            onClick={() => navigate(`/projects/${project.id}`)}
            className="p-1.5 rounded hover:bg-primary/10 text-primary transition-colors"
          >
            <MdVisibility className="text-lg" />
          </button>

          {/* Feedback */}
          <button
            onClick={() => navigate(`/projects/${project.id}/feedback`)}
            className="p-1.5 rounded hover:bg-purple-100 text-purple-600 transition-colors"
          >
            <MdFeedback className="text-lg" />
          </button>

          {/* Progress */}
          <button
            onClick={() => openProgressModal(project)}
            className="p-1.5 rounded hover:bg-blue-100 text-blue-600 transition-colors"
          >
            <MdTimeline className="text-lg" />
          </button>

        </div>
      </td>
    </tr>
  );
};

export default OverviewRow;
