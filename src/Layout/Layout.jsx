import Sidebar from "../sidebar/SIdebar";
import Topbar from "../Topbar/Topbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex h-screen bg-base-100 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
