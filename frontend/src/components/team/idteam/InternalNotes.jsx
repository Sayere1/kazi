import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import TeamNotesModal from "../../../modal/team/TeamNotesModal";


const InternalNotes = () => {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState(
    `"Handled North-East region migration successfully in Q3. Requested expanded access to platform-level billing reports for end-of-year audit."`
  );

  return (
    <>
      <div className="bg-white dark:bg-[#1a222c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold uppercase text-[#617589] dark:text-[#a0aec0] tracking-widest">
            Internal Notes
          </h3>

          <button
            onClick={() => setOpen(true)}
            className="text-primary text-xs font-bold flex items-center gap-1 hover:underline"
          >
            <FaEdit className="text-primary text-xs" />
            Edit
          </button>
        </div>

        <div
          className="text-sm text-[#617589] italic leading-relaxed prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: notes }}
        />
      </div>

      <TeamNotesModal
        open={open}
        setOpen={setOpen}
        notes={notes}
        setNotes={setNotes}
      />
    </>
  );
};

export default InternalNotes;
