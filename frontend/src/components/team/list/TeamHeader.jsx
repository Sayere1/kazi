import { FiUserPlus, FiDownload } from "react-icons/fi";
import { useTeamStore } from "../../../store/useTeamStore";

const TeamHeader = () => {
  const openAddAdmin = useTeamStore((s) => s.openAddAdmin);

  return (
    <div className="flex flex-wrap justify-between items-end gap-4 p-4 bg-white dark:bg-[#1a222c] rounded-xl shadow-sm border border-[#dbe0e6] dark:border-[#2d3748]">
      <div className="flex min-w-72 flex-col gap-2">
        <p className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
          System Administrators
        </p>
        <p className="text-[#617589] dark:text-[#a0aec0] text-base max-w-lg">
          Manage and monitor administrative access levels across the iWINo ecosystem.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={openAddAdmin}
          className="flex items-center gap-2 rounded-lg h-10 px-5 bg-primary text-white font-bold hover:bg-primary/90 transition"
        >
          <FiUserPlus className="text-lg" />
          Add New Admin
        </button>

        <button className="flex items-center gap-2 rounded-lg h-10 px-5 bg-[#f0f2f4] dark:bg-[#2d3748] text-[#111418] dark:text-white font-bold hover:bg-[#e2e8f0] transition">
          <FiDownload className="text-lg" />
          Export CSV
        </button>
      </div>
    </div>
  );
};

export default TeamHeader;
