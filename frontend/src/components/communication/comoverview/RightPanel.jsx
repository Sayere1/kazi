import { MdDescription, MdImage } from "react-icons/md";
import TaskItem from "./TaskItem";
import PinnedFile from "./PinnedFile";
import MemberItem from "./MemberItem";
import { useMemberStore } from "../../../store/message/useMemberStore";

const RightPanel = () => {
  const members = useMemberStore((s) => s.members);

  return (
    <aside className="w-80 border-l border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-background-dark hidden xl:flex flex-col overflow-y-auto no-scrollbar">

      {/* Linked Tasks */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold uppercase">Linked Tasks</h3>
          <span className="text-xs text-primary font-bold cursor-pointer">View all</span>
        </div>

        <div className="flex flex-col gap-3">
          <TaskItem
            title="Audit comapany resources"
            priority="High"
            date="Oct 24"
          />
          <TaskItem
            title="Finalize re-branding strategies"
            priority="Medium"
            date="Oct 26"
          />

          <button className="w-full py-2 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg text-xs font-bold text-gray-400 hover:text-primary hover:border-primary/50">
            + Add task to channel
          </button>
        </div>
      </div>

      {/* Pinned Files */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-800">
        <h3 className="text-sm font-bold uppercase mb-4">Pinned Files</h3>

        <PinnedFile
          icon={<MdDescription size={20} />}
          name="eco-trans_V2.pdf"
          sharedBy="@OmarionFabrizo"
          time="2d ago"
        />

        <PinnedFile
          icon={<MdImage size={20} />}
          name="rebranding.jpg"
          sharedBy="@aliomar"
          time="1w ago"
        />
      </div>

      {/* Members */}
      <div className="p-6">
        <h3 className="text-sm font-bold uppercase mb-4">Channel Members</h3>

        <div className="flex flex-col gap-3">
          {members.map((m) => (
            <MemberItem
              key={m.id}
              name={m.name}
              role={m.role}
              img={m.avatar}
              status={m.status}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightPanel;
