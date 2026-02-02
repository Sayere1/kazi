import { MdEdit, MdMoveUp, MdDelete, MdBolt } from "react-icons/md";
import { useProjectStore } from "../../../store/useProjectStore";

const ManageToolbar = () => {
  const selected = useProjectStore((s) => s.selected);
  const view = useProjectStore((s) => s.view);
  const setView = useProjectStore((s) => s.setView);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-[#dbe0e6] dark:border-slate-800
     shadow-sm flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b">

        {/* Segmented Control */}
        <div className="flex h-9 w-64 items-center rounded-lg bg-background-light dark:bg-slate-800 p-1">
          <label
            className={`flex grow items-center justify-center px-2 cursor-pointer ${
              view === "live" ? "bg-white dark:bg-slate-700 shadow-sm" : ""
            }`}
          >
            Live Projects
            <input
              type="radio"
              name="view"
              className="hidden"
              checked={view === "live"}
              onChange={() => setView("live")}
            />
          </label>

          <label
            className={`flex grow items-center justify-center px-2 cursor-pointer ${
              view === "archived" ? "bg-white dark:bg-slate-700 shadow-sm" : ""
            }`}
          >
            Archived
            <input
              type="radio"
              name="view"
              className="hidden"
              checked={view === "archived"}
              onChange={() => setView("archived")}
            />
          </label>
        </div>

        {/* Bulk Actions */}
        {selected.size > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#617589]">
              {selected.size} Selected
            </span>

            <button className="p-2 hover:bg-primary/10 rounded-lg">
              <MdEdit className="text-xl text-[#617589]" />
            </button>

            <button className="p-2 hover:bg-primary/10 rounded-lg">
              <MdMoveUp className="text-xl text-[#617589]" />
            </button>

            <button className="p-2 hover:bg-red-50 rounded-lg">
              <MdDelete className="text-xl text-red-500" />
            </button>

            <button className="flex items-center h-9 px-4 bg-primary text-white text-xs font-bold 
            rounded-lg shadow-sm hover:bg-primary/90">
              <MdBolt className="text-lg mr-2" />
              Bulk Action
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageToolbar;
