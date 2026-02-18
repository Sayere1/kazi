import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/reusable/Sidebar";
import NavBar from "../components/reusable/NavBar";
import Logo from "../assets/images/kazilogo.png";

import { FiBarChart2, FiLayers, FiUsers, FiSettings } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";

import { useKanbanStore } from "../store/kanbanStore";

const TeamDashboardLayout = () => {

  const MyLogo = () => <img src={Logo} className="w-5 h-5" />;

  const navItems = [
    {
      section: "Main",
      items: [
        { icon: <MdDashboard />, label: "Dashboard", to: "/" },
        { icon: <FiLayers />, label: "Projects", to: "/projects" },
      ],
    },
    {
      section: "Team Area",
      items: [
        { icon: <FiUsers />, label: "Dashboard", to: "/teamwork" },
        { icon: <FiBarChart2 />, label: "Reports", to: "/reports" },
      ],
    },
    {
      section: "KizaTools",
      items: [
        { icon: <FiSettings />, label: "KaziBoard", to: "/workflow" },
        { icon: <FiBarChart2 />, label: "IdeaP", to: "/workflow/idea" },
      ],
    },
    {
      section: "Team Management",
      items: [
        { icon: <FiUsers />, label: "Teams", to: "/teams" },
        { icon: <FiBarChart2 />, label: "Reports", to: "/reports" },
      ],
    },
    {
      section: "Admin Tools",
      items: [
        { icon: <FiSettings />, label: "Settings", to: "/settings" },
        { icon: <FiBarChart2 />, label: "Admin", to: "/admin" },
      ],
    },
  ];


  const [collapsed, setCollapsed] = useState(false);
  const { openAddColumn } = useKanbanStore();

  // Profile dropdown actions
  const handleSettings = () => {
    console.log("Go to settings");
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };


  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="flex min-h-screen">

        {/* Pass collapsed + setter to Sidebar */}
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          navItems={navItems}
          title="aziHub"
          LogoIcon={MyLogo}
          showUserWeather={true}
        />

        {/* MAIN CONTENT */}
        <main
          className={`flex-1 flex flex-col transition-all duration-300 ${collapsed ? "ml-20" : "ml-64"
            }`}
        >

          <NavBar
            collapsed={collapsed}
            showSearch={true}
            searchPlaceholder="Search tasks..."
            onSearch={(value) => console.log("Searching:", value)}
            showAddButton={false}
            addButtonLabel="New Column"
            onAdd={openAddColumn}
            showNotifications={true}
            onBellClick={() => console.log("Bell clicked")}
            showHelp={true}
            onHelpClick={() => console.log("Help clicked")}
            profileImage={true}

            // Add dropdown actions
            onSettings={handleSettings}
            onLogout={handleLogout}
          />

          <div className="p-8">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
};

export default TeamDashboardLayout;