import { useState } from "react";
import { useKanbanStore } from "../../store/kanbanStore";

const AddTaskModal = () => {
  const { addTaskOpen, closeAddTask, selectedColumn, addTask } = useKanbanStore();
  const [title, setTitle] = useState("");

  if (!addTaskOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-96 shadow-xl">
        <h2 className="text-lg font-bold mb-4">Add Task</h2>

        <input
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex justify-end gap-3 mt-4">
          <button onClick={closeAddTask} className="px-4 py-2">Cancel</button>
          <button
            onClick={() => {
              addTask(selectedColumn, {
                title,
                priority: "LOW",
                date: "Today",
                avatar: "https://i.pravatar.cc/100",
              });
              closeAddTask();
            }}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
