import { MdDownload  } from "react-icons/md";

const ProjectItem = ({ icon, color, bg, name, meta }) => (
  <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
    <div className="flex items-center gap-3">
      <div className={`size-10 rounded flex items-center justify-center ${bg} ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold dark:text-white">{name}</p>
        <p className="text-xs text-[#617589]">{meta}</p>
      </div>
    </div>
    <button className="p-2 text-slate-400 hover:text-primary">
      <MdDownload />
    </button>
  </div>
);

export default ProjectItem