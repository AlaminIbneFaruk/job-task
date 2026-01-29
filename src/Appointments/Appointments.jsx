import React from "react";
import SummaryCard from "./SummaryCard";

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      name: "John Doe",
      phone: "+1 202-555-0123",
      email: "john@email.com",
      device: "iPhone 13",
      repair: "Screen Replacement",
      date: "2026-02-02",
      slot: "Morning",
      time: "10:30 AM",
      status: "AI Booked",
    },
    {
      id: 2,
      name: "Sarah Lee",
      phone: "+1 202-555-0189",
      email: "sarah@email.com",
      device: "Samsung S22",
      repair: "Battery Issue",
      date: "2026-02-02",
      slot: "Afternoon",
      time: "2:00 PM",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-6">
      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard title="Total Booked" value="86" />
        <SummaryCard title="AI Booked" value="63" color="success" />
        <SummaryCard title="Pending" value="23" color="warning" />
      </div>

      {/* BOOKING LINK */}
      <div className="bg-base-200 rounded-xl p-6 flex items-center gap-4">
        <input
          type="text"
          readOnly
          value="https://ubreakfix.ai/book-appointment"
          className="input input-bordered flex-1 bg-base-100"
        />
        <button
          className="btn btn-primary"
          onClick={() =>
            navigator.clipboard.writeText(
              "https://ubreakfix.ai/book-appointment",
            )
          }
        >
          Copy Link
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-base-200 rounded-xl p-6">
        <h2 className="font-semibold mb-4">Appointments</h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Client</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Device</th>
                <th>Repair</th>
                <th>Date</th>
                <th>Slot</th>
                <th>Start</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr key={a.id}>
                  <td className="font-medium">{a.name}</td>
                  <td>{a.phone}</td>
                  <td>{a.email}</td>
                  <td>{a.device}</td>
                  <td>{a.repair}</td>
                  <td>{a.date}</td>
                  <td>{a.slot}</td>
                  <td>{a.time}</td>
                  <td>
                    <span
                      className={`badge ${
                        a.status === "AI Booked"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {a.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-4 gap-2">
          {/* Previous */}
          <button className="btn btn-sm btn-ghost">Prev</button>

          {/* Pages */}
          <button className="btn btn-sm btn-primary">1</button>
          <button className="btn btn-sm btn-ghost">2</button>
          <button className="btn btn-sm btn-ghost">3</button>
          <button className="btn btn-sm btn-ghost">4</button>
          <button className="btn btn-sm btn-ghost">5</button>

          {/* Ellipsis */}
          <span className="px-2 text-sm text-gray-400 select-none">…</span>

          {/* Last page */}
          <button className="btn btn-sm btn-ghost">11</button>

          {/* Next */}
          <button className="btn btn-sm btn-ghost">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
