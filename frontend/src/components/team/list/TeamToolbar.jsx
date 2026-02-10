import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";
import { useTeamStore } from "../../../store/useTeamStore";

const TeamToolbar = () => {
  const search = useTeamStore((s) => s.search);
  const setSearch = useTeamStore((s) => s.setSearch);
  const roleFilter = useTeamStore((s) => s.roleFilter);
  const setRoleFilter = useTeamStore((s) => s.setRoleFilter);
  const statusFilter = useTeamStore((s) => s.statusFilter);
  const setStatusFilter = useTeamStore((s) => s.setStatusFilter);

  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
      {/* Search */}
      <div className="flex flex-1 min-w-75 items-center gap-2 bg-[#f0f2f4] dark:bg-[#2d3748] px-3 py-2 rounded-lg border border-transparent focus-within:border-primary transition-all">
        <FiSearch className="text-[#617589]" />
        <input
          className="bg-transparent border-none focus:ring-0 text-sm w-full text-[#111418] dark:text-white placeholder:text-[#617589]"
          placeholder="Search admins by name, email..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        <button
          className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f4] dark:bg-[#2d3748] px-4 border border-transparent hover:border-[#dbe0e6] transition-colors"
          onClick={() =>
            setRoleFilter(
              roleFilter === "all" ? "Global Admin" : "all"
            )
          }
        >
          <span className="text-[#111418] dark:text-white text-sm font-medium leading-normal">
            Role: {roleFilter === "all" ? "All Roles" : roleFilter}
          </span>
          <FiChevronDown className="text-lg" />
        </button>

        <button
          className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f4] dark:bg-[#2d3748] px-4 border border-transparent hover:border-[#dbe0e6] transition-colors"
          onClick={() =>
            setStatusFilter(
              statusFilter === "any" ? "Active" : "any"
            )
          }
        >
          <span className="text-[#111418] dark:text-white text-sm font-medium leading-normal">
            Status: {statusFilter === "any" ? "Any" : statusFilter}
          </span>
          <FiChevronDown className="text-lg" />
        </button>

        <button className="flex h-10 items-center justify-center size-10 rounded-lg bg-[#f0f2f4] dark:bg-[#2d3748] text-[#111418] dark:text-white hover:bg-primary hover:text-white transition-all">
          <FiFilter />
        </button>
      </div>
    </div>
  );
};

export default TeamToolbar;
