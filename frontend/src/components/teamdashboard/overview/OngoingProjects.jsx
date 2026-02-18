import { FiGrid, FiList } from "react-icons/fi";

import userImage2 from "../../../assets/images/image2.png";
import userImage3 from "../../../assets/images/image3.png";
import userImage4 from "../../../assets/images/image4.png";


const OngoingProjects = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-2xl font-bold">Active Projects</h2>

        <div className="flex gap-2">
          <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <FiGrid />
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <FiList />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Card 1 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 
        overflow-hidden group hover:border-primary transition-colors cursor-pointer">
          <div className="h-24 w-full bg-linear-to-r from-primary to-blue-400 relative">
            <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full
             text-xs font-bold uppercase">
              In Progress
            </span>
          </div>

          <div className="p-5 flex flex-col gap-4">
            <div>
              <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                Marketing: Finalize Q4 Marketing Plan
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Contributor • Marketing Team
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-sm">Development phase</span>
                <span className="text-sm font-bold text-primary">75%</span>
              </div>

              <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "75%" }}></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
              <div className="flex -space-x-2">
                <div
                  className="size-7 rounded-full border-2 border-white dark:border-gray-900 bg-cover bg-center"
                  style={{
                   backgroundImage:`url(${userImage2})`,
                  }}
                />

                <div
                  className="size-7 rounded-full border-2 border-white dark:border-gray-900 bg-cover bg-center"
                  style={{
                    backgroundImage:`url(${userImage3})`,
                  }}
                />

                <div className="size-7 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200 flex
                 items-center justify-center text-[10px] font-bold">
                  +4
                </div>
              </div>

              <span className="text-xs text-gray-500 dark:text-gray-400">
                Due in 12 days
              </span>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 
        overflow-hidden group hover:border-primary transition-colors cursor-pointer">
          <div className="h-24 w-full bg-linear-to-r from-purple-500 to-primary relative">
            <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full 
            text-xs font-bold uppercase">
              Planning
            </span>
          </div>

          <div className="p-5 flex flex-col gap-4">
            <div>
              <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                Eco transportation: Redesigning v2
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Contributor • Branding
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-sm">Auditing</span>
                <span className="text-sm font-bold text-primary">20%</span>
              </div>

              <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "20%" }}></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
              <div className="flex -space-x-2">
                <div
                  className="size-7 rounded-full border-2 border-white dark:border-gray-900 bg-cover bg-center"
                  style={{
                    backgroundImage:`url(${userImage4})`,
                  }}
                />

                <div className="size-7 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200 
                flex items-center justify-center text-[10px] font-bold">
                  +2
                </div>
              </div>

              <span className="text-xs text-gray-500 dark:text-gray-400">
                Due in 34 days
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;
