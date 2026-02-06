import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { temporal } from "zundo";
import { nanoid } from "nanoid";

/* -------------------------------------------------------
   INITIAL WORKFLOW STATE (Undoable)
------------------------------------------------------- */
const initialNodes = [
  {
    id: "trigger-1",
    type: "trigger",
    label: "Status Changed",
    subtitle: "When Task Status is Done",
    position: { x: 100, y: 160 },
    meta: {
      status: "Done",
      title: "Status Changed",
      assignedStaff: ["All Staff"],
    },
  },
  {
    id: "action-1",
    type: "action-email",
    label: "Send Email",
    subtitle: "Notify project manager about task completion.",
    position: { x: 440, y: 60 },
  },
  {
    id: "action-2",
    type: "action-task",
    label: "Create Task",
    subtitle: 'Create "Performance Review" for the assignee.',
    position: { x: 440, y: 260 },
  },
];

const initialEdges = [
  {
    id: "e1",
    source: "trigger-1",
    sourcePort: "out",
    target: "action-1",
    targetPort: "in",
  },
  {
    id: "e2",
    source: "trigger-1",
    sourcePort: "out",
    target: "action-2",
    targetPort: "in",
  },
];

/* -------------------------------------------------------
   TEMPORAL (UNDOABLE) STATE
------------------------------------------------------- */
const createTemporalState = (set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  selectedNodeId: null,
  selectedEdgeId: null,
  zoom: 1,

  setSelectedNode: (id) => set({ selectedNodeId: id }),

  addNodeFromLibrary: (item, position) =>
    set((state) => ({
      nodes: [
        ...state.nodes,
        {
          id: nanoid(),
          type: item.type,
          label: item.label,
          subtitle: item.subtitle || "",
          position,
          meta: item.meta || {},
        },
      ],
    })),

  updateNode: (id, updates) =>
    set((state) => ({
      nodes: state.nodes.map((n) =>
        n.id === id
          ? { ...n, ...updates, meta: { ...n.meta, ...(updates.meta || {}) } }
          : n
      ),
    })),

  moveNode: (id, delta) =>
    set((state) => ({
      nodes: state.nodes.map((n) =>
        n.id === id
          ? {
              ...n,
              position: {
                x: n.position.x + delta.x,
                y: n.position.y + delta.y,
              },
            }
          : n
      ),
    })),

  addEdge: (edge) =>
    set((state) => ({
      edges: [...state.edges, edge],
    })),

  setSelectedEdge: (id) => set({ selectedEdgeId: id }),

  deleteEdge: (id) =>
    set((state) => ({
      edges: state.edges.filter((e) => e.id !== id),
      selectedEdgeId: state.selectedEdgeId === id ? null : state.selectedEdgeId,
    })),

  setLayout: (nodes) => set({ nodes }),
  setZoom: (zoom) => set({ zoom }),
});

/* -------------------------------------------------------
   NON‑TEMPORAL (UI) STATE — NOT UNDOABLE
------------------------------------------------------- */
const createUIState = (set, get) => ({
  mouse: { x: 0, y: 0 },
  setMouse: (pos) => set({ mouse: pos }),

  dragDeltas: {},
  setDragDelta: (id, delta) =>
    set((state) => ({
      dragDeltas: { ...state.dragDeltas, [id]: delta },
    })),
  clearDragDelta: (id) =>
    set((state) => {
      const copy = { ...state.dragDeltas };
      delete copy[id];
      return { dragDeltas: copy };
    }),

  linking: null,

  startLinking: (nodeId, port) =>
    set({
      linking: {
        sourceNodeId: nodeId,
        sourcePort: port,
      },
    }),

  finishLinking: (targetNodeId, targetPort) =>
    set((state) => {
      if (!state.linking) return state;

      const { sourceNodeId, sourcePort } = state.linking;

      if (sourceNodeId === targetNodeId && sourcePort === targetPort) {
        return { linking: null };
      }

      const newEdge = {
        id: nanoid(),
        source: sourceNodeId,
        sourcePort,
        target: targetNodeId,
        targetPort,
        type: "default",
      };

      return {
        edges: [...state.edges, newEdge],
        linking: null,
      };
    }),

  cancelLinking: () => set({ linking: null }),
});

/* -------------------------------------------------------
   FINAL STORE (Correct Wrapping Order)
------------------------------------------------------- */
export const useWorkflowStore = create(
  devtools(
    temporal(
      (set, get) => ({
        ...createUIState(set, get),
        ...createTemporalState(set, get),
      }),
      {
        partialize: (state) => ({
          nodes: state.nodes,
          edges: state.edges,
          selectedNodeId: state.selectedNodeId,
          selectedEdgeId: state.selectedEdgeId,
          zoom: state.zoom,
        }),
      }
    )
  )
);
