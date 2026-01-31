import { create } from "zustand";
import { initialKanban } from "../data/data"

export const useKanbanStore = create((set) => ({
  kanban: initialKanban,

  // UI State
  addColumnOpen: false,
  addTaskOpen: false,
  editTaskOpen: false,

  selectedTask: null,
  selectedColumn: null, // <-- IMPORTANT (was missing!)

  messageModalOpen: false, 

  //open and close message modal
  openMessageModal: () => set({ messageModalOpen: true }), 
  closeMessageModal: () => set({ messageModalOpen: false }),

  // Open / Close Modals
  openAddColumn: () => set({ addColumnOpen: true }),
  closeAddColumn: () => set({ addColumnOpen: false }),

  openAddTask: (columnId) =>
    set({ addTaskOpen: true, selectedColumn: columnId }),

  closeAddTask: () =>
    set({ addTaskOpen: false, selectedColumn: null }),

  openEditTask: (task) =>
    set({ editTaskOpen: true, selectedTask: task }),

  closeEditTask: () =>
    set({ editTaskOpen: false, selectedTask: null }),

  // CRUD: Columns
  addColumn: (title) =>
    set((state) => {
      const id = crypto.randomUUID();
      return {
        kanban: {
          ...state.kanban,
          columns: {
            ...state.kanban.columns,
            [id]: { id, title, taskIds: [], color: "gray" },
          },
          columnOrder: [...state.kanban.columnOrder, id],
        },
      };
    }),

  deleteColumn: (columnId) =>
    set((state) => {
      const { [columnId]: removed, ...rest } = state.kanban.columns;
      return {
        kanban: {
          ...state.kanban,
          columns: rest,
          columnOrder: state.kanban.columnOrder.filter((id) => id !== columnId),
        },
      };
    }),

  // CRUD: Tasks
  addTask: (columnId, task) =>
    set((state) => {
      const id = crypto.randomUUID();
      return {
        kanban: {
          ...state.kanban,
          tasks: {
            ...state.kanban.tasks,
            [id]: { id, ...task },
          },
          columns: {
            ...state.kanban.columns,
            [columnId]: {
              ...state.kanban.columns[columnId],
              taskIds: [...state.kanban.columns[columnId].taskIds, id],
            },
          },
        },
      };
    }),

  deleteTask: (taskId) =>
    set((state) => {
      const container = Object.values(state.kanban.columns).find((col) =>
        col.taskIds.includes(taskId)
      );

      const newTasks = { ...state.kanban.tasks };
      delete newTasks[taskId];

      return {
        kanban: {
          ...state.kanban,
          tasks: newTasks,
          columns: {
            ...state.kanban.columns,
            [container.id]: {
              ...container,
              taskIds: container.taskIds.filter((id) => id !== taskId),
            },
          },
        },
      };
    }),

  updateTask: (taskId, updates) =>
    set((state) => ({
      kanban: {
        ...state.kanban,
        tasks: {
          ...state.kanban.tasks,
          [taskId]: {
            ...state.kanban.tasks[taskId],
            ...updates,
          },
        },
      },
    })),

  // Filters
  filters: {
    priority: "All",
    member: "All",
    label: "All",
  },

  setFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    })),
}));
