import { FiPlus } from "react-icons/fi";

const TeamTaskHeader = () => {
  return (
    <div className="flex flex-wrap justify-between items-end gap-3 mb-8">
      <div className="flex flex-col gap-2">
        <p className="text-[#617589] text-base">Monday, October 23rd</p>
      </div>

      <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2
       hover:bg-primary/90 transition">
        <FiPlus className="text-xl" />
        New Task
      </button>
    </div>
  );
};

export default TeamTaskHeader;
