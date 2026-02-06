import { useState } from "react";
import {
  MdAccountTree,
  MdSearch,
  MdNotifications,
} from "react-icons/md";

import UserProfile from "../../reusable/UserProfile";

const NavBarTop = () => {

  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid
     border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-3 shrink-0">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <MdAccountTree className="text-lg" />
          </div>
          <h2 className="text-lg font-bold tracking-tight">
            Project mapping
          </h2>
        </div>
        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">Workflow Graph</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-[#f0f2f4] dark:bg-gray-800 rounded-lg px-3 py-1.5 gap-2">
          <MdSearch className="text-gray-500" />
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-48 p-0 placeholder:text-gray-500"
            placeholder="Search components..."
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-gray-100 dark:bg-gray-800
           text-sm font-bold">
            <span>Test Run</span>
          </button>
          <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary text-white 
          text-sm font-bold shadow-sm">
            <span>Publish Changes</span>
          </button>
          <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <MdNotifications />
          </button>
        </div>
        <div>

          <div className="relative">
            <UserProfile onClick={() => setOpenDropdown((prev) => !prev)}
              className="object-cover cursor-pointer" />

            {openDropdown && (
              <div className="absolute right-0 w-40 bg-white dark:bg-slate-800 
              shadow-lg rounded-lg py-2 border border-slate-200 dark:border-slate-700">
                <button

                  className="w-full text-left px-4 py-2 text-sm text-slate-700
                   dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  Settings
                </button>
                <button

                  className="w-full text-left px-4 py-2 text-sm text-red-600
                   hover:bg-red-50 dark:hover:bg-slate-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBarTop;