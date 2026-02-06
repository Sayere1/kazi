import { FiUsers, FiTag, FiFilter } from "react-icons/fi";
import { MdPriorityHigh } from "react-icons/md";

import FilterDropdown from "./FilterDropdown";
import { useKanbanStore } from "../../../store/kanbanStore";

const BoardFilters = () => {
  const { filters, setFilter } = useKanbanStore();

  const priorityOptions = ["All", "High", "Medium", "Low"];
  const memberOptions = ["All", "Alice", "Bob", "Charlie", "Diana"];
  const labelOptions = ["All", "Design", "Dev", "Marketing", "Bug"];

  return (
    <div className="flex gap-3 flex-wrap">

      {/* Member Filter */}
      <FilterDropdown
        label="Member"
        value={filters.member}
        options={memberOptions}
        onChange={(v) => setFilter("member", v)}
        icon={<FiUsers className="text-lg" />}
      />

      {/* Priority Filter */}
      <FilterDropdown
        label="Priority"
        value={filters.priority}
        options={priorityOptions}
        onChange={(v) => setFilter("priority", v)}
        icon={<MdPriorityHigh className="text-lg text-red-500" />}
      />

      {/* Label Filter */}
      <FilterDropdown
        label="Label"
        value={filters.label}
        options={labelOptions}
        onChange={(v) => setFilter("label", v)}
        icon={<FiTag className="text-lg" />}
      />

      <div className="h-9 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>

      <button className="p-2 text-gray-500 hover:text-primary transition-colors">
        <FiFilter />
      </button>
    </div>
  );
};

export default BoardFilters;
