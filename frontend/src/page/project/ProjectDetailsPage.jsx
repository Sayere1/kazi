import {
  MdMail,
  MdAnalytics,
  MdEngineering,
  MdEvent,
  MdDescription,
  MdFolderOpen,
  MdPictureAsPdf,
  MdImage,
  MdInsertDriveFile,
  MdVerified,
  MdInfo
} from "react-icons/md";

import ProjectItem from "../../components/project/prodetails/ProjectItems";
import ApprovalCard from "../../components/project/prodetails/ApprovalCard";

const ProjectDetailsPage = () => {
  return (
    <div className="space-y-10">

      {/* Page Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
            Project: Q4 Infrastructure Upgrade
          </h1>
          <p className="text-[#617589] dark:text-slate-400 text-base font-normal">
            Global Systems Implementation • Enterprise Tier
          </p>
        </div>

        <button className="flex min-w-45 items-center justify-center gap-2 rounded-lg h-12 px-6
         bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-all">
          <MdMail className="text-lg" />
          <span className="truncate">Contact Project Manager</span>
        </button>
      </div>

      {/* High-Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Progress */}
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border
         border-[#dbe0e6] dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-[#617589] dark:text-slate-400 text-sm font-medium">Total Progress</p>
            <MdAnalytics className="text-primary text-xl" />
          </div>
          <p className="text-[#111418] dark:text-white text-3xl font-bold">74%</p>
          <p className="text-[#078838] text-sm font-semibold flex items-center gap-1">
            <span className="text-[16px]">▲</span> +12% from last week
          </p>
        </div>

        {/* Current Phase */}
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border
         border-[#dbe0e6] dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-[#617589] dark:text-slate-400 text-sm font-medium">Current Phase</p>
            <MdEngineering className="text-primary text-xl" />
          </div>
          <p className="text-[#111418] dark:text-white text-3xl font-bold">Development</p>
          <p className="text-primary text-sm font-semibold">Active: Sprint 14/20</p>
        </div>

        {/* Next Milestone */}
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border
         border-[#dbe0e6] dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-[#617589] dark:text-slate-400 text-sm font-medium">Next Milestone</p>
            <MdEvent className="text-primary text-xl" />
          </div>
          <p className="text-[#111418] dark:text-white text-3xl font-bold">Final QA Review</p>
          <p className="text-[#617589] dark:text-slate-400 text-sm font-medium">Due in 150 days (Dec 22)</p>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-[#dbe0e6]
       dark:border-slate-800 shadow-sm">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <p className="text-[#111418] dark:text-white text-base font-bold">Overall Project Completion</p>
            <p className="text-[#111418] dark:text-white text-base font-bold">74%</p>
          </div>

          <div className="h-3 rounded-full bg-[#dbe0e6] dark:bg-slate-800 overflow-hidden">
            <div className="h-full rounded-full bg-primary" style={{ width: "74%" }}></div>
          </div>

          <p className="text-[#617589] dark:text-slate-400 text-sm">
            On track for December 10th completion. Currently in the optimization phase.
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">

          {/* Executive Summary */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <MdDescription className="text-primary text-xl" />
              <h2 className="text-[#111418] dark:text-white text-xl font-bold">Executive Summary</h2>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#dbe0e6]
             dark:border-slate-800 shadow-sm">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Sustainable logistics focuses on reducing environmental impact through smart design.
                Electric vehicles and optimized routes lower emissions in transportation.
                Warehouses powered by solar <strong>energy enhance operational efficiency</strong>.
                Circular supply chains promote recycling, reuse, and resource conservation
              </p>
            </div>
          </section>
          {/* Latest Shared Files */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MdFolderOpen className="text-primary text-xl" />
                <h2 className="text-[#111418] dark:text-white text-xl font-bold">Latest Shared Files</h2>
              </div>
              <button className="text-primary text-sm font-bold hover:underline">View All Files</button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-[#dbe0e6]
             dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="divide-y divide-[#f0f2f4] dark:divide-slate-800">

                {/* File Item */}
                <ProjectItem
                  icon={<MdPictureAsPdf />}
                  color="text-red-600"
                  bg="bg-red-100 dark:bg-red-900/30"
                  name="Eco-Guildline_V2.pdf"
                  meta="Shared 2 hours ago • 2.4 MB"
                />

                <ProjectItem
                  icon={<MdImage />}
                  color="text-blue-600"
                  bg="bg-blue-100 dark:bg-blue-900/30"
                  name="Marketing_strategies.png"
                  meta="Shared Yesterday • 12.8 MB"
                />

                <ProjectItem
                  icon={<MdInsertDriveFile />}
                  color="text-green-600"
                  bg="bg-green-100 dark:bg-green-900/30"
                  name="Departmental_audting.docx"
                  meta="Shared 3 days ago • 450 KB"
                />

              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Approvals */}
        <aside className="space-y-4">

          <div className="flex items-center gap-2 mb-4">
            <MdVerified className="text-primary text-xl" />
            <h2 className="text-[#111418] dark:text-white text-xl font-bold">Pending Approvals</h2>
          </div>

          {/* Approval Card */}
          <ApprovalCard
            priority="High Priority"
            due="Due in 30 days"
            title="Phase 2: Departmental audting sign off"
            description="Please review the updated audits and approve for the implementation phase."
            highlight
          />

          <ApprovalCard
            priority="Standard"
            due="Due in 5 days"
            title="User Training Schedule"
            description="Proposed timeline for staff orientation sessions across the region."
          />

          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 flex items-center gap-3">
            <MdInfo className="text-primary text-xl" />
            <p className="text-xs text-primary font-medium">
              All internal tasks are managed by KaziHub team. This dashboard shows high-level deliverables only.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};


export default ProjectDetailsPage;
