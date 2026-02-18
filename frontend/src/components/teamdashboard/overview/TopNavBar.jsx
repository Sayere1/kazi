import { FiSearch, FiBell, FiSettings } from "react-icons/fi";

import userImage1 from "../../../assets/images/image1.png";

const TopBarNav = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800
     bg-white dark:bg-background-dark px-10 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-primary">
          <div className="size-8">
            {/* Replace with your SVG or logo component */}
            <span className="font-black text-xl">Kazihub</span>
          </div>
        </div>

        {/* Search */}
        <label className="flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full items-center rounded-lg bg-gray-100 dark:bg-gray-800">
            <FiSearch className="text-[#617589] ml-3" />
            <input
              className="flex-1 bg-transparent px-3 text-sm focus:outline-none"
              placeholder="Search projects or skills"
            />
          </div>
        </label>
      </div>

      <div className="flex items-center gap-8">
        <nav className="flex items-center gap-9">
          <a className="text-primary font-bold border-b-2 border-primary pb-1 text-sm">
            Dashboard
          </a>
          <a className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm">
            Projects
          </a>
          <a className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm">
            Training
          </a>
          <a className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm">
            Community
          </a>
        </nav>

        <div className="flex gap-2">
          <button className="icon-btn">
            <FiBell />
          </button>
          <button className="icon-btn">
            <FiSettings />
          </button>
        </div>

        <div
          className="size-10 rounded-full bg-cover bg-center border border-gray-300 dark:border-gray-700"
          style={{
            backgroundImage:`url(${userImage1})`,
          }}
        />
      </div>
    </header>
  );
};

export default TopBarNav;
