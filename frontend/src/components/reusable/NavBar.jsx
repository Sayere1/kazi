import { useState } from "react";
import { FiBell, FiHelpCircle, FiPlus, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavBar = ({
  collapsed = false,
  showSearch = true,
  searchPlaceholder = "Search...",
  onSearch,
  showAddButton = true,
  addButtonLabel = "New",
  onAdd,
  showNotifications = true,
  onBellClick,
  showHelp = true,
  onHelpClick,
  profileImage,
  navLinks = [], // NEW
  onSettings,
  onLogout,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header
      className={`
        h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800
        flex items-center justify-between sticky top-0 z-10 transition-all duration-300
        ${collapsed ? "pl-20 pr-8" : "pl-10 pr-4"}
      `}
    >
      {/* Left Section: NavLinks + Search */}
      <div className="flex items-center gap-6 w-1/2">
        {/* NavLinks */}
        {navLinks.length > 0 && (
          <nav className="flex items-center gap-4">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.href}
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-primary transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Search */}
        {showSearch && (
          <div className="relative w-full max-w-xs">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4
               py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder={searchPlaceholder}
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-4 relative">
        {showNotifications && (
          <button
            onClick={onBellClick}
            className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 
            rounded-lg relative"
          >
            <FiBell />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2
             border-white dark:border-slate-900"></span>
          </button>
        )}

        {showHelp && (
          <button
            onClick={onHelpClick}
            className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            <FiHelpCircle />
          </button>
        )}

        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>

        {showAddButton && (
          <button
            onClick={onAdd}
            className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white text-sm 
            font-semibold rounded-lg hover:bg-primary/90"
          >
            <FiPlus className="text-sm" />
            {addButtonLabel}
          </button>
        )}

        {/* Profile Image + Dropdown */}
        {profileImage && (
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover border border-slate-300
               dark:border-slate-700 cursor-pointer"
              onClick={() => setOpenDropdown((prev) => !prev)}
            />

            {openDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 
              shadow-lg rounded-lg py-2 border border-slate-200 dark:border-slate-700">
                <button
                  onClick={onSettings}
                  className="w-full text-left px-4 py-2 text-sm text-slate-700
                   dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  Settings
                </button>
                <button
                  onClick={onLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600
                   hover:bg-red-50 dark:hover:bg-slate-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
