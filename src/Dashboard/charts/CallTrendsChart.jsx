import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { day: "Mon", calls: 52 },
  { day: "Tue", calls: 68 },
  { day: "Wed", calls: 61 },
  { day: "Thu", calls: 74 },
  { day: "Fri", calls: 89 },
  { day: "Sat", calls: 65 },
  { day: "Sun", calls: 63 },
];

function CallTrendsChart() {
  return (
    <div className="bg-base-200 rounded-xl p-6 h-80">
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="font-semibold">Call Trends</h3>
          <p className="text-sm text-gray-400">This week • Total 472 calls</p>
        </div>
        <button className="btn btn-sm btn-outline">This Week</button>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <XAxis dataKey="day" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="calls"
            stroke="#3B82F6"
            fill="url(#colorCalls)"
            strokeWidth={2}
          />
          <defs>
            <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
export default CallTrendsChart;
