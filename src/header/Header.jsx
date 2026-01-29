import { FiBell, FiSearch } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-base-300 border-b border-slate-800">
      <h1 className="text-xl font-semibold">Call Logs & History</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-3 text-slate-400" />
          <input
            className="input input-sm bg-base-200 pl-9 border-slate-700"
            placeholder="Search by number"
          />
        </div>

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
