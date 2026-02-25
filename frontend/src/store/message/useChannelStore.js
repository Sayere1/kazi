import { create } from "zustand";

export const useChannelStore = create((set) => ({
  channels: [
    { id: "general", name: "general", unread: 0 },
    { id: "marketing-team", name: "marketing-team", unread: 0 },
    { id: "eco-transportation", name: "eco-trans-q4", unread: 3 },
  ],

  activeChannel: "eco-trans-q4",

  setActiveChannel: (id) =>
    set((state) => ({
      activeChannel: id,
      channels: state.channels.map((c) =>
        c.id === id ? { ...c, unread: 0 } : c
      ),
    })),

  addChannel: (name) =>
    set((state) => ({
      channels: [...state.channels, { id: name, name, unread: 0 }],
    })),
}));
