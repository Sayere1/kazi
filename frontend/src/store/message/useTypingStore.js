import { create } from "zustand";

export const useTypingStore = create((set) => ({
  typing: {}, 

  setTyping: (channelId, userId, isTyping) =>
    set((state) => {
      const current = state.typing[channelId] || [];

      return {
        typing: {
          ...state.typing,
          [channelId]: isTyping
            ? Array.from(new Set([...current, userId]))
            : current.filter((id) => id !== userId),
        },
      };
    }),
}));
