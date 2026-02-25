import { create } from "zustand";

export const useComposerStore = create((set) => ({
  isDriveOpen: false,
  isDropboxOpen: false,
  formatting: {
    bold: false,
    italic: false,
    link: false,
    mention: false,
    emoji: false,
  },

  toggleFormat: (key) =>
    set((state) => ({
      formatting: {
        ...state.formatting,
        [key]: !state.formatting[key],
      },
    })),

  openDrive: () => set({ isDriveOpen: true }),
  closeDrive: () => set({ isDriveOpen: false }),

  openDropbox: () => set({ isDropboxOpen: true }),
  closeDropbox: () => set({ isDropboxOpen: false }),
}));
