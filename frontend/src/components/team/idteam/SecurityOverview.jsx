import { FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const SecurityOverview = () => {
  return (
    <div className="bg-white dark:bg-[#1a222c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748]
     shadow-sm p-6">
      <h3 className="text-sm font-bold uppercase text-[#617589] dark:text-[#a0aec0] tracking-widest mb-4">
        Security Overview
      </h3>

      <div className="space-y-4">

        {/* Account Status */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#617589]">Account Status</span>
          <span className="flex items-center gap-1.5 text-xs font-bold text-green-500 bg-green-500/10 px-2 
          py-0.5 rounded-full uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Active
          </span>
        </div>

        {/* 2FA Status */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#617589]">2FA Status</span>
          <span className="flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-2 py-0.5
           rounded-full uppercase">
            <FaCheckCircle className="text-xs! text-primary" />
            Enabled
          </span>
        </div>

        {/* Security Level */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#617589]">Security Level</span>
          <span className="text-sm font-bold">Lvl 4 (Restricted)</span>
        </div>

      </div>
    </div>
  );
};

export default SecurityOverview;
