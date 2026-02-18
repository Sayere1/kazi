import { useState } from "react";
import { useTasksStore } from "../../store/useTasksStore";
import NewTaskModal from "../../modal/teamdashboard/NewTaskModal";

const CreateTaskModal = ({ open, onClose }) => {
  const addTask = useTasksStore((s) => s.addTask);

  const [title, setTitle] = useState("");
  const [project, setProject] = useState("General");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = () => {
    if (!title.trim()) return;

    addTask({
      title,
      project,
      priority,
      status: "in-progress",
      dueGroup: "Today",
    });

    setTitle("");
    onClose();
  };

  return (
    <NewTaskModal open={open} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Create New Task</h2>

      <div className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium">Task Title</label>
          <input
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111827]"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task name"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Project</label>
          <select
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111827]"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          >
            <option>General</option>
            <option>Marketing</option>
            <option>Product</option>
            <option>Internal</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Priority</label>
          <select
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111827]"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
        >
          Create Task
        </button>
      </div>
    </NewTaskModal>
  );
};

export default CreateTaskModal;
