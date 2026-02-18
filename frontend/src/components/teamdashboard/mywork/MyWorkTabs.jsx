import { useTasksStore } from "../../../store/useTasksStore";

const tabs = [
  { id: "dueDate", label: "Due Date" },
  { id: "project", label: "Project" },
  { id: "status", label: "Status" },
];

const MyWorkTabs = () => {
  const activeTab = useTasksStore((s) => s.activeTab);
  const setActiveTab = useTasksStore((s) => s.setActiveTab);

  return (
    <div className="px-6 mt-4">
      <div className="flex items-center border-b border-[#dbe0e6] dark:border-[#2d3748] gap-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 pb-3.25 pt-4 border-b-[3px] ${
                isActive
                  ? "border-primary text-primary"
                  : "border-transparent text-[#617589] hover:text-[#111418]"
              } text-sm font-bold`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorkTabs;
