import { useNavigate, useLocation } from "react-router-dom";

const NavItems = ({ icon, label, to, collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <button
      onClick={() => navigate(to)}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors w-full text-left
        ${isActive 
          ? "bg-primary/10 text-primary font-semibold" 
          : "text-slate-custom hover:bg-slate-100 dark:hover:bg-slate-800"
        }
      `}
    >
      {icon}

      {/* Hide label when collapsed */}
      {!collapsed && (
        <span className="text-sm font-medium">{label}</span>
      )}
    </button>
  );
};

export default NavItems;
