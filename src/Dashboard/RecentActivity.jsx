const RecentActivity = () => {
  const activities = [
    {
      text: "AI successfully handled a customer call",
      status: "success", // green
      time: "2 minutes ago",
    },
    {
      text: "Customer waiting for agent response",
      status: "warning", // yellow
      time: "12 minutes ago",
    },
    {
      text: "Missed incoming call from client",
      status: "error", // red
      time: "1 hour ago",
    },
  ];

  const statusColor = {
    success: "bg-success",
    warning: "bg-warning",
    error: "bg-error",
  };

  return (
    <div className="bg-base-200 rounded-xl p-5">
      <h3 className="font-semibold mb-4">Recent Activity</h3>

      <div className="space-y-4">
        {activities.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            {/* Status Dot */}
            <span
              className={`mt-1 h-2.5 w-2.5 rounded-full ${statusColor[item.status]}`}
            />

            {/* Activity Text */}
            <div>
              <p className="text-sm">{item.text}</p>
              <span className="text-xs text-gray-400">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
