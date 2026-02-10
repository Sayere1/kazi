import { useState } from "react";
import { FiX } from "react-icons/fi";
import { useTeamStore } from "../../store/useTeamStore"


const AddTeamModal = () => {

  const open = useTeamStore((s) => s.addAdminOpen);
  const close = useTeamStore((s) => s.closeAddAdmin);

  // Local form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Global Admin");

  const [permissions, setPermissions] = useState({
    manageUsers: false,
    manageProjects: false,
    manageFinance: false,
    systemSettings: false,
  });

  const [project, setProject] = useState("");

  const togglePermission = (key) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#1a222c] w-full max-w-lg rounded-xl shadow-xl p-6 border border-[#dbe0e6] dark:border-[#2d3748]">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#111418] dark:text-white">
            Add New Administrator
          </h2>
          <button
            onClick={close}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2d3748]"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-[#111418] dark:text-white">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 rounded-lg bg-[#f0f2f4] dark:bg-[#2d3748] border border-transparent focus:border-primary outline-none"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-[#111418] dark:text-white">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 w-full px-3 py-2 rounded-lg bg-[#f0f2f4] dark:bg-[#2d3748] border border-transparent focus:border-primary outline-none"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-sm font-medium text-[#111418] dark:text-white">
              Role
            </label>
            <select
              className="mt-1 w-full px-3 py-2 rounded-lg bg-[#f0f2f4] dark:bg-[#2d3748] border border-transparent focus:border-primary outline-none"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Global Admin</option>
              <option>Project Admin</option>
              <option>Financial Admin</option>
            </select>
          </div>

          {/* Permissions */}
          <div>
            <label className="text-sm font-medium text-[#111418] dark:text-white">
              Permissions
            </label>

            <div className="grid grid-cols-2 gap-3 mt-2">

              {/* Toggle */}
              <button
                type="button"
                onClick={() => togglePermission("manageUsers")}
                className={`px-3 py-2 rounded-lg text-sm font-semibold border transition
                  ${
                    permissions.manageUsers
                      ? "bg-primary text-white border-primary"
                      : "bg-[#f0f2f4] dark:bg-[#2d3748] text-[#111418] dark:text-white border-transparent"
                  }
                `}
              >
                Manage Users
              </button>

              <button
                type="button"
                onClick={() => togglePermission("manageProjects")}
                className={`px-3 py-2 rounded-lg text-sm font-semibold border transition
                  ${
                    permissions.manageProjects
                      ? "bg-primary text-white border-primary"
                      : "bg-[#f0f2f4] dark:bg-[#2d3748] text-[#111418] dark:text-white border-transparent"
                  }
                `}
              >
                Manage Projects
              </button>

              <button
                type="button"
                onClick={() => togglePermission("manageFinance")}
                className={`px-3 py-2 rounded-lg text-sm font-semibold border transition
                  ${
                    permissions.manageFinance
                      ? "bg-primary text-white border-primary"
                      : "bg-[#f0f2f4] dark:bg-[#2d3748] text-[#111418] dark:text-white border-transparent"
                  }
                `}
              >
                Manage Finance
              </button>

              <button
                type="button"
                onClick={() => togglePermission("systemSettings")}
                className={`px-3 py-2 rounded-lg text-sm font-semibold border transition
                  ${
                    permissions.systemSettings
                      ? "bg-primary text-white border-primary"
                      : "bg-[#f0f2f4] dark:bg-[#2d3748] text-[#111418] dark:text-white border-transparent"
                  }
                `}
              >
                System Settings
              </button>

            </div>
          </div>

          {/* Project Assignment */}
          <div>
            <label className="text-sm font-medium text-[#111418] dark:text-white">
              Assign to Project
            </label>
            <select
              className="mt-1 w-full px-3 py-2 rounded-lg bg-[#f0f2f4] dark:bg-[#2d3748] border border-transparent focus:border-primary outline-none"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            >
              <option value="">Select a project</option>
              <option value="Project A">Project A</option>
              <option value="Project B">Project B</option>
              <option value="Project C">Project C</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={close}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#2d3748] text-[#111418] dark:text-white hover:bg-gray-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-primary text-white font-bold hover:bg-primary/90"
            >
              Add Admin
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default AddTeamModal;

