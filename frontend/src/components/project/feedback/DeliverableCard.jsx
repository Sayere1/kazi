import { MdAttachment, MdSchedule } from "react-icons/md";

const DeliverableCard = ({
  icon,
  title,
  subtitle,
  size,
  time,
  status,
  statusColor,
  border,
  active,
  faded,
}) => (
  <div
    className={`group rounded-xl p-5 shadow-sm transition-all cursor-pointer relative ${
      active
        ? "bg-white dark:bg-white/5 border-2 border-primary shadow-md"
        : faded
        ? "bg-white dark:bg-white/5 border border-[#f0f2f4] dark:border-white/10 opacity-75 grayscale hover:grayscale-0"
        : "bg-white dark:bg-white/5 border border-[#f0f2f4] dark:border-white/10 hover:shadow-md"
    }`}
  >
    <div className="absolute top-4 right-4">
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${statusColor}`}
      >
        {status}
      </span>
    </div>

    <div className="flex flex-col gap-4">
      <div className="size-12 bg-[#f0f7ff] dark:bg-primary/20 rounded-lg flex items-center justify-center text-primary">
        {icon}
      </div>

      <div>
        <h3 className="text-[#111418] dark:text-white text-base font-bold">{title}</h3>
        <p className="text-[#617589] dark:text-gray-400 text-xs mb-3">{subtitle}</p>

        <div className="flex items-center gap-4 text-[11px] text-[#617589] dark:text-gray-500 font-medium">
          <span className="flex items-center gap-1">
            <MdAttachment className="text-[14px]" /> {size}
          </span>
          <span className="flex items-center gap-1">
            <MdSchedule className="text-[14px]" /> {time}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default DeliverableCard