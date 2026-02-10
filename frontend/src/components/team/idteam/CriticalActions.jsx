import { FaKey, FaArrowUp, FaUserSlash } from "react-icons/fa";

const CriticalActions = () => (
  <div className="bg-white dark:bg-[#1a222c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm p-6">
    <h3 className="text-sm font-bold uppercase text-[#617589] dark:text-[#a0aec0] tracking-widest mb-4">
      Critical Actions
    </h3>

    <div className="flex flex-col gap-3">
      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#e5e7eb] dark:border-[#2d3748] hover:bg-background-light dark:hover:bg-background-dark/40 transition-all text-sm font-bold">
        <FaKey className="text-[#617589]" />
        Reset Password
      </button>

      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#e5e7eb] dark:border-[#2d3748] hover:bg-background-light dark:hover:bg-background-dark/40 transition-all text-sm font-bold">
        <FaArrowUp className="text-[#617589]" />
        Transfer Ownership
      </button>

      <hr className="my-2 border-[#e5e7eb] dark:border-[#2d3748]" />

      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-all text-sm font-bold">
        <FaUserSlash />
        Revoke Admin Rights
      </button>
    </div>
  </div>
);

export default CriticalActions;
