import { create } from "zustand";
import { devtools } from "zustand/middleware";

import userImage1 from "../assets/images/image1.png";
import userImage2 from "../assets/images/image2.png";
import userImage3 from "../assets/images/image3.png";
import userImage4 from "../assets/images/image4.png";
import userImage5 from "../assets/images/image5.png";

export const useTeamStore = create(
  devtools((set, get) => ({
    // -------------------------
    // STATE
    // -------------------------
    search: "",
    roleFilter: "all", // "all" | "Global Admin" | "Project Admin" | "Financial Admin"
    statusFilter: "any", // "any" | "Active" | "Suspended"
    quickFilters: [], // e.g. ["Active", "Global Admin"]
    page: 1,
    pageSize: 5,

    // Bulk selection
    selected: new Set(),

    // Admin data (static for now)
    admins: [
      {
        id: 1,
        name: "Tracy Nyono",
        email: "admin@kazihub.com",
        role: "Global Admin",
        roleColor: "blue",
        lastActive: "2 hours ago",
        status: "Active",
        statusColor: "green",
        avatar: userImage1
      },
      {
        id: 2,
        name: "Ali Omar",
        email: "team@kazihub.com",
        role: "Financial coordinator",
        roleColor: "purple",
        lastActive: "5 mins ago",
        status: "Active",
        statusColor: "green",
        avatar: userImage3
      },
      {
        id: 3,
        name: "Shumacker James",
        email: "team@kazihub.com",
        role: "Resource planning",
        roleColor: "orange",
        lastActive: "Yesterday",
        status: "Suspended",
        statusColor: "red",
        avatar: userImage2
      },
            {
        id: 4,
        name: "Jimmy Smith",
        email: "team@kazihub.com",
        role: "Client Relation Officer",
        roleColor: "orange",
        lastActive: "1 hour ago",
        status: "Active",
        statusColor: "green",
        avatar: userImage5
      },
      {
        id: 5,
        name: "Omarion Fabrizo",
        email: "team@kazihub.com",
        role: "Finanace Lead",
        roleColor: "blue",
        lastActive: "3 days ago",
        status: "Active",
        statusColor: "green",
        avatar: userImage4
      },
    ],

    // -------------------------
    // ACTIONS
    // -------------------------
    setSearch: (value) =>
      set({
        search: value,
        page: 1,
      }),

    setRoleFilter: (value) =>
      set({
        roleFilter: value,
        page: 1,
      }),

    setStatusFilter: (value) =>
      set({
        statusFilter: value,
        page: 1,
      }),

    toggleQuickFilter: (filter) =>
      set((state) => {
        const exists = state.quickFilters.includes(filter);
        return {
          quickFilters: exists
            ? state.quickFilters.filter((f) => f !== filter)
            : [...state.quickFilters, filter],
          page: 1,
        };
      }),

    setPage: (page) => set({ page }),

    // -------------------------
    // BULK ACTIONS
    // -------------------------
    toggleSelect: (id) =>
      set((state) => {
        const updated = new Set(state.selected);
        updated.has(id) ? updated.delete(id) : updated.add(id);
        return { selected: updated };
      }),

    clearSelection: () => set({ selected: new Set() }),

    toggleSelectAll: () => {
      const { paginatedAdmins, selected } = get();
      const pageAdmins = paginatedAdmins();
      const allSelected = pageAdmins.every((a) => selected.has(a.id));

      if (allSelected) {
        const updated = new Set(selected);
        pageAdmins.forEach((a) => updated.delete(a.id));
        set({ selected: updated });
      } else {
        const updated = new Set(selected);
        pageAdmins.forEach((a) => updated.add(a.id));
        set({ selected: updated });
      }
    },

    //modal for add 
  addAdminOpen: false,

  openAddAdmin: () => set({ addAdminOpen: true }),
  closeAddAdmin: () => set({ addAdminOpen: false }),


  }))
);
