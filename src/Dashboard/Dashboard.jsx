import {
  FiCalendar,
  FiClock,
  FiCpu,
  FiPhone,
  FiPhoneMissed,
  FiRepeat,
} from "react-icons/fi";
import StatCard from "../stats/StatCard";
import CallTrendsChart from "./charts/CallTrendsChart"
import RecentActivity from "./RecentActivity";
import TopRepairRequests from "./TopRepairRequests"
const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <StatCard
          title="Total Calls"
          value="472"
          trend="+12%"
          icon={FiPhone}
          gradient="from-blue-500 to-cyan-400"
        />
        <StatCard
          title="AI Handled Calls"
          value="312"
          trend="+8%"
          icon={FiCpu}
          gradient="from-violet-500 to-fuchsia-500"
        />
        <StatCard
          title="Warm Transfers"
          value="41"
          trend="+3%"
          icon={FiRepeat}
          gradient="from-emerald-500 to-teal-400"
        />
        <StatCard
          title="Appointments Booked"
          value="86"
          trend="+14%"
          icon={FiCalendar}
          gradient="from-orange-500 to-amber-400"
        />
        <StatCard
          title="Missed Calls"
          value="23"
          trend="-5%"
          icon={FiPhoneMissed}
          gradient="from-rose-500 to-pink-500"
        />
        <StatCard
          title="Avg Call Duration"
          value="4m 32s"
          trend="-2%"
          icon={FiClock}
          gradient="from-indigo-500 to-sky-500"
        />
      </div>

      <CallTrendsChart />
      <div className="grid grid-cols-2 gap-6">
        <RecentActivity></RecentActivity>
        <TopRepairRequests></TopRepairRequests>
      </div>
    </div>
  );
};

export default Dashboard;
