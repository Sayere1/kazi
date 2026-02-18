// src/store/useTasksStore.js
import { create } from "zustand";
import { nanoid } from "nanoid";

const initialTasks = [
  {
    id: nanoid(),
    title: "Finalize Q4 Marketing Plan",
    project: "Marketing",
    priority: "high",
    status: "in-progress",
    dueGroup: "Today",
    updatedAt: "2h ago",
    timeTracked: "02:15:00",
    isRunning: false,
  },
  {
    id: nanoid(),
    title: "Branding Documentation",
    project: "Product",
    priority: "medium",
    status: "in-progress",
    dueGroup: "Today",
    updatedAt: "Running now",
    timeTracked: "00:45:22",
    isRunning: true,
  },
  {
    id: nanoid(),
    title: "Weekly Team Sync",
    project: "Internal",
    priority: "low",
    status: "scheduled",
    dueGroup: "Tomorrow",
    updatedAt: "10:00 AM",
    timeTracked: "00:00:00",
    isRunning: false,
  },
];

export const useTasksStore = create((set, get) => ({
  tasks: initialTasks,

  // UI state
  activeTab: "dueDate", // "dueDate" | "project" | "status"
  sortBy: "priority", // "priority" | "project" | "status"
  sortDir: "asc",
  filterProject: "all",
  filterStatus: "all",
  currentPage: 1,
  pageSize: 5,

  // Actions
  setActiveTab: (tab) => set({ activeTab: tab, currentPage: 1 }),

  setSort: (sortBy) =>
    set((state) => ({
      sortBy,
      sortDir:
        state.sortBy === sortBy && state.sortDir === "asc" ? "desc" : "asc",
    })),

  setFilterProject: (project) => set({ filterProject: project, currentPage: 1 }),
  setFilterStatus: (status) => set({ filterStatus: status, currentPage: 1 }),

  setPage: (page) => set({ currentPage: page }),

  addTask: (task) =>
    set((state) => ({
      tasks: [
        {
          id: nanoid(),
          title: task.title || "New Task",
          project: task.project || "General",
          priority: task.priority || "medium",
          status: task.status || "in-progress",
          dueGroup: task.dueGroup || "Today",
          updatedAt: "Just now",
          timeTracked: "00:00:00",
          isRunning: false,
        },
        ...state.tasks,
      ],
      currentPage: 1,
    })),
    

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    })),

  toggleTimer: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, isRunning: !t.isRunning } : t
      ),
    })),

  // Derived selector
  getVisibleTasks: () => {
  const state = get();

  const {
    tasks,
    activeTab,
    sortBy,
    sortDir,
    filterProject,
    filterStatus,
  } = state;

  // 1. Filtering
  let filtered = tasks;

  if (filterProject !== "all") {
    filtered = filtered.filter((t) => t.project === filterProject);
  }

  if (filterStatus !== "all") {
    filtered = filtered.filter((t) => t.status === filterStatus);
  }

  // 2. Group key based on active tab
  const groupKey =
    activeTab === "project"
      ? "project"
      : activeTab === "status"
      ? "status"
      : "dueGroup";

  // 3. Sorting
  const sorted = [...filtered].sort((a, b) => {
    const A = a[sortBy];
    const B = b[sortBy];

    if (A < B) return sortDir === "asc" ? -1 : 1;
    if (A > B) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  // 4. Grouping
  const groups = sorted.reduce((acc, task) => {
    const key = task[groupKey] || "Other";
    if (!acc[key]) acc[key] = [];
    acc[key].push(task);
    return acc;
  }, {});

  return { groups, groupKey };
},

}));
