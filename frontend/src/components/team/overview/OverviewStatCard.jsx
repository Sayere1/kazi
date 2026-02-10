import { 
    MdStars,
    MdAdminPanelSettings,
    MdTimer,
    MdBolt 
} from "react-icons/md";

const icons = {
  stars: MdStars,
  admin_panel_settings: MdAdminPanelSettings,
  timer: MdTimer,
  bolt: MdBolt,
};

const OverviewStatCard = ({ icon, iconColor, bgColor, label, value, badge, badgeColor }) => {
  const Icon = icons[icon];

  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 
    shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${bgColor} ${iconColor}`}>
          <Icon size={22} />
        </div>
        <span className={`text-xs font-bold px-2 py-0.5 rounded ${badgeColor}`}>
          {badge}
        </span>
      </div>

      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{label}</p>
      <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{value}</h3>
    </div>
  );
};

export default OverviewStatCard;
