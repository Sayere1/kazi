import { FaProjectDiagram } from "react-icons/fa";

const ProjectOwnership = () => (
  <div className="bg-white dark:bg-[#1a222c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm">
    <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3748] flex justify-between items-center">
      <h2 className="text-lg font-bold flex items-center gap-2">
        <FaProjectDiagram className="text-primary" />
        Project Ownership
      </h2>
      <span className="text-sm font-medium text-primary">3 Active Projects</span>
    </div>

    <table className="w-full text-left">
      <thead className="bg-background-light dark:bg-background-dark/30 text-[#617589] dark:text-[#a0aec0] text-xs uppercase tracking-wider">
        <tr>
          <th className="px-6 py-3 font-semibold">Project Name</th>
          <th className="px-6 py-3 font-semibold">Role</th>
          <th className="px-6 py-3 font-semibold text-right">Members</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-[#e5e7eb] dark:divide-[#2d3748]">
        {[
          { name: "Eco transportation", role: "Owner", members: 12, color: "primary" },
          { name: "Rebranding", role: "Lead Admin", members: 8, color: "green-500" },
          { name: "Budget Auditing", role: "Collaborator", members: 4, color: "purple-500" },
        ].map((p) => (
          <tr
            key={p.name}
            className="hover:bg-background-light/50 dark:hover:bg-background-dark/20 transition-colors"
          >
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded bg-${p.color}/20 flex items-center justify-center text-${p.color} font-bold`}
                >
                  {p.name[0]}
                </div>
                <span className="font-medium">{p.name}</span>
              </div>
            </td>
            <td className="px-6 py-4 text-sm">{p.role}</td>
            <td className="px-6 py-4 text-right font-medium">{p.members}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ProjectOwnership;
