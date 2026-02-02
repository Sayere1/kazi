const FeedbackTab = ({ label, active }) => (
  <button
    className={`pb-3 border-b-2 text-sm font-bold transition-colors ${
      active
        ? "border-primary text-primary"
        : "border-transparent text-[#617589] dark:text-gray-400 hover:text-primary"
    }`}
  >
    {label}
  </button>
);

export default FeedbackTab