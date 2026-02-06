import { useState } from "react";
import { useKanbanStore } from "../../store/kanbanStore";

const BoardMessageModal = () => {
  const { messageModalOpen, closeMessageModal } = useKanbanStore();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [recipient, setRecipient] = useState("Select User");

  // Example user list — you can replace this with real data later
  const users = ["Alice", "Bob", "Charlie", "Diana"];

  if (!messageModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-96 shadow-xl">
        <h2 className="text-lg font-bold mb-4">Send a Message</h2>

        {/* Recipient */}
        <label className="text-sm font-medium mb-1 block">Send To</label>
        <select
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 mb-4"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        >
          <option disabled>Select User</option>
          {users.map((user) => (
            <option key={user}>{user}</option>
          ))}
        </select>

        {/* Title */}
        <label className="text-sm font-medium mb-1 block">Title</label>
        <input
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 mb-4"
          placeholder="Message title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Body */}
        <label className="text-sm font-medium mb-1 block">Message</label>
        <textarea
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 h-32 resize-none"
          placeholder="Write your message..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={closeMessageModal}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              console.log("Message sent:", {
                to: recipient,
                title,
                body,
              });

              // Reset fields
              setTitle("");
              setBody("");
              setRecipient("Select User");

              closeMessageModal();
            }}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardMessageModal;
