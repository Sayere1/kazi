import { create } from "zustand";

import userImage2 from "../../assets/images/image2.png";
import userImage3 from "../../assets/images/image3.png";
import userImage4 from "../../assets/images/image4.png";


export const useMemberStore = create((set) => ({
  members: [
    {
      id: "ali",
      name: "Ali Omar",
      role: "Project Manager",
      avatar: userImage3,
      status: "online",
    },
    {
      id: "omarion",
      name: "Omarion Fabrizo",
      role: "Marketing lead",
      avatar: userImage2,
      status: "online",
    },
    {
      id: "shumacker",
      name: "Shumacker James",
      role: "Re-Branding",
      avatar: userImage4,
      status: "away",
    },
  ],

  setStatus: (id, status) =>
    set((state) => ({
      members: state.members.map((m) =>
        m.id === id ? { ...m, status } : m
      ),
    })),
}));
