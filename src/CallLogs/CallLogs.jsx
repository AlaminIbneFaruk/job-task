import React, { useState } from 'react';

const CallLogs = () => {
const calls = [
    {
      id: 1,
      phone: "+1 202-555-0142",
      duration: "4m 12s",
      status: "AI Resolved",
      issue: "Screen Replacement",
      transcript: [
        { from: "AI", text: "Thanks for calling Ubreakfix. How can I help?" },
        { from: "User", text: "My phone screen is cracked." },
        { from: "AI", text: "I can book a screen repair for you today." },
      ],
    },
    {
      id: 2,
      phone: "+1 202-555-0199",
      duration: "6m 03s",
      status: "Warm Transfer",
      issue: "Battery Issue",
      transcript: [
        { from: "AI", text: "What issue are you facing?" },
        { from: "User", text: "Battery drains fast." },
        {
          from: "AI",
          text: "Let me connect you with a technician.",
        },
      ],
    },
  ];

  const [selected, setSelected] = useState(calls[0]);
  const [search, setSearch] = useState("");

  const filteredCalls = calls.filter((c) =>
    c.phone.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="grid grid-cols-12 gap-6 h-full">
      {/* LEFT: CALL LIST */}
      <div className="col-span-5 bg-base-200 rounded-xl p-4 flex flex-col">
        <input
          type="text"
          placeholder="Search phone number..."
          className="input input-bordered mb-4 bg-base-100"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="space-y-2 overflow-y-auto">
          {filteredCalls.map((call) => (
            <div
              key={call.id}
              onClick={() => setSelected(call)}
              className={`p-4 rounded-lg cursor-pointer border transition ${
                selected.id === call.id
                  ? "border-primary bg-base-300"
                  : "border-base-300 hover:bg-base-300"
              }`}
            >
              <div className="flex justify-between">
                <p className="font-semibold">{call.phone}</p>
                <span
                  className={`badge ${
                    call.status === "AI Resolved"
                      ? "badge-success"
                      : "badge-warning"
                  }`}
                >
                  {call.status}
                </span>
              </div>
              <p className="text-sm text-gray-400">
                {call.issue} • {call.duration}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: CALL DETAILS */}
      <div className="col-span-7 bg-base-200 rounded-xl p-6 flex flex-col">
        <div className="border-b border-base-300 pb-4 mb-4">
          <h2 className="text-lg font-semibold">{selected.phone}</h2>
          <p className="text-sm text-gray-400">
            {selected.issue} • {selected.duration}
          </p>

          <button className="btn btn-sm btn-primary mt-3">
            ▶ Play Audio Recording
          </button>
        </div>

        {/* TRANSCRIPT */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-2">
          {selected.transcript.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[80%] p-3 rounded-lg text-sm ${
                msg.from === "AI"
                  ? "bg-primary text-white self-start"
                  : "bg-base-300 self-end ml-auto"
              }`}
            >
              <p className="opacity-70 text-xs mb-1">{msg.from}</p>
              {msg.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallLogs;