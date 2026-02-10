import { FaTimes, FaSave } from "react-icons/fa";
import TipTapEditor from "./TipTapEditor";

const TeamNotesModal = ({ open, setOpen, notes, setNotes }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1a222c] rounded-xl shadow-xl w-full max-w-lg p-6 border border-[#e5e7eb] dark:border-[#2d3748]">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Edit Internal Notes</h2>
          <button onClick={() => setOpen(false)}>
            <FaTimes className="text-slate-500 hover:text-slate-700 dark:hover:text-white" />
          </button>
        </div>

        {/* Editor */}
        <TipTapEditor content={notes} onChange={setNotes} />

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-bold hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Cancel
          </button>

          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold flex items-center gap-2 hover:bg-primary/90"
          >
            <FaSave />
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamNotesModal;
