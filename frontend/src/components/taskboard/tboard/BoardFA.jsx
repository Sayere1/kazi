import { FiHelpCircle, FiMessageCircle } from "react-icons/fi";
import { useKanbanStore } from "../../../store/kanbanStore";

const BoardFA = () => {
  const { openMessageModal } = useKanbanStore();

  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-2">
      <button
        onClick={openMessageModal}
        className="size-12 rounded-full bg-primary text-white shadow-lg flex items-center 
        justify-center hover:scale-105 transition-transform"
      >
        <FiMessageCircle />
      </button>

      <button className="size-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200
       dark:border-gray-700 text-gray-600 dark:text-gray-300 shadow-lg flex items-center justify-center 
       hover:scale-105 transition-transform">
        <FiHelpCircle />
      </button>
    </div>
  );
};

export default BoardFA;
