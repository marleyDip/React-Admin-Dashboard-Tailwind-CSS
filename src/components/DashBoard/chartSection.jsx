import RevenueChart from "./RevenueChart";

function chartSection() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2">
        <RevenueChart />
      </div>
    </div>
  );
}

export default chartSection;
