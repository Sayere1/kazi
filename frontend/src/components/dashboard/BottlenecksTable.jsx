import { useState, useMemo } from "react";
import { FiClock, FiPauseCircle, FiAlertCircle,
  FiChevronUp,
  FiChevronDown,
  FiFilter,
  FiArrowUpCircle,
  FiMinusCircle,
  FiArrowDownCircle,
} from "react-icons/fi";
import { bottlenecksData } from "../../data/data";

// ----------------------
// Sort Icon Component
// ----------------------
const SortIcon = ({ active, direction }) => {
  if (!active) return null;
  return direction === "asc" ? (
    <FiChevronUp className="inline-block ml-1" />
  ) : (
    <FiChevronDown className="inline-block ml-1" />
  );
};

// ----------------------
// Priority Icon Resolver
// ----------------------
const getPriorityIcon = (priority) => {
  switch (priority) {
    case "High":
      return <FiArrowUpCircle className="text-red-600 text-base" />;
    case "Medium":
      return <FiMinusCircle className="text-orange-500 text-base" />;
    case "Low":
      return <FiArrowDownCircle className="text-green-600 text-base" />;
    default:
      return null;
  }
};

// ----------------------
// Status Icon Resolver
// ----------------------
const getStatusIcon = (type) => {
  switch (type) {
    case "warning":
      return <FiPauseCircle className="text-yellow-600 text-sm" />;
    case "danger":
      return <FiAlertCircle className="text-red-600 text-sm" />;
    default:
      return <FiClock className="text-slate-500 text-sm" />;
  }
};

// ----------------------
// Column Filter Dropdown
// ----------------------
const ColumnFilter = ({ label, options, value, onChange }) => {
  return (
    <div className="relative group inline-block">
      <FiFilter className="ml-2 text-slate-400 group-hover:text-primary cursor-pointer" />

      <div className="absolute left-0 mt-2 w-40 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
        <div className="p-2 text-xs font-semibold text-slate-500 uppercase">
          {label}
        </div>

        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`w-full text-left px-3 py-1.5 text-sm rounded hover:bg-slate-100 dark:hover:bg-slate-800 ${
              value === opt ? "text-primary font-semibold" : ""
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

// ----------------------
// Main Component
// ----------------------
const BottlenecksTable = () => {
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "priority",
    direction: "asc",
  });

  const [filters, setFilters] = useState({
    priority: "All",
    status: "All",
    owner: "All",
  });

  const [page, setPage] = useState(1);
  const pageSize = 5;

  // ----------------------
  // Sorting Logic
  // ----------------------
  const sortedData = useMemo(() => {
    const sorted = [...bottlenecksData];

    sorted.sort((a, b) => {
      const valA = a[sortConfig.key].toString().toLowerCase();
      const valB = b[sortConfig.key].toString().toLowerCase();

      if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
      if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [sortConfig]);

  // ----------------------
  // Filtering Logic
  // ----------------------
  const filteredData = sortedData.filter((item) => {
    const term = search.toLowerCase();

    const matchesSearch =
      item.description.toLowerCase().includes(term) ||
      item.project.toLowerCase().includes(term) ||
      item.owner.toLowerCase().includes(term) ||
      item.status.toLowerCase().includes(term);

    const matchesPriority =
      filters.priority === "All" || item.priority === filters.priority;

    const matchesStatus =
      filters.status === "All" || item.status === filters.status;

    const matchesOwner =
      filters.owner === "All" || item.owner === filters.owner;

    return matchesSearch && matchesPriority && matchesStatus && matchesOwner;
  });

  // ----------------------
  // Pagination Logic
  // ----------------------
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const requestSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction:
        prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">

      {/* Header */}
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <h4 className="text-lg font-bold text-navy dark:text-white">
          Critical Bottlenecks
        </h4>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1.5 text-sm rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-400 text-[11px] uppercase tracking-wider font-bold">

              {/* Description */}
              <th
                className="px-6 py-4 cursor-pointer"
                onClick={() => requestSort("description")}
              >
                <div className="flex items-center gap-2">
                  Blocker Description
                  <SortIcon
                    active={sortConfig.key === "description"}
                    direction={sortConfig.direction}
                  />
                </div>
              </th>

              {/* Project */}
              <th
                className="px-6 py-4 cursor-pointer"
                onClick={() => requestSort("project")}
              >
                <div className="flex items-center gap-2">
                  Associated Project
                  <SortIcon
                    active={sortConfig.key === "project"}
                    direction={sortConfig.direction}
                  />
                </div>
              </th>

              {/* Priority */}
              <th className="px-6 py-4">
                <div className="flex items-center gap-2">
                  Priority
                  <ColumnFilter
                    label="Priority"
                    options={["All", "High", "Medium", "Low"]}
                    value={filters.priority}
                    onChange={(val) => {
                      setFilters((prev) => ({ ...prev, priority: val }));
                      setPage(1);
                    }}
                  />
                </div>
              </th>

              {/* Owner */}
              <th className="px-6 py-4">
                <div className="flex items-center gap-2">
                  Owner
                  <ColumnFilter
                    label="Owner"
                    options={[
                      "All",
                      "M. Chen",
                      "S. Jenkins",
                      "D. Park",
                    ]}
                    value={filters.owner}
                    onChange={(val) => {
                      setFilters((prev) => ({ ...prev, owner: val }));
                      setPage(1);
                    }}
                  />
                </div>
              </th>

              {/* Status */}
              <th className="px-6 py-4">
                <div className="flex items-center gap-2">
                  Status
                  <ColumnFilter
                    label="Status"
                    options={["All", "Critical", "Stuck", "Waiting"]}
                    value={filters.status}
                    onChange={(val) => {
                      setFilters((prev) => ({ ...prev, status: val }));
                      setPage(1);
                    }}
                  />
                </div>
              </th>

              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
            {paginatedData.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
              >
                {/* Description */}
                <td className="px-6 py-4">
                  <p className="font-semibold text-navy dark:text-white">
                    {item.description}
                  </p>
                  <p className="text-xs text-slate-400">{item.detail}</p>
                </td>

                {/* Project */}
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">
                  {item.project}
                </td>

                {/* Priority */}
                <td className="px-6 py-4">
                  <span
                    className={`flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded uppercase
                      ${
                        item.priority === "High"
                          ? "bg-red-100 dark:bg-red-900/30 text-red-600"
                          : item.priority === "Medium"
                          ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600"
                          : "bg-green-100 dark:bg-green-900/30 text-green-600"
                      }
                    `}
                  >
                    {getPriorityIcon(item.priority)}
                    {item.priority}
                  </span>
                </td>

                {/* Owner */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="size-6 rounded-full bg-slate-200 bg-cover"
                      style={{ backgroundImage: `url("${item.ownerImg}")` }}
                    ></div>
                    <span>{item.owner}</span>
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <div
                    className={`flex items-center gap-1.5 font-medium italic ${
                      item.statusType === "danger"
                        ? "text-red-600"
                        : item.statusType === "warning"
                        ? "text-yellow-600"
                        : "text-slate-500"
                    }`}
                  >
                    {getStatusIcon(item.statusType)}
                    {item.status}
                  </div>
                </td>

                {/* Action */}
                <td className="px-6 py-4 text-right">
                  <button className="text-primary font-bold hover:text-navy transition-colors">
                    Resolve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4 border-t border-slate-200 dark:border-slate-800">
        <span className="text-sm text-slate-500">
          Page {page} of {totalPages}
        </span>

        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-3 py-1 text-sm rounded-lg bg-slate-100 dark:bg-slate-800 disabled:opacity-40"
          >
            Prev
          </button>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 text-sm rounded-lg bg-slate-100 dark:bg-slate-800 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottlenecksTable;
