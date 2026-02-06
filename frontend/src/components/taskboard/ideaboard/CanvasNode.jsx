import {
  MdBolt,
  MdMail,
  MdAddTask,
  MdCallSplit,
  MdSchedule,
} from "react-icons/md";
import { useDraggable } from "@dnd-kit/core";
import clsx from "clsx";

import { useWorkflowStore } from "../../../store/useWorkflowStore";

const typeConfig = {
  "trigger": {
    badge: "Trigger",
    badgeColor: "text-amber-600",
    iconBg: "bg-amber-100 text-amber-600",
    icon: MdBolt,
    border: "border-primary ring-primary/5",
  },
  "trigger-scheduled": {
    badge: "Trigger",
    badgeColor: "text-blue-600",
    iconBg: "bg-blue-100 text-blue-600",
    icon: MdSchedule,
    border: "border-primary ring-primary/5",
  },
  "action-email": {
    badge: "Action",
    badgeColor: "text-green-600",
    iconBg: "bg-green-100 text-green-600",
    icon: MdMail,
    border: "border-gray-200",
  },
  "action-task": {
    badge: "Action",
    badgeColor: "text-indigo-600",
    iconBg: "bg-indigo-100 text-indigo-600",
    icon: MdAddTask,
    border: "border-gray-200",
  },
  "urgent-import": {
    badge: "Logic",
    badgeColor: "text-purple-600",
    iconBg: "bg-purple-100 text-purple-600",
    icon: MdCallSplit,
    border: "border-gray-200",
  },
};

const CanvasNode = ({ node }) => {
  const setSelectedNode = useWorkflowStore((s) => s.setSelectedNode);
  const selectedNodeId = useWorkflowStore((s) => s.selectedNodeId);

  const startLinking = useWorkflowStore((s) => s.startLinking);
  const finishLinking = useWorkflowStore((s) => s.finishLinking);
  const linking = useWorkflowStore((s) => s.linking);

  const { setNodeRef, listeners, attributes } = useDraggable({
    id: node.id,
    data: { nodeId: node.id },
  });

  const cfg = typeConfig[node.type] || typeConfig["action-task"];
  const Icon = cfg.icon;
  const isSelected = selectedNodeId === node.id;

  const handleMouseDownNode = () => {
    setSelectedNode(node.id);
  };

  const isLinkingFromThis = linking?.sourceNodeId === node.id;

  return (
    <div
      id={`node-${node.id}`}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onMouseDown={handleMouseDownNode}
      className={clsx(
        "absolute w-56 bg-white dark:bg-gray-900 rounded-xl shadow-lg border p-4 cursor-pointer transition-all",
        isSelected ? "ring-4 ring-primary/20" : "",
        cfg.border
      )}
      style={{
        left: node.position.x,
        top: node.position.y,
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`${cfg.iconBg} p-1.5 rounded-lg shrink-0`}>
          <Icon />
        </div>
        <div className="flex-1">
          <p
            className={clsx(
              "text-[10px] font-bold uppercase tracking-wider",
              cfg.badgeColor
            )}
          >
            {cfg.badge}
          </p>
          <p className="text-sm font-bold truncate">{node.label}</p>
        </div>
        <span className="text-gray-300 text-xl">⋮</span>
      </div>

      {node.subtitle && (
        <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-[11px] text-gray-600
         dark:text-gray-400 border border-gray-100 dark:border-gray-700">
          {node.subtitle}
        </div>
      )}

      {/* IN PORT left center */}
      <button
        id={`port-${node.id}-in`}
        className={clsx(
          "absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white",
          linking && !isLinkingFromThis ? "bg-primary/60" : "bg-gray-300"
        )}
        onMouseUp={(e) => {
          e.stopPropagation();
          if (linking && !isLinkingFromThis) {
            finishLinking(node.id, "in");
          }
        }}
      />

      {/* OUT PORT right center */}
      <button
        id={`port-${node.id}-out`}
        className={clsx(
          "absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white",
          isLinkingFromThis && linking?.sourcePort === "out"
            ? "bg-primary"
            : "bg-primary/80"
        )}
        onMouseDown={(e) => {
          e.stopPropagation();
          startLinking(node.id, "out");
        }}
      />

      {/* YES / NO ports for branching bottom left/right */}
      {node.type === "urgent-import" && (
        <>
          <button
            id={`port-${node.id}-yes`}
            className={clsx(
              "absolute -bottom-1.5 left-[20%] w-3 h-3 rounded-full border-2 border-white",
              isLinkingFromThis && linking?.sourcePort === "yes"
                ? "bg-emerald-500"
                : "bg-emerald-400"
            )}
            onMouseDown={(e) => {
              e.stopPropagation();
              startLinking(node.id, "yes");
            }}
          />
          <button
            id={`port-${node.id}-no`}
            className={clsx(
              "absolute -bottom-1.5 right-[20%] w-3 h-3 rounded-full border-2 border-white",
              isLinkingFromThis && linking?.sourcePort === "no"
                ? "bg-rose-500"
                : "bg-rose-400"
            )}
            onMouseDown={(e) => {
              e.stopPropagation();
              startLinking(node.id, "no");
            }}
          />
        </>
      )}
    </div>
  );
}

export default CanvasNode;