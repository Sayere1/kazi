import { useWorkflowStore } from "../../../store/useWorkflowStore";

function getPortPoint(nodeEl, portId, canvasRect) {
  const portEl = document.getElementById(portId);
  if (!portEl) return null;

  const rect = portEl.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2 - canvasRect.left,
    y: rect.top + rect.height / 2 - canvasRect.top,
  };
}

const CanvasEdges = ({ nodes, edges }) => {
  const linking = useWorkflowStore((s) => s.linking);
  const mouse = useWorkflowStore((s) => s.mouse);
  const selectedEdgeId = useWorkflowStore((s) => s.selectedEdgeId);
  const setSelectedEdge = useWorkflowStore((s) => s.setSelectedEdge);
  const deleteEdge = useWorkflowStore((s) => s.deleteEdge);

  const canvas = document.getElementById("canvas-inner");
  if (!canvas) return null;

  const canvasRect = canvas.getBoundingClientRect();

  let previewEdge = null;

  // PREVIEW EDGE drag‑to‑connect
  if (linking) {
    const sNode = nodes.find((n) => n.id === linking.sourceNodeId);
    if (sNode) {
      const sourcePortId = `port-${sNode.id}-${linking.sourcePort}`;
      const sp = getPortPoint(null, sourcePortId, canvasRect);
      if (sp) {
        const sx = sp.x;
        const sy = sp.y;
        const tx = mouse.x;
        const ty = mouse.y;

        previewEdge = (
          <path
            d={`M ${sx} ${sy} C ${sx + 80} ${sy}, ${tx - 80} ${ty}, ${tx} ${ty}`}
            stroke="#137fec"
            strokeWidth="2"
            strokeDasharray="4"
            fill="none"
          />
        );
      }
    }
  }

  const handleEdgeClick = (e, edgeId) => {
    e.stopPropagation();
    setSelectedEdge(edgeId);
  };

  const handleEdgeDoubleClick = (e, edgeId) => {
    e.stopPropagation();
    deleteEdge(edgeId);
  };

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {edges.map((e) => {
        const sNode = nodes.find((n) => n.id === e.source);
        const tNode = nodes.find((n) => n.id === e.target);
        if (!sNode || !tNode) return null;

        const sourcePortId = `port-${sNode.id}-${e.sourcePort || "out"}`;
        const targetPortId = `port-${tNode.id}-${e.targetPort || "in"}`;

        const sp = getPortPoint(null, sourcePortId, canvasRect);
        const tp = getPortPoint(null, targetPortId, canvasRect);
        if (!sp || !tp) return null;

        const sx = sp.x;
        const sy = sp.y;
        const tx = tp.x;
        const ty = tp.y;

        const mx1 = sx + 80;
        const mx2 = tx - 80;

        const isSelected = selectedEdgeId === e.id;

        return (
          <path
            key={e.id}
            d={`M ${sx} ${sy} C ${mx1} ${sy}, ${mx2} ${ty}, ${tx} ${ty}`}
            fill="none"
            stroke={isSelected ? "#f97316" : "#137fec"}
            strokeWidth={isSelected ? 3 : 2}
            className="pointer-events-auto cursor-pointer"
            onClick={(evt) => handleEdgeClick(evt, e.id)}
            onDoubleClick={(evt) => handleEdgeDoubleClick(evt, e.id)}
          />
        );
      })}

      {previewEdge}
    </svg>
  );
}

export default CanvasEdges;