import { useState } from "react";
import { useKanbanStore } from "../../store/kanbanStore";

const AddColumnModal = () => {
  const { addColumnOpen, closeAddColumn, addColumn } = useKanbanStore();
  const [title, setTitle] = useState("");

  if (!addColumnOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-96 shadow-xl">
        <h2 className="text-lg font-bold mb-4">Add Column</h2>

        <input
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
          placeholder="Column name..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex justify-end gap-3 mt-4">
          <button onClick={closeAddColumn} className="px-4 py-2">Cancel</button>
          <button
            onClick={() => {
              addColumn(title);
              closeAddColumn();
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

export default AddColumnModal;
