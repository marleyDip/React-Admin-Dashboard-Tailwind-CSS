import StatsGrid from "./StatsGrid";
import ChartSection from "./chartSection";

function Dashboard() {
  return (
    <div className="space-y-6">
      <StatsGrid />

      <ChartSection />
    </div>
  );
}

export default Dashboard;
