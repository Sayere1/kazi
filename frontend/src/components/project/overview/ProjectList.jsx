import { useMemo } from "react";
import useProjectSelection from "../../../store/useProjectSelection";
import ProjectProgressModal from "../../../modal/project/ProjectProgressModal";
import OverviewRow from "./OverviewRow";

const projects = [
  {
    id: 1,
    name: "Alpha Phase Orion",
    code: "ORG-0021",
    owner: "Omarion Fabrizo",
    status: "Active",
    created: "2026-05-12",
    storage: 85,
    tasksCompleted: 18,
    tasksTotal: 24,
    timeSpent: 42,
    deadline: "2024-12-12",
  },
  {
    id: 2,
    name: "Orizon Logistics",
    code: "ORG-0145",
    owner: "Ali Omar",
    status: "At Risk",
    created: "2026-1-01",
    storage: 42,
    tasksCompleted: 6,
    tasksTotal: 20,
    timeSpent: 15,
    deadline: "2024-06-22",
  },
  {
    id: 3,
    name: "Internal Tooling",
    code: "SYS-ADMIN",
    owner: "Shumacker James",
    status: "Archived",
    created: "2026-02-12",
    storage: 15,
    tasksCompleted: 3,
    tasksTotal: 10,
    timeSpent: 8,
    deadline: "2026-04-01",
  },
];

const ProjectList = () => {
  const {
    search,
    filters,
    setSearch,
    setFilter,
    selected,
    bulkDelete,
    bulkArchive,
    bulkExport,
    pagination,
    setPage,
    setPageSize,
    progressModal,
  } = useProjectSelection();

  const { page, pageSize } = pagination;

  // FILTER + SEARCH
  const filtered = useMemo(() => {
    return projects
      .filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.code.toLowerCase().includes(search.toLowerCase())
      )
      .filter((p) =>
        filters.status ? p.status === filters.status : true
      )
      .filter((p) =>
        filters.startDate ? new Date(p.created) >= new Date(filters.startDate) : true
      )
      .filter((p) =>
        filters.endDate ? new Date(p.created) <= new Date(filters.endDate) : true
      );
  }, [search, filters]);

  // PAGINATION
  const totalPages = Math.ceil(filtered.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const paginated = filtered.slice(startIndex, startIndex + pageSize);

  return (
    <div className="flex-1 bg-white dark:bg-[#1a2632] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a49] shadow-sm flex flex-col overflow-hidden">

      {/* HEADER */}
      <div className="p-6 border-b border-[#dbe0e6] dark:border-[#2d3a49] flex flex-col md:flex-row 
      justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold">Master Project List</h2>
          <p className="text-sm text-[#617589]">Global administrative oversight for all active workspaces</p>
        </div>

        <div className="flex gap-2">
          {/* Search */}
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-[#dbe0e6] dark:border-[#2d3a49] text-sm"
          />

          {/* Status Filter */}
          <select
            value={filters.status}
            onChange={(e) => setFilter("status", e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-[#dbe0e6] dark:border-[#2d3a49] text-sm"
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="At Risk">At Risk</option>
            <option value="Archived">Archived</option>
          </select>

          {/* Export */}
          <button
            onClick={bulkExport}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#dbe0e6] 
            dark:border-[#2d3a49] text-sm font-medium hover:bg-[#f0f2f4] dark:hover:bg-[#2d3a49]"
          >
            Export
          </button>
        </div>
      </div>

      {/* BULK ACTION BAR */}
      {selected.length > 0 && (
        <div className="p-3 bg-primary/10 border-b border-primary/20 flex items-center justify-between">
          <span className="text-sm font-medium">{selected.length} selected</span>

          <div className="flex gap-2">
            <button onClick={bulkArchive} className="px-3 py-1 text-sm bg-amber-100 text-amber-700 rounded">
              Archive
            </button>
            <button onClick={bulkDelete} className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded">
              Delete
            </button>
          </div>
        </div>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-[#fcfdfd] dark:bg-[#151f28] border-b border-[#dbe0e6] dark:border-[#2d3a49]">
            <tr>
              <th className="px-6 py-4"></th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-[#617589] tracking-wider whitespace-nowrap">Project Name</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-[#617589] tracking-wider">Owner</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-[#617589] tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-[#617589] tracking-wider">Created</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-[#617589] tracking-wider">Storage</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-[#617589] tracking-wider text-right">Admin Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#dbe0e6] dark:divide-[#2d3a49]">
            {paginated.map((p) => (
              <OverviewRow key={p.id} project={p} />
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION FOOTER */}
      <div className="p-4 border-t border-[#dbe0e6] dark:border-[#2d3a49] flex items-center justify-between">

        <p className="text-xs text-[#617589]">
          Showing {paginated.length} of {filtered.length} projects
        </p>

        <div className="flex items-center gap-4">

          {/* Page Size Selector */}
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="px-2 py-1 text-xs border border-[#dbe0e6] dark:border-[#2d3a49] rounded"
          >
            <option value={10}>10 / page</option>
            <option value={25}>25 / page</option>
            <option value={50}>50 / page</option>
            <option value={100}>100 / page</option>
          </select>

          {/* Pagination Buttons */}
          <div className="flex gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 text-xs font-semibold border border-[#dbe0e6] dark:border-[#2d3a49] 
              rounded disabled:opacity-40"
            >
              Prev
            </button>

            <span className="text-xs font-semibold px-2">
              Page {page} / {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-3 py-1 text-xs font-semibold bg-primary text-white rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* PROGRESS MODAL */}
      {progressModal.open && <ProjectProgressModal />}
    </div>
  );
};

export default ProjectList;
