import { useMemo } from "react";
import { useTeamStore } from "../../../store/useTeamStore";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const TeamPagination = () => {
  // Raw state from Zustand
  const admins = useTeamStore((s) => s.admins);
  const search = useTeamStore((s) => s.search);
  const roleFilter = useTeamStore((s) => s.roleFilter);
  const statusFilter = useTeamStore((s) => s.statusFilter);
  const quickFilters = useTeamStore((s) => s.quickFilters);
  const page = useTeamStore((s) => s.page);
  const pageSize = useTeamStore((s) => s.pageSize);
  const setPage = useTeamStore((s) => s.setPage);

  // 1️⃣ Filter admins
  const filteredAdmins = useMemo(() => {
    return admins
      .filter((a) =>
        search
          ? a.name.toLowerCase().includes(search.toLowerCase()) ||
            a.email.toLowerCase().includes(search.toLowerCase())
          : true
      )
      .filter((a) => (roleFilter === "all" ? true : a.role === roleFilter))
      .filter((a) =>
        statusFilter === "any" ? true : a.status === statusFilter
      )
      .filter((a) =>
        quickFilters.length === 0
          ? true
          : quickFilters.includes(a.status) || quickFilters.includes(a.role)
      );
  }, [admins, search, roleFilter, statusFilter, quickFilters]);

  // 2️⃣ Compute total pages
  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredAdmins.length / pageSize));
  }, [filteredAdmins, pageSize]);

  // 3️⃣ Compute visible range
  const total = filteredAdmins.length;
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  const goPrev = () => canPrev && setPage(page - 1);
  const goNext = () => canNext && setPage(page + 1);

  return (
    <div className="flex items-center justify-between px-6 py-4 border-t border-[#dbe0e6] dark:border-[#2d3748] bg-gray-50 dark:bg-[#1a222c]">
      {/* Mobile prev/next */}
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          className="relative inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-[#111418] dark:text-white ring-1 ring-inset ring-[#dbe0e6] dark:ring-[#2d3748] hover:bg-[#f0f2f4] disabled:opacity-40"
          onClick={goPrev}
          disabled={!canPrev}
        >
          Previous
        </button>
        <button
          className="relative ml-3 inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-[#111418] dark:text-white ring-1 ring-inset ring-[#dbe0e6] dark:ring-[#2d3748] hover:bg-[#f0f2f4] disabled:opacity-40"
          onClick={goNext}
          disabled={!canNext}
        >
          Next
        </button>
      </div>

      {/* Desktop pagination */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-[#617589] dark:text-[#a0aec0]">
            Showing{" "}
            <span className="font-bold text-[#111418] dark:text-white">
              {start}
            </span>{" "}
            to{" "}
            <span className="font-bold text-[#111418] dark:text-white">
              {end}
            </span>{" "}
            of{" "}
            <span className="font-bold text-[#111418] dark:text-white">
              {total}
            </span>{" "}
            results
          </p>
        </div>

        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            <button
              className="relative inline-flex items-center rounded-l-lg px-2 py-2 text-[#617589] dark:text-[#a0aec0] ring-1 ring-inset ring-[#dbe0e6] dark:ring-[#2d3748] hover:bg-gray-50 disabled:opacity-40"
              onClick={goPrev}
              disabled={!canPrev}
            >
              <FiChevronLeft className="text-xl" />
            </button>

            <button className="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-bold text-white focus:z-20">
              {page}
            </button>

            {page < totalPages && (
              <button
                className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-[#111418] dark:text-white ring-1 ring-inset ring-[#dbe0e6] dark:ring-[#2d3748] hover:bg-gray-50 focus:z-20"
                onClick={goNext}
              >
                {page + 1}
              </button>
            )}

            {page + 1 < totalPages && (
              <>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-[#617589] dark:text-[#a0aec0] ring-1 ring-inset ring-[#dbe0e6] dark:ring-[#2d3748]">
                  ...
                </span>
                <button
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-[#111418] dark:text-white ring-1 ring-inset ring-[#dbe0e6] dark:ring-[#2d3748] hover:bg-gray-50 focus:z-20"
                  onClick={() => setPage(totalPages)}
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              className="relative inline-flex items-center rounded-r-lg px-2 py-2 text-[#617589] dark:text-[#a0aec0] ring-1 ring-inset ring-[#dbe0e6] dark:ring-[#2d3748] hover:bg-gray-50 disabled:opacity-40"
              onClick={goNext}
              disabled={!canNext}
            >
              <FiChevronRight className="text-xl" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TeamPagination;
