import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import NavItems from "./NavItems";
import UserWeather from "./userWeather";

// Sidebar.jsx

const Sidebar = ({
  collapsed,
  setCollapsed,
  navItems = [],
  title = "KaziHub",
  LogoIcon,
  showUserWeather = true,
}) => {
  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 
      flex flex-col fixed h-full transition-all duration-300`}
    >
      {/* Header */}
      <div className="p-4 flex items-center">
        <div className="size-8 flex items-center justify-center text-white">
          {LogoIcon && <LogoIcon />}
        </div>

        {!collapsed && (
          <h1 className="text-xl font-bold tracking-tight text-navy dark:text-white">
            {title}
          </h1>
        )}
      </div>

      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-16 bg-white dark:bg-slate-900 
        border border-slate-300 dark:border-slate-700 rounded-full p-1 shadow transition"
      >
        {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </button>

      {/* Navigation */}
      <nav className="flex-1 px-4 mt-4 space-y-6">
        {navItems.map((group, index) => (
          <div key={index}>
            {/* Section Label */}
            {!collapsed && group.section && (
              <div className="pb-2 text-[10px] uppercase font-bold text-slate-400 px-3 tracking-widest">
                {group.section}
              </div>
            )}

            {/* Section Items */}
            <div className="space-y-2">
              {group.items.map((item, idx) => (
                <NavItems
                  key={idx}
                  icon={item.icon}
                  label={item.label}
                  to={item.to}
                  collapsed={collapsed}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Optional User Profile */}
      {!collapsed && showUserWeather && <UserWeather />}
    </aside>
  );
};

export default Sidebar;