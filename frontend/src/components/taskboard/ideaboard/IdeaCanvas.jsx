import { useEffect } from "react";
import { useDroppable } from "@dnd-kit/core";

import CanvasEdges from "./CanvasEdges";
import CanvasNode from "./CanvasNode";
import IdeaToolbar from "./ideaToolbar";
import MiniMap from "./MiniMap";

import { useWorkflowStore } from "../../../store/useWorkflowStore";

const IdeaCanvas = () => {
  const { setNodeRef } = useDroppable({ id: "canvas" });
  const nodes = useWorkflowStore((s) => s.nodes);
  const edges = useWorkflowStore((s) => s.edges);
  const zoom = useWorkflowStore((s) => s.zoom);

  const setMouse = useWorkflowStore((s) => s.setMouse);

  useEffect(() => {
    const handleMove = (e) => {
      const canvas = document.getElementById("canvas-inner");
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [setMouse]);


  return (
    <main
      ref={setNodeRef}
      className="flex-1 relative bg-white dark:bg-gray-950 overflow-hidden"
    >
      <IdeaToolbar />
      <div
        id="canvas-inner"
        className="w-full h-full relative origin-top-left"
        style={{ transform: `scale(${zoom})` }}
      >
        <CanvasEdges nodes={nodes} edges={edges} />
        {nodes.map((node) => (
          <CanvasNode key={node.id} node={node} />
        ))}
      </div>
      <MiniMap nodes={nodes} />
    </main>
  );
}

export default IdeaCanvas;