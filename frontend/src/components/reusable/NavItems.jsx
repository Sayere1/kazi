import { useNavigate, useLocation } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const NavItems = ({
  icon,
  label,
  to,
  collapsed,
  hasDropdown,
  isOpen,
  toggleDropdown
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <div
      className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors w-full
        ${isActive
          ? "bg-primary/10 text-primary font-semibold"
          : "text-slate-custom hover:bg-slate-100 dark:hover:bg-slate-800"
        }
      `}
    >
      {/* LEFT SIDE — icon + label (navigate) */}
      <button
        onClick={() => to && navigate(to)}
        className="flex items-center gap-3 flex-1 text-left"
      >
        {icon}
        {!collapsed && <span className="text-sm font-medium">{label}</span>}
      </button>

      {/* RIGHT SIDE — dropdown arrow */}
      {!collapsed && hasDropdown && (
        <button
          onClick={toggleDropdown}
          className="p-1"
        >
          {isOpen ? <FiChevronDown /> : <FiChevronRight />}
        </button>
      )}
    </div>
  );
};

export default NavItems;
