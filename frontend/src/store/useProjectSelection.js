import { create } from "zustand";

const useProjectSelection = create((set, get) => ({
  selected: [],
  search: "",
  filters: {
    status: "",
    department: "",
    startDate: "",
    endDate: "",
  },

  pagination: {
    page: 1,
    pageSize: 10,
  },

  setPage: (page) =>
    set((state) => ({
      pagination: { ...state.pagination, page },
    })),

  setPageSize: (size) =>
    set((state) => ({
      pagination: { ...state.pagination, pageSize: size, page: 1 },
    })),

  progressModal: {
    open: false,
    project: null,
  },

  openProgressModal: (project) =>
    set({ progressModal: { open: true, project } }),

  closeProgressModal: () =>
    set({ progressModal: { open: false, project: null } }),

  toggleSelect: (id) =>
    set((state) => ({
      selected: state.selected.includes(id)
        ? state.selected.filter((x) => x !== id)
        : [...state.selected, id],
    })),

  clearSelection: () => set({ selected: [] }),

  setSearch: (value) => set({ search: value }),

  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),

  bulkDelete: () => {
    const ids = get().selected;
    console.log("Deleting projects:", ids);
    set({ selected: [] });
  },

  bulkArchive: () => {
    const ids = get().selected;
    console.log("Archiving projects:", ids);
    set({ selected: [] });
  },

  bulkExport: () => {
    const ids = get().selected;
    console.log("Exporting projects:", ids);
  },
}));

export default useProjectSelection;
