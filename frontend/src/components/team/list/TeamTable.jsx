import { useMemo } from "react";
import { useTeamStore } from "../../../store/useTeamStore";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const TeamTable = () => {

  const navigate = useNavigate();

  // Pull ONLY raw state from Zustand
  const admins = useTeamStore((s) => s.admins);
  const search = useTeamStore((s) => s.search);
  const roleFilter = useTeamStore((s) => s.roleFilter);
  const statusFilter = useTeamStore((s) => s.statusFilter);
  const quickFilters = useTeamStore((s) => s.quickFilters);
  const page = useTeamStore((s) => s.page);
  const pageSize = useTeamStore((s) => s.pageSize);

  const selected = useTeamStore((s) => s.selected);
  const toggleSelect = useTeamStore((s) => s.toggleSelect);
  const toggleSelectAll = useTeamStore((s) => s.toggleSelectAll);

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

  // 2️⃣ Paginate
  const paginatedAdmins = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredAdmins.slice(start, start + pageSize);
  }, [filteredAdmins, page, pageSize]);

  const allSelected =
    paginatedAdmins.length > 0 &&
    paginatedAdmins.every((a) => selected.has(a.id));

  const roleBadgeClass = (color) => {
    if (color === "blue")
      return "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-blue-700/10";
    if (color === "purple")
      return "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 ring-purple-700/10";
    if (color === "orange")
      return "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 ring-orange-700/10";
    return "";
  };

  return (
    <div className="bg-white dark:bg-[#1a222c] rounded-xl shadow-sm border border-[#dbe0e6] dark:border-[#2d3748] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc] dark:bg-[#242d38] border-b border-[#dbe0e6] dark:border-[#2d3748]">
              <th className="px-6 py-4">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleSelectAll}
                />
              </th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">
                Admin Name
              </th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider hidden md:table-cell">
                Email
              </th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">
                Role Type
              </th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider hidden lg:table-cell">
                Last Active
              </th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#dbe0e6] dark:divide-[#2d3748]">
            {paginatedAdmins.map((admin) => (
              <tr
                key={admin.id}
                className="hover:bg-[#f0f2f4]/50 dark:hover:bg-[#2d3748]/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selected.has(admin.id)}
                    onChange={() => toggleSelect(admin.id)}
                  />
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-10 rounded-full bg-center bg-cover bg-no-repeat border border-gray-100"
                      style={{ backgroundImage: `url(${admin.avatar})` }}
                    />
                    <div>
                      <p className="text-[#111418] dark:text-white text-sm font-semibold">
                        {admin.name}
                      </p>
                      <p className="text-[#617589] dark:text-[#a0aec0] text-xs md:hidden">
                        {admin.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-[#617589] dark:text-[#a0aec0] text-sm hidden md:table-cell">
                  {admin.email}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold ring-1 ring-inset ${roleBadgeClass(
                      admin.roleColor
                    )}`}
                  >
                    {admin.role}
                  </span>
                </td>

                <td className="px-6 py-4 text-[#617589] dark:text-[#a0aec0] text-sm hidden lg:table-cell">
                  {admin.lastActive}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span
                      className={`size-2 rounded-full ${
                        admin.statusColor === "green"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    ></span>
                    <span className="text-[#111418] dark:text-white text-sm font-medium">
                      {admin.status}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 text-right">
                  <button 
                  onClick={() => navigate("/teams/team-Id")}
                  className="inline-flex items-center justify-center rounded-lg h-8 px-4
                   text-primary text-sm font-bold hover:bg-primary/10 transition-colors">
                    Manage
                    <FiChevronRight className="ml-1" />
                  </button>
                </td>
              </tr>
            ))}

            {paginatedAdmins.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-8 text-center text-sm text-[#617589] dark:text-[#a0aec0]"
                >
                  No admins match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamTable;
