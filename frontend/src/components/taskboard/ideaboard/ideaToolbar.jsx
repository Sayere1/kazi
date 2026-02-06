import {
  MdAdd,
  MdRemove,
  MdOpenInFull,
  MdAutoAwesome,
  MdUndo,
  MdRedo,
} from "react-icons/md";
import { autoLayout } from "../../../store/elkLayout";

import { useWorkflowStore } from "../../../store/useWorkflowStore";

const IdeaToolbar = () => {
  const nodes = useWorkflowStore((s) => s.nodes);
  const edges = useWorkflowStore((s) => s.edges);
  const setLayout = useWorkflowStore((s) => s.setLayout);
  const zoom = useWorkflowStore((s) => s.zoom);
  const setZoom = useWorkflowStore((s) => s.setZoom);
  const undo = useWorkflowStore((s) => s.undo);
  const redo = useWorkflowStore((s) => s.redo);

  const handleAutoLayout = async () => {
    const laidOut = await autoLayout(nodes, edges);
    setLayout(laidOut);
  };

  return (
    <div className="absolute top-4 left-4 z-10 flex gap-2 bg-white dark:bg-gray-900 p-1 shadow-lg border
     border-gray-200 dark:border-gray-800 rounded-lg">
      <button
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-600 dark:text-gray-400"
        onClick={() => setZoom(Math.min(zoom + 0.1, 2))}
      >
        <MdAdd />
      </button>
      <button
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-600 dark:text-gray-400"
        onClick={() => setZoom(Math.max(zoom - 0.1, 0.4))}
      >
        <MdRemove />
      </button>
      <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 self-center" />
      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-600
       dark:text-gray-400">
        <MdOpenInFull />
      </button>
      <button
        className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-md text-xs font-bold"
        onClick={handleAutoLayout}
      >
        <MdAutoAwesome className="text-sm" />
        <span>Auto-layout</span>
      </button>
      <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 self-center" />
      <button
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-600 dark:text-gray-400"
        onClick={undo}
      >
        <MdUndo />
      </button>
      <button
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-600 dark:text-gray-400"
        onClick={redo}
      >
        <MdRedo />
      </button>
    </div>
  );
}

export default IdeaToolbar;