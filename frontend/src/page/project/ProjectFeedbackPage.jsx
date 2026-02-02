import {
  MdBrandingWatermark,
  MdDashboard,
  MdFactCheck,
  MdForum,
  MdFolderOpen,
  MdInfo,
  MdDownload,
  MdAutoStories,
  MdViewQuilt,
  MdCategory,
  MdCloudUpload,
} from "react-icons/md";

import FeedbackNavItem from "../../components/project/feedback/FeedbackNavItem";
import DeliverableCard from "../../components/project/feedback/DeliverableCard";
import FeedbackTab from "../../components/project/feedback/FeedbackTab";
import FeedbackPanel from "../../components/project/feedback/FeedbackPanel";

const ProjectFeedbackPage = () => {
  return (
    <div className="space-y-10">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT COLUMN */}
        <div className="w-full lg:w-72 shrink-0 space-y-6">

          {/* Project Summary Card */}
          <div className="bg-white dark:bg-white/5 rounded-xl p-5 shadow-sm border border-[#f0f2f4] dark:border-white/10">
            <div className="flex gap-3 mb-6">
              <div className="bg-primary/10 rounded-lg size-12 flex items-center justify-center text-primary">
                <MdBrandingWatermark className="text-2xl" />
              </div>

              <div className="flex flex-col">
                <h1 className="text-[#111418] dark:text-white text-base font-bold">
                  Q4 Brand Refresh
                </h1>
                <p className="text-[#617589] dark:text-gray-400 text-xs">
                  Project ID: #12345
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              <FeedbackNavItem icon={<MdDashboard />} label="Overview" active={false} />
              <FeedbackNavItem icon={<MdFactCheck />} label="Deliverables" active />
              <FeedbackNavItem icon={<MdForum />} label="Messages" />
              <FeedbackNavItem icon={<MdFolderOpen />} label="Files" />
            </nav>
          </div>

          {/* Progress Card */}
          <div className="bg-white dark:bg-white/5 rounded-xl p-5 shadow-sm border border-[#f0f2f4] dark:border-white/10">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold text-[#111418] dark:text-white">
                  Project Progress
                </p>
                <p className="text-primary text-xs font-bold">65%</p>
              </div>

              <div className="h-2 rounded-full bg-[#dbe0e6] dark:bg-white/10 overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "65%" }}></div>
              </div>

              <p className="text-[#617589] dark:text-gray-400 text-xs flex items-center gap-1">
                <MdInfo className="text-[14px]" />
                3 deliverables pending review
              </p>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN */}
        <section className="flex-1 space-y-6">

          {/* Page Heading */}
          <div className="flex flex-wrap items-end justify-between gap-4 px-1">
            <div className="space-y-1">
              <h1 className="text-[#111418] dark:text-white text-3xl font-black tracking-tight">
                Deliverables & Feedback
              </h1>
              <p className="text-[#617589] dark:text-gray-400 text-sm">
                Review and approve assets for the Q4 Brand Refresh project.
              </p>
            </div>

            <button className="flex items-center gap-2 px-4 h-10 bg-white dark:bg-white/5 border border-[#dbe0e6] dark:border-white/10 rounded-lg text-sm font-bold shadow-sm hover:bg-[#f0f2f4] dark:hover:bg-white/10">
              <MdDownload className="text-lg" />
              Export All Files
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b border-[#dbe0e6] dark:border-white/10 flex gap-8">
            <FeedbackTab label="All (8)" />
            <FeedbackTab  label="Ready for Review (3)" active />
            <FeedbackTab  label="Approved (5)" />
          </div>

          {/* Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Card 1 */}
            <DeliverableCard
              icon={<MdAutoStories className="text-3xl" />}
              title="Eco Guidelines v2"
              subtitle="Updated primary guildline for eco-friendly deliveries"
              size="12.4 MB"
              time="2 days ago"
              status="Ready for Review"
              statusColor="text-primary bg-primary/10"
              border="border-primary"
              active
            />

            {/* Card 2 */}
            <DeliverableCard
              icon={<MdViewQuilt className="text-3xl text-purple-600" />}
              title="Marketing strategies"
              subtitle="Comprehensive assessment"
              size="External Link"
              time="5 days ago"
              status="In Revision"
              statusColor="bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
            />

            {/* Card 3 */}
            <DeliverableCard
              icon={<MdCategory className="text-3xl text-green-600" />}
              title="Departmental audting"
              subtitle="reallocating of resources"
              size="8.2 MB"
              time="Approved Sep 12"
              status="Approved"
              statusColor="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
              faded
            />

            {/* Upload Placeholder */}
            <div className="group bg-[#f8fafc] dark:bg-white/5 border border-dashed border-[#dbe0e6] dark:border-white/10 rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2">
              <MdCloudUpload className="text-gray-400 text-4xl" />
              <p className="text-[#617589] dark:text-gray-400 text-xs">
                Upload new draft (internal only)
              </p>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN Feedback Panel */}
        <FeedbackPanel />
      </div>
    </div>
  );
};

export default ProjectFeedbackPage;

