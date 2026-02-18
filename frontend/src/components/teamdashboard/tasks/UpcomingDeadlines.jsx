import { FiCalendar } from "react-icons/fi";
import DeadlineItem from "./DeadlineItem";

const UpcomingDeadlines = () => {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-[#f0f2f4]
     dark:border-slate-800">
      <div className="px-6 py-4 border-b border-[#f0f2f4] dark:border-slate-800 flex justify-between items-center">
        <h2 className="text-lg font-bold text-[#111418] dark:text-white">
          Upcoming Deadlines
        </h2>
        <FiCalendar className="text-[#617589] text-xl cursor-pointer" />
      </div>

      <div className="p-4 space-y-3">
        <DeadlineItem
          month="Oct"
          day="24"
          title="Final Brand Guidelines"
          status="Due Tomorrow"
          statusColor="text-red-600"
          borderColor="border-red-100 dark:border-red-900/30"
          bgColor="bg-red-50/30 dark:bg-red-900/10"
        />

        <DeadlineItem
          month="Oct"
          day="27"
          title="User Feedback Report"
          status="In 4 days"
        />

        <DeadlineItem
          month="Nov"
          day="02"
          title="Sprint 8 Planning"
          status="Next week"
        />
      </div>
    </section>
  );
};

export default UpcomingDeadlines;
