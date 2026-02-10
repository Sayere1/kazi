import { FaChevronRight } from "react-icons/fa";

const IDBreadcrumbs = () => (
  <div className="flex items-center gap-2 text-sm">
    <a className="text-[#617589] dark:text-[#a0aec0] hover:text-primary" href="/teams">
      team
    </a>
    <FaChevronRight className="opacity-50 text-[#617589]" />
    <a className="text-[#617589] dark:text-[#a0aec0] hover:text-primary" href="/teams/team-list">
      list
    </a>
    <FaChevronRight className="opacity-50 text-[#617589]" />
    <span className="text-[#111418] dark:text-white font-semibold">
      Profile: John Doe
    </span>
  </div>
);

export default IDBreadcrumbs;
