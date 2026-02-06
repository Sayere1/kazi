import { useDraggable } from "@dnd-kit/core";
import {
  MdBolt,
  MdSchedule,
  MdMail,
  MdAddTask,
  MdCallSplit,
} from "react-icons/md";

const LIBRARY_ITEMS = [
  {
    id: "lib-trigger-status",
    type: "trigger",
    label: "Status Change",
    subtitle: "When a task is updated",
    icon: MdBolt,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: "lib-trigger-scheduled",
    type: "trigger-scheduled",
    label: "Scheduled",
    subtitle: "Recurring time or date",
    icon: MdSchedule,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "lib-action-email",
    type: "action-email",
    label: "Send Email",
    subtitle: "Custom notification",
    icon: MdMail,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "lib-action-task",
    type: "action-task",
    label: "Create Task",
    subtitle: "Add a sub-task",
    icon: MdAddTask,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    id: "lib-urgent-task",
    type: "urgent-import",
    label: "Urgent",
    subtitle: "Execute as seen",
    icon: MdCallSplit,
    color: "bg-purple-100 text-purple-600",
  },
];

function LibraryItem({ item }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: item.id,
    data: { ...item, fromLibrary: true },
  });

  const Icon = item.icon;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="flex items-center gap-3 p-3 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors cursor-grab active:cursor-grabbing"
    >
      <div className={`${item.color} p-1.5 rounded-lg`}>
        <Icon />
      </div>
      <div>
        <p className="text-sm font-medium">{item.label}</p>
        <p className="text-[11px] text-gray-500 leading-tight">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function SideLibrary() {
  return (
    <aside className="w-72 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col overflow-y-auto shrink-0">
      <div className="p-5 flex flex-col gap-6">
        <div>
          <h1 className="text-base font-bold">Library</h1>
          <p className="text-gray-500 text-xs">Drag elements to the canvas</p>
        </div>

        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
            Triggers
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {LIBRARY_ITEMS.slice(0, 2).map((item) => (
              <LibraryItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
            Actions
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {LIBRARY_ITEMS.slice(2, 4).map((item) => (
              <LibraryItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3">
            Crucial
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {LIBRARY_ITEMS.slice(4).map((item) => (
              <LibraryItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
