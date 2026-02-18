import userImage2 from "../../../assets/images/image2.png";

const OverviewRemarks = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 
    shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Recent Kudos</h3>
        <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
          View all →
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-4 p-3 bg-primary/5 dark:bg-primary/10 rounded-lg border
         border-primary/10">
          <div
            className="size-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:`url(${userImage2})`,
            }}
          />

          <div>
            <p className="text-sm">
              <span className="font-bold">Ali Omari</span> left a shoutout
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 italic">
              "Great job on the UI kit! The documentation is top-notch."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewRemarks;
