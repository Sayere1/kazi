import TActivityItem from "./TActivityItem";

const TRecentActivity = () => {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-[#f0f2f4]
     dark:border-slate-800 overflow-hidden">
      <div className="px-6 py-4 border-b border-[#f0f2f4] dark:border-slate-800">
        <h2 className="text-lg font-bold text-[#111418] dark:text-white">
          Recent Activity
        </h2>
      </div>

      <div className="p-6 space-y-6">
        <TActivityItem
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
          icon="💬"
          user="Omarion Fabrizo"
          action="commented on"
          target="Design Specs"
          message="I think drivers need to be around pickup point."
          time="10:45 AM"
        />

        <TActivityItem
          iconBg="bg-green-100"
          iconColor="text-green-600"
          icon="✔️"
          user="You"
          action="completed the task"
          target="Auditing Docs"
          time="9:12 AM"
        />

        <TActivityItem
          iconBg="bg-purple-100"
          iconColor="text-purple-600"
          icon="➕"
          user="Shumacker James."
          action="added you to"
          target="New Client Onboarding"
          time="Yesterday"
        />
      </div>
    </section>
  );
};

export default TRecentActivity;
