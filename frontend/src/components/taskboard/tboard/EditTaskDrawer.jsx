import { useKanbanStore } from "../../../store/kanbanStore";

const EditTaskDrawer = () => {
  const { editTaskOpen, closeEditTask, selectedTask, updateTask } =
    useKanbanStore();

  if (!editTaskOpen || !selectedTask) return null;

  return (
    <div className="fixed inset-0 flex justify-end z-50">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={closeEditTask}
      />

      <div className="relative w-100 h-full bg-white dark:bg-gray-900 p-6 shadow-xl overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>

        <input
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 mb-4"
          value={selectedTask.title}
          onChange={(e) =>
            updateTask(selectedTask.id, { title: e.target.value })
          }
        />

        <textarea
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 h-40"
          placeholder="Description..."
          value={selectedTask.description || ""}
          onChange={(e) =>
            updateTask(selectedTask.id, { description: e.target.value })
          }
        />

        <button
          onClick={closeEditTask}
          className="mt-4 px-4 py-2 bg-primary text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditTaskDrawer;
