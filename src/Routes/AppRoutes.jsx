import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/LoginPage/LoginScreen.jsx";
import Report from "../pages/ReportPage/Report.jsx";
import Table from '../pages/ReportPage/ReportTable.jsx'
import Chart from '../pages/ReportPage/ReportCharts.jsx'
import { AuthProvider } from "../Context/AuthContext.jsx";

function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exect path="/" element={<Login />} />
          <Route exect path="/Report" element={<Report />} />
          <Route exect path="/Table" element={<Table />} />
          <Route exect path="/Chart" element={<Chart />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes;