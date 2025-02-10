import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/Dashboard.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Dashboard() {
  // Dummy data for stats
  const stats = {
    ongoing: 5,
    upcoming: 3,
    rejected: 2,
  };

  // Sample data for the bar chart
  const applicationData = [
    { month: "Jan", applied: 2 },
    { month: "Feb", applied: 5 },
    { month: "Mar", applied: 8 },
    { month: "Apr", applied: 6 },
    { month: "May", applied: 10 },
    { month: "Jun", applied: 7 },
    { month: "Jul", applied: 12 },
    { month: "Aug", applied: 9 },
    { month: "Sep", applied: 4 },
    { month: "Oct", applied: 6 },
    { month: "Nov", applied: 5 },
    { month: "Dec", applied: 3 },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
        <ThemeToggle />
      <div className="dashboard-content">
        <h2>Dashboard</h2>

        {/* Statistics Section with Framer Motion */}
        <motion.div 
          className="stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div className="stat-card ongoing" whileHover={{ scale: 1.05 }}>
            <h3>Ongoing Applications</h3>
            <p>{stats.ongoing}</p>
          </motion.div>
          <motion.div className="stat-card upcoming" whileHover={{ scale: 1.05 }}>
            <h3>Upcoming Applications</h3>
            <p>{stats.upcoming}</p>
          </motion.div>
          <motion.div className="stat-card rejected" whileHover={{ scale: 1.05 }}>
            <h3>Rejected Applications</h3>
            <p>{stats.rejected}</p>
          </motion.div>
        </motion.div>

        {/* Bar Chart Section with Framer Motion */}
        <motion.div 
          className="chart-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <h3>Applications Applied Over the Months</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={applicationData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="applied" fill="var(--chart-bar)" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;

