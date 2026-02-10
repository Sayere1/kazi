import { useState } from "react";
import { FaKey, FaCheckCircle } from "react-icons/fa";

const Toggle = ({ enabled, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`w-10 h-6 rounded-full relative transition-colors ${
        enabled ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
      }`}
    >
      <div
        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
          enabled ? "right-1" : "left-1"
        }`}
      />
    </button>
  );
};

const TeamPermissions = () => {
  const [globalRights, setGlobalRights] = useState([
    {
      title: "User Management",
      desc: "Can create/edit/delete end users",
      enabled: true,
    },
    {
      title: "System Configuration",
      desc: "Access to global platform settings",
      enabled: true,
    },
    {
      title: "Financial Reports",
      desc: "View billing and revenue data",
      enabled: true,
    },
  ]);

  const [securityOverrides, setSecurityOverrides] = useState([
    {
      title: "Override IP Restrictions",
      desc: "Login allowed from any location",
      enabled: true,
      highlight: true,
    },
    {
      title: "API Key Generation",
      desc: "Can create system-level API tokens",
      enabled: false,
      highlight: false,
    },
    {
      title: "Support Impersonation",
      desc: "Ability to log in as other users",
      enabled: true,
      highlight: true,
    },
  ]);

  const toggleGlobalRight = (index) => {
    setGlobalRights((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  const toggleSecurityOverride = (index) => {
    setSecurityOverrides((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  return (
    <div className="bg-white dark:bg-[#1a222c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm">
      <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3748]">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <FaKey className="text-primary" />
          Access Permissions & Overrides
        </h2>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* GLOBAL RIGHTS */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase text-[#617589] dark:text-[#a0aec0] tracking-widest">
            Global Rights
          </h3>

          {globalRights.map((item, index) => (
            <div
              key={item.title}
              className="flex items-center justify-between p-3 rounded-lg border border-[#e5e7eb] dark:border-[#2d3748]"
            >
              <div className="flex flex-col">
                <span className="text-sm font-bold">{item.title}</span>
                <span className="text-xs text-[#617589]">{item.desc}</span>
              </div>

              <Toggle
                enabled={item.enabled}
                onToggle={() => toggleGlobalRight(index)}
              />
            </div>
          ))}
        </div>

        {/* SECURITY OVERRIDES */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase text-[#617589] dark:text-[#a0aec0] tracking-widest">
            Security Overrides
          </h3>

          {securityOverrides.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center justify-between p-3 rounded-lg border ${
                item.highlight
                  ? "border-primary/30 bg-primary/5"
                  : "border-[#e5e7eb] dark:border-[#2d3748]"
              }`}
            >
              <div className="flex flex-col">
                <span
                  className={`text-sm font-bold ${
                    item.highlight ? "text-primary" : ""
                  }`}
                >
                  {item.title}
                </span>
                <span
                  className={`text-xs ${
                    item.highlight ? "text-primary/70" : "text-[#617589]"
                  }`}
                >
                  {item.desc}
                </span>
              </div>

              {item.highlight ? (
                <FaCheckCircle className="text-primary" />
              ) : (
                <Toggle
                  enabled={item.enabled}
                  onToggle={() => toggleSecurityOverride(index)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPermissions;
