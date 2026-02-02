import useProjectSelection from "../../store/useProjectSelection";

const ProjectProgressModal = () => {
  const { progressModal, closeProgressModal } = useProjectSelection();
  const project = progressModal.project;

  {/* Derived Metrics */ }
  const tasksRemaining = project.tasksTotal - project.tasksCompleted;

  const daysLeft = (() => {
    const now = new Date();
    const deadline = new Date(project.deadline);
    const diff = deadline - now;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  })();

  const progressPercent = Math.round(
    (project.tasksCompleted / project.tasksTotal) * 100
  );

  {/*  Status Logic */ }
  let status = "On Track";
  let statusColor = "text-emerald-600";

  if (daysLeft < 0) {
    status = "Past Deadline";
    statusColor = "text-red-600";
  } else if (tasksRemaining > 0 && daysLeft <= 3) {
    status = "At Risk";
    statusColor = "text-amber-600";
  } else if (progressPercent < 50 && daysLeft < 10) {
    status = "Behind Schedule";
    statusColor = "text-red-600";
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1a2632] rounded-xl p-6 w-105 shadow-xl border
       border-[#dbe0e6] dark:border-[#2d3a49]">

        {/* Header */}
        <h2 className="text-lg font-bold">{project.name}</h2>
        <p className="text-sm text-[#617589] mb-4">{project.code}</p>

        {/* Status */}
        <div className="mb-4">
          <p className="text-sm font-semibold">Project Status</p>
          <p className={`text-base font-bold ${statusColor}`}>{status}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-1">Overall Progress</p>
          <div className="w-full bg-[#f0f2f4] dark:bg-[#2d3a49] h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-xs mt-1 font-semibold">{progressPercent}% complete</p>
        </div>

        {/* Task Breakdown */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-3 rounded-lg bg-[#f8f9fa] dark:bg-[#2d3a49]">
            <p className="text-xs text-[#617589]">Tasks Completed</p>
            <p className="text-lg font-bold">{project.tasksCompleted}</p>
            <p className="text-[10px] text-[#617589]">{project.timeSpent} hrs spent</p>
          </div>

          <div className="p-3 rounded-lg bg-[#f8f9fa] dark:bg-[#2d3a49]">
            <p className="text-xs text-[#617589]">Tasks Remaining</p>
            <p className="text-lg font-bold">{tasksRemaining}</p>
            <p className="text-[10px] text-[#617589]">{daysLeft} days left</p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={closeProgressModal}
          className="w-full py-2 rounded-lg bg-primary text-white font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectProgressModal;
