import ManageRow from "./ManageRow";
import { useProjectStore } from "../../../store/useProjectStore";
import userImage4 from "../../../assets/images/image4.png";
import userImage2 from "../../../assets/images/image2.png";
import userImage3 from "../../../assets/images/image3.png";

const sampleProjects = [
  {
    id: "iW-2904",
    name: "Alpha Phase Orion",
    dept: "Marketing",
    deptColor: "blue",
    lead: "Omarion Fabrizo",
    avatar: userImage4,
    status: "In Progress",
    statusColor: "green",
    health: 85,
    selected: false,
  },
  {
    id: "iW-3112",
    name: "Internal Tooling",
    dept: "Finance",
    deptColor: "amber",
    lead: "Shumacker James",
    avatar:userImage2,
    status: "Under Review",
    statusColor: "amber",
    health: 45,
    selected: true,
  },
  {
    id: "iW-0881",
    name: "Orizon Logistics",
    dept: "Sustainability",
    deptColor: "teal",
    lead: "Ali Omar",
    avatar:userImage3,
    status: "In Progress",
    statusColor: "green",
    health: 92,
    selected: true,
  },
];


const ManageTable = () => {
  const store = useProjectStore()
   const paginated = store.paginatedProjects()
  const selectAll = useProjectStore((s) => s.selectAll);
  const clearSelection = useProjectStore((s) => s.clearSelection);
  const selected = useProjectStore((s) => s.selected);

  const allSelected = paginated.length > 0 && paginated.every((p) => selected.has(p.id));

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-[#dbe0e6] dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-background-light dark:bg-slate-800/50">
              <th className="px-4 py-3 w-10">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={() => (allSelected ? clearSelection() : selectAll())}
                />
              </th>

              <th className="px-4 py-3 text-xs font-bold text-[#617589] uppercase tracking-wider">
                Project Name
              </th>

              <th className="px-4 py-3 text-xs font-bold text-[#617589] uppercase tracking-wider">
                Department
              </th>

              <th className="px-4 py-3 text-xs font-bold text-[#617589] uppercase tracking-wider">
                Lead
              </th>

              <th className="px-4 py-3 text-xs font-bold text-[#617589] uppercase tracking-wider">
                Status
              </th>

              <th className="px-4 py-3 text-xs font-bold text-[#617589] uppercase tracking-wider">
                Health
              </th>

              <th className="px-4 py-3 text-xs font-bold text-[#617589] uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#dbe0e6] dark:divide-slate-800">
            {sampleProjects.map((p) => (
              <ManageRow key={p.id} project={p} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTable;

