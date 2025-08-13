import StatsGrid from "./StatsGrid";
import TableSection from "./TableSection";
import ChartSection from "./chartSection";

function Dashboard() {
  return (
    <div className="space-y-6">
      <StatsGrid />

      <ChartSection />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 sm:gap-6">
        <div className="xl:col-span-2">
          <TableSection />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
