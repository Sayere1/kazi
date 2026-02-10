import { useTeamStore } from "../../../store/useTeamStore";

const TeamFilter = () => {
  const quickFilters = useTeamStore((s) => s.quickFilters);
  const toggleQuickFilter = useTeamStore((s) => s.toggleQuickFilter);

  const isActive = (value) => quickFilters.includes(value);

  const chipBase =
    "flex h-8 items-center justify-center gap-x-2 rounded-full px-4 border border-transparent text-sm transition-colors";
  const inactiveChip =
    "bg-[#f0f2f4] dark:bg-[#2d3748] text-[#111418] dark:text-white hover:bg-[#e2e8f0]";
  const activeChip =
    "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20";

  return (
    <div className="flex gap-3 flex-wrap border-t border-[#f0f2f4] dark:border-[#2d3748] pt-4">
      <span className="text-xs font-bold text-[#617589] dark:text-[#a0aec0] uppercase tracking-wider flex items-center mr-2">
        Quick Filters:
      </span>

      <button
        className={`${chipBase} ${isActive("Active") ? activeChip : inactiveChip}`}
        onClick={() => toggleQuickFilter("Active")}
      >
        <p className="font-semibold">Active Only</p>
      </button>

      <button
        className={`${chipBase} ${isActive("Global Admin") ? activeChip : inactiveChip}`}
        onClick={() => toggleQuickFilter("Global Admin")}
      >
        <p>Global Admin</p>
      </button>

      <button
        className={`${chipBase} ${isActive("Project Admin") ? activeChip : inactiveChip}`}
        onClick={() => toggleQuickFilter("Project Admin")}
      >
        <p>Project Admin</p>
      </button>

      <button
        className={`${chipBase} ${isActive("Suspended") ? activeChip : inactiveChip}`}
        onClick={() => toggleQuickFilter("Suspended")}
      >
        <p>Suspended</p>
      </button>
    </div>
  );
};

export default TeamFilter;
