import { create } from "zustand";

export const useOnboardingStore = create((set) => ({
  projectType: null,
  teammates: [],
  setProjectType: (type) => set({ projectType: type }),
  addTeammate: (email) =>
    set((state) => ({ teammates: [...state.teammates, email] })),
}));
