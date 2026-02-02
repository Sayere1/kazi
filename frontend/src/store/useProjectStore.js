import { create } from "zustand";

export const useProjectStore = create((set, get) => ({


  drawerOpen: false,
drawerProject: null,

openDrawer: (project) => set({ drawerOpen: true, drawerProject: project }),
closeDrawer: () => set({ drawerOpen: false, drawerProject: null }),


selectedTemplate: "gantt",

setTemplate: (template) => set({ selectedTemplate: template }),


//milestone

milestones: [
  { id: crypto.randomUUID(), title: "Project Kickoff", date: "2023-11-05" },
  { id: crypto.randomUUID(), title: "Alpha Release", date: "2024-01-15" },
],

addMilestone: () =>
  set((state) => ({
    milestones: [
      ...state.milestones,
      { id: crypto.randomUUID(), title: "", date: "" },
    ],
  })),

updateMilestone: (id, field, value) =>
  set((state) => ({
    milestones: state.milestones.map((m) =>
      m.id === id ? { ...m, [field]: value } : m
    ),
  })),

removeMilestone: (id) =>
  set((state) => ({
    milestones: state.milestones.filter((m) => m.id !== id),
  })),


//create project setup

createStep: 1,

createForm: {
  name: "",
  department: "",
  lead: "",
  description: "",
},

setCreateField: (field, value) =>
  set((state) => ({
    createForm: { ...state.createForm, [field]: value },
  })),

nextCreateStep: () =>
  set((state) => ({ createStep: Math.min(state.createStep + 1, 3) })),

prevCreateStep: () =>
  set((state) => ({ createStep: Math.max(state.createStep - 1, 1) })),

resetCreateFlow: () =>
  set({
    createStep: 1,
    createForm: { name: "", department: "", lead: "", description: "" },
  }),


/*createFlowOpen: false,
createStep: 1,

createForm: {
  name: "",
  department: "",
  lead: "",
  description: "",
},

openCreateFlow: () => set({ createFlowOpen: true, createStep: 1 }),
closeCreateFlow: () =>
  set({
    createFlowOpen: false,
    createStep: 1,
    createForm: { name: "", department: "", lead: "", description: "" },
  }),

setCreateField: (field, value) =>
  set((state) => ({
    createForm: { ...state.createForm, [field]: value },
  })),

nextStep: () =>
  set((state) => ({ createStep: Math.min(state.createStep + 1, 3) })),

prevStep: () =>
  set((state) => ({ createStep: Math.max(state.createStep - 1, 1) })),
*/


  // -----------------------------
  // PROJECT DATA
  // -----------------------------
  projects: [],

  setProjects: (data) => set({ projects: data }),

  // -----------------------------
  // SELECTION
  // -----------------------------
  selected: new Set(),

  toggleSelect: (id) =>
    set((state) => {
      const updated = new Set(state.selected);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return { selected: updated };
    }),

  selectAll: () =>
    set((state) => ({
      selected: new Set(state.projects.map((p) => p.id)),
    })),

  clearSelection: () => set({ selected: new Set() }),

  isSelected: (id) => get().selected.has(id),

  // -----------------------------
  // FILTERS
  // -----------------------------
  view: "live", // "live" | "archived"
  setView: (view) => set({ view }),

  // -----------------------------
  // SORTING
  // -----------------------------
  sortBy: "name",
  sortDir: "asc",

  setSort: (field) =>
    set((state) => ({
      sortBy: field,
      sortDir: state.sortDir === "asc" ? "desc" : "asc",
    })),

  // -----------------------------
  // PAGINATION
  // -----------------------------
  page: 1,
  pageSize: 10,

  setPage: (page) => set({ page }),

  // -----------------------------
  // DERIVED DATA
  // -----------------------------
  filteredProjects: () => {
    const { projects, view } = get();
    return projects.filter((p) =>
      view === "live" ? p.status !== "Archived" : p.status === "Archived"
    );
  },

  sortedProjects: () => {
    const { filteredProjects, sortBy, sortDir } = get();
    return [...filteredProjects()].sort((a, b) => {
      const A = a[sortBy];
      const B = b[sortBy];
      return sortDir === "asc"
        ? A > B ? 1 : -1
        : A < B ? 1 : -1;
    });
  },

  paginatedProjects: () => {
    const { sortedProjects, page, pageSize } = get();
    const start = (page - 1) * pageSize;
    return sortedProjects().slice(start, start + pageSize);
  },

}));
