import {
  MdDelete,
} from "react-icons/md";

const CreateMilestoneRow = ({ id, title, date, onChange, onRemove }) => (
  <div className="flex gap-4 items-center bg-background-light dark:bg-background-dark p-4 
  rounded-lg border border-[#dbe0e6] dark:border-[#2d394a]">
    <input
      type="text"
      value={title}
      onChange={(e) => onChange(id, "title", e.target.value)}
      className="flex-1 bg-transparent border-none focus:ring-0 p-0 text-base font-medium"
      placeholder="Milestone Title"
    />

    <input
      type="date"
      value={date}
      onChange={(e) => onChange(id, "date", e.target.value)}
      className="w-40 bg-transparent border-none focus:ring-0 p-0 text-sm"
    />

    <button
      onClick={() => onRemove(id)}
      className="text-[#617589] hover:text-red-500"
    >
      <MdDelete />
    </button>
  </div>
);

export default CreateMilestoneRow