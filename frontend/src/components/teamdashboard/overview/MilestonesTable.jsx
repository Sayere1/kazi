import { MdCheckCircle, MdOutlineCheckCircle, MdRateReview } from "react-icons/md";


const MilestonesTable = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between px-2 pb-3">
        <h3 className="text-lg font-bold text-[#111418] dark:text-white">
          Project Milestones
        </h3>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#dbe0e6] dark:border-gray-800 bg-white
       dark:bg-gray-900 shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#f0f2f4]/50 dark:bg-gray-800/50">
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#617589] dark:text-gray-400">
                Milestone
              </th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#617589] dark:text-gray-400">
                Status
              </th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#617589] dark:text-gray-400
               text-right">
                Progress
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#dbe0e6] dark:divide-gray-800">
            {/* Row 1 */}
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
              <td className="px-6 py-4">
                <p className="font-bold text-sm text-[#111418] dark:text-white">
                  Auditing
                </p>
                <p className="text-xs text-[#617589]">Internal Project</p>
              </td>

              <td className="px-6 py-4">
                <span className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
                  <MdOutlineCheckCircle className="text-base" />
                  On Track
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-3">
                  <div className="w-24 bg-[#f0f2f4] dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-[#111418] dark:text-white">
                    90%
                  </span>
                </div>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
              <td className="px-6 py-4">
                <p className="font-bold text-sm text-[#111418] dark:text-white">
                  Feedback Analysis
                </p>
                <p className="text-xs text-[#617589]">Quarterly Review</p>
              </td>

              <td className="px-6 py-4">
                <span className="flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 font-medium">
                  <MdRateReview className="text-base" />
                  In Review
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-3">
                  <div className="w-24 bg-[#f0f2f4] dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-[#111418] dark:text-white">
                    45%
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MilestonesTable;
