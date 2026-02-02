const FeedbackNavItem = ({ icon, label, active }) => (
  <a
    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      active
        ? "bg-primary text-white"
        : "text-[#617589] dark:text-gray-400 hover:bg-[#f0f2f4] dark:hover:bg-white/5"
    }`}
  >
    <span className="text-xl">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </a>
);

export default FeedbackNavItem