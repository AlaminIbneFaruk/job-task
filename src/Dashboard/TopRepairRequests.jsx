const TopRepairRequests = () => {
  const requests = [
    {
      title: "AC not cooling",
      count: 12,
      percent: 80,
    },
    {
      title: "Internet connection issue",
      count: 8,
      percent: 55,
    },
    {
      title: "Power backup failure",
      count: 5,
      percent: 35,
    },
  ];

  return (
    <div className="bg-base-200 rounded-xl p-5">
      <h3 className="font-semibold mb-4">Top Repair Requests</h3>

      <div className="space-y-5">
        {requests.map((item, idx) => (
          <div key={idx}>
            {/* Header */}
            <div className="flex justify-between mb-1">
              <p className="text-sm font-medium">{item.title}</p>
              <span className="text-sm text-gray-400">{item.count}</span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full rounded-full bg-base-300 overflow-hidden">
              <div
                className="h-full rounded-full bg-linear-to-r from-blue-500 to-sky-400"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRepairRequests;
