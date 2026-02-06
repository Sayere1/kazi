import { MdClose, MdCancel, MdAdd } from "react-icons/md";
import { useWorkflowStore } from "../../../store/useWorkflowStore";

const IDSettingsPanel = () => {
  const nodes = useWorkflowStore((s) => s.nodes);
  const selectedNodeId = useWorkflowStore((s) => s.selectedNodeId);
  const updateNode = useWorkflowStore((s) => s.updateNode);

  const node = nodes.find((n) => n.id === selectedNodeId);

  if (!node) {
    return (
      <aside className="w-80 border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col shrink-0">
        <div className="p-5 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-sm font-bold">Flow Settings</h2>
          <p className="text-[11px] text-gray-500">
            Select to configure
          </p>
        </div>
      </aside>
    );
  }

  const handleTitleChange = (e) => {
    updateNode(node.id, { label: e.target.value, meta: { title: e.target.value } });
  };

  const handleStatusChange = (e) => {
    updateNode(node.id, { meta: { status: e.target.value } });
  };

  return (
    <aside className="w-80 border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col shrink-0">
      <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
        <div>
          <h2 className="text-sm font-bold">Flow Settings</h2>
          <p className="text-[11px] text-gray-500">
            Configure trigger parameters
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MdClose />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Node Title
            </label>
            <input
              className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-primary focus:border-primary"
              type="text"
              value={node.meta?.title || node.label}
              onChange={handleTitleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Target Status
            </label>
            <select
              className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-primary focus:border-primary"
              value={node.meta?.status || "Done"}
              onChange={handleStatusChange}
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Done</option>
              <option>Archived</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Assigned Staff
            </label>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium border border-primary/20">
                All Staff
                <MdCancel className="text-[14px] cursor-pointer" />
              </div>
              <button className="flex items-center gap-1 px-2 py-1 border border-dashed border-gray-300 dark:border-gray-700 text-gray-400 rounded text-xs">
                <MdAdd className="text-[14px]" />
                Filter
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Add Delay Timer</span>
              <div className="relative inline-flex h-5 w-10 items-center rounded-full bg-gray-200 dark:bg-gray-700">
                <span className="h-4 w-4 translate-x-1 rounded-full bg-white transition shadow-sm" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Run for Sub-tasks</span>
              <div className="relative inline-flex h-5 w-10 items-center rounded-full bg-primary">
                <span className="h-4 w-4 translate-x-5 rounded-full bg-white transition shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 border-t border-gray-100 dark:border-gray-800 flex gap-2">
        <button className="flex-1 py-2 bg-gray-100 dark:bg-gray-800 text-sm font-bold rounded-lg
         hover:bg-gray-200 transition-colors">
          Duplicate
        </button>
        <button className="flex-1 py-2 bg-red-50 text-red-600 text-sm font-bold rounded-lg
         hover:bg-red-100 transition-colors">
          Delete
        </button>
      </div>
    </aside>
  );
}

export default IDSettingsPanel