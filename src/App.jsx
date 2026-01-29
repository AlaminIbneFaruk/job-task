import Layout from "./Layout/Layout";
import Dashboard from "./Dashboard/Dashboard";
import CallLogs from "./CallLogs/CallLogs";
import Appointments from "./Appointments/Appointments";
import Settings from "./Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calls" element={<CallLogs />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
