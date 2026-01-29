import React from "react";
import { FiBell } from "react-icons/fi";
import { useLocation } from "react-router";

const Topbar = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard Overview";
      case "/settings":
        return "Settings";
      case "/appointments":
        return "Appointments";
      case "/calls":
        return "Call Logs & History";
      default:
        return "";
    }
  };

  return (
    <header className="flex items-center justify-between px-6 bg-base-200 max-h-24">
      <h1 className="text-xl font-semibold">{getTitle()}</h1>

      <div className="flex items-center gap-4">
        <button className="btn btn-ghost btn-circle">
          <FiBell size={20} />
        </button>

        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://i.pravatar.cc/40" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
