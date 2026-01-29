import { FiBell } from "react-icons/fi";
// AI
export default function Navbar() {
  return (
    <header className="bg-base-300 px-6 py-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold">Dashboard Overview</h2>
      <div className="flex items-center gap-4">
        <FiBell className="text-xl cursor-pointer" />
        <div className="avatar">
          <div className="w-9 rounded-full">
            <img src="https://i.pravatar.cc/100" />
          </div>
        </div>
      </div>
    </header>
  );
}
