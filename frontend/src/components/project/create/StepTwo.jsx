import {
  MdArrowBack,
  MdVerifiedUser,
  MdGroupAdd,
  MdPersonSearch,
  MdArrowForward,
} from "react-icons/md";

import userImage4 from "../../../assets/images/image4.png";
import userImage3 from "../../../assets/images/image3.png";

import { useProjectStore } from "../../../store/useProjectStore";
import CreateMemberRow from "./CreateMemberRow";
import CreateDeptRow from "./CreateDeptRow";
import CreatePrivacyCard from "./CreatePrivacyCard"

const StepTwo = () => {
  const store = useProjectStore();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">

      <main className="flex-1 flex flex-col items-center py-10 px-4 md:px-0">
        <div className="max-w-240 w-full flex flex-col gap-6">

          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 px-4">
            <div className="flex min-w-72 flex-col gap-1">
              <p className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                Team & Privacy
              </p>
              <p className="text-[#617589] dark:text-slate-400 text-base">
                Define project ownership and control visibility across the organization.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={store.prevCreateStep}
                className="flex min-w-21 items-center justify-center rounded-lg h-10 px-4 bg-[#f0f2f4]
                 dark:bg-slate-800 text-[#111418] dark:text-white text-sm font-bold hover:bg-slate-200 
                 transition-colors"
              >
                <MdArrowBack className="mr-2 text-lg" />
                Step 1
              </button>
            </div>
          </div>

          {/* Main Wizard Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4">

            {/* LEFT COLUMN */}
            <div className="md:col-span-8 flex flex-col gap-6">

              {/* Project Leadership */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-100
               dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <MdVerifiedUser className="text-primary text-xl" />
                  <h3 className="text-[#111418] dark:text-white text-xl font-bold">
                    Project Leadership
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="flex flex-col flex-1">
                    <p className="text-[#111418] dark:text-white text-base font-medium pb-2">
                      Assign Project Lead
                    </p>

                    <div className="relative">
                      <select
                        className="w-full appearance-none rounded-lg text-[#111418] dark:text-white
                         focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-slate-700
                          bg-white dark:bg-slate-800 h-14 p-3.75 text-base"
                      >
                        <option value="" disabled selected>
                          Search for a project lead...
                        </option>
                        <option value="1">Alex Johnson (Product Dept)</option>
                        <option value="2">Sarah Miller (Engineering)</option>
                        <option value="3">David Chen (Design Dept)</option>
                      </select>

                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center
                       px-4 text-slate-500">
                        <MdArrowForward className="rotate-90" />
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Invite Team Members */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-100
               dark:border-slate-800 shadow-sm">

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MdGroupAdd className="text-primary text-xl" />
                    <h3 className="text-[#111418] dark:text-white text-xl font-bold">
                      Invite Team Members
                    </h3>
                  </div>

                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800
                   px-2 py-1 rounded">
                    0 Selected
                  </span>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                  <div className="flex w-full items-stretch rounded-lg h-12 bg-[#f0f2f4] dark:bg-slate-800
                   border border-transparent focus-within:border-primary transition-all">
                    <div className="text-[#617589] flex items-center justify-center pl-4">
                      <MdPersonSearch className="text-xl" />
                    </div>
                    <input
                      placeholder="Search by name, email, or department..."
                      className="flex w-full bg-transparent px-4 text-[#111418] dark:text-white
                       placeholder:text-[#617589] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Suggested Members */}
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold text-[#617589] uppercase tracking-wider">
                    Suggested Members
                  </p>

                  {/* Member Row */}
                  <CreateMemberRow
                    name="Marcus Thorne"
                    role="Senior Developer • Engineering"
                    avatar={userImage3}
                  />

                  <CreateMemberRow
                    name="Elena Rodriguez"
                    role="UX Researcher • Design Dept"
                    avatar={userImage4}
                  />

                  {/* Department Row */}
                  <CreateDeptRow />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — Privacy */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <CreatePrivacyCard store={store} />
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <footer className="md:hidden sticky bottom-0 bg-white dark:bg-background-dark border-t
       border-slate-200 dark:border-slate-800 p-4 flex gap-4">
        <button
          onClick={store.prevCreateStep}
          className="flex-1 bg-slate-100 dark:bg-slate-800 py-3 rounded-lg font-bold"
        >
          Back
        </button>

        <button
          onClick={store.nextCreateStep}
          className="flex-1 bg-primary text-white py-3 rounded-lg font-bold"
        >
          Next Step
        </button>
      </footer>
    </div>
  );
};

export default StepTwo;
