import { MdTag } from "react-icons/md";

const CommunicationSidebar = ({ label, active = false, badge }) => {
  return (
    <a
      className={`flex items-center gap-3 px-3 py-2 rounded-lg group ${
        active
          ? "bg-primary/10 text-primary border border-primary/20"
          : "hover:bg-[#f0f2f4] dark:hover:bg-gray-800"
      }`}
      href="#"
    >
      <MdTag
        size={20}
        className={`${active ? "text-primary" : "text-gray-400 group-hover:text-primary"}`}
      />
      <span className={`text-sm font-${active ? "bold" : "medium"}`}>
        {label}
      </span>

      {badge && (
        <span className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </a>
  );
};

export default CommunicationSidebar;
