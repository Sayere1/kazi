import {
  MdCalendarToday,
  MdFlag,
  MdDashboardCustomize,
  MdViewKanban,
  MdReorder,
  MdInfo,
  MdAutorenew
} from "react-icons/md";

import { useProjectStore } from "../../../store/useProjectStore";

import CreateTemplateCard from "./CreateTemplateCard";
import CreateMilestoneRow from "./CreateMilestoneRow";

const StepThree = () => {

  const store = useProjectStore();
  const { milestones, addMilestone, updateMilestone, removeMilestone } = store;
  const { selectedTemplate, setTemplate } = store;


  return (
    <main className="max-w-250 mx-auto py-12 px-6">

      {/* MAIN CARD */}
      <div className="">

        <div className="p-10 space-y-12">

          {/* PROJECT TIMELINE */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <MdCalendarToday className="text-primary text-xl" />
              <h2 className="text-xl font-bold">Project Timeline</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Start Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#617589] dark:text-[#a0acb9]">
                  Start Date
                </label>
                <input
                  type="date"
                  defaultValue="2023-11-01"
                  className="w-full rounded-lg border-[#dbe0e6] dark:border-[#2d394a] bg-background-light
                   dark:bg-background-dark px-4 py-3 focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Estimated Completion */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#617589] dark:text-[#a0acb9]">
                  Estimated Completion
                </label>
                <input
                  type="date"
                  defaultValue="2024-05-30"
                  className="w-full rounded-lg border-[#dbe0e6] dark:border-[#2d394a] bg-background-light 
                  dark:bg-background-dark px-4 py-3 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* INITIAL MILESTONES */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <MdFlag className="text-primary text-xl" />
                <h2 className="text-xl font-bold">Initial Milestones</h2>
              </div>

              <button className="flex items-center gap-2 text-primary font-semibold hover:underline">
                <MdAutorenew className="text-lg" />
                Add Milestone
              </button>
            </div>

            <div className="space-y-3">
              {milestones.map((m) => (
                <CreateMilestoneRow
                  key={m.id}
                  id={m.id}
                  title={m.title}
                  date={m.date}
                  onChange={updateMilestone}
                  onRemove={removeMilestone}
                />
              ))}

              <button
                onClick={addMilestone}
                className="flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <MdAutorenew className="text-lg" />
                Add Milestone
              </button>
            </div>

          </section>

          {/* PROJECT TEMPLATE */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <MdDashboardCustomize className="text-primary text-xl" />
              <h2 className="text-xl font-bold">Select Project Template</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Kanban */}

              <CreateTemplateCard
                icon={<MdViewKanban className="text-4xl" />}
                title="Kanban"
                template="kanban"
                active={selectedTemplate === "kanban"}
                onSelect={setTemplate}
                description="Continuous flow for teams focusing on task movement and visibility."
              />

              {/* Gantt */}

              <CreateTemplateCard
                icon={<MdReorder className="text-4xl" />}
                title="Gantt Chart"
                template="gantt"
                active={selectedTemplate === "gantt"}
                onSelect={setTemplate}
                description="Best for milestone-heavy projects with strict deadlines and dependencies."
              />

              {/* Agile */}

              <CreateTemplateCard
                icon={<MdAutorenew className="text-4xl" />}
                title="Agile (Scrum)"
                template="agile"
                active={selectedTemplate === "agile"}
                onSelect={setTemplate}
                description="Sprint-based management for iterative development and fast delivery."
              />
            </div>
          </section>
        </div>
      </div>

      {/* HELP SECTION */}
      <div className="mt-8 p-4 bg-primary/10 rounded-lg flex items-start gap-4 border border-primary/20">
        <MdInfo className="text-primary mt-1" />
        <div>
          <p className="text-sm font-semibold text-primary">Need help deciding?</p>
          <p className="text-sm text-[#617589] dark:text-[#a0acb9]">
            You can always change your workspace layout later in the Project Settings.
            All your data will be preserved across different views.
          </p>
        </div>
      </div>
    </main>
  );
};

export default StepThree;
