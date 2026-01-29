import { FiHome, FiPhone, FiCalendar, FiSettings } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="max-w-64 bg-base-200 flex flex-col justify-between">
      <div>          
        <div className="px-6 py-5 text-xl font-bold text-primary">LOGO</div>

        <nav className="menu px-4 gap-1">
          <NavLink to="/" end className="menu-item flex justify-start btn">
            <FiHome /> Dashboard
          </NavLink>
          <NavLink to="/calls" className="menu-item flex justify-start btn">
            <FiPhone /> Call Logs
          </NavLink>
          <NavLink
            to="/appointments"
            className="menu-item flex justify-start btn"
          >
            <FiCalendar /> Appointments
          </NavLink>
          <NavLink to="/settings" className="menu-item flex justify-start btn">
            <FiSettings /> Settings
          </NavLink>
        </nav>
      </div>

      <button className="btn btn-error btn-outline m-4">
        <FiLogOut /> Log Out
      </button>
    </aside>
  );
}
