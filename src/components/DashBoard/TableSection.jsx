import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";

const recentOrders = [
  {
    id: "#3847",
    customer: "John Smith",
    product: "MacBook Pro 16",
    amount: "৳2,399",
    status: "completed",
    date: "2025-08-13",
  },
  {
    id: "#3848",
    customer: "Sarah Johnson",
    product: "iPhone 15 Pro",
    amount: "৳1,199",
    status: "pending",
    date: "2025-08-13",
  },
  {
    id: "#3849",
    customer: "Mike Wilson",
    product: "AirPods Pro",
    amount: "৳249",
    status: "completed",
    date: "2025-08-12",
  },
  {
    id: "#3850",
    customer: "Emily Davis",
    product: "iPad Air",
    amount: "৳599",
    status: "cancelled",
    date: "2025-08-10",
  },
];

const topProducts = [
  {
    name: "MacBook Pro 16",
    sales: 1247,
    revenue: "৳2,987,530",
    trend: "up",
    change: "+12%",
  },
  {
    name: "iPhone 15 Pro",
    sales: 2156,
    revenue: "৳2,587,044",
    trend: "up",
    change: "+8%",
  },
  {
    name: "AirPods Pro",
    sales: 3421,
    revenue: "৳852,229",
    trend: "down",
    change: "-3%",
  },
  {
    name: "iPad Air",
    sales: 987,
    revenue: "৳591,213",
    trend: "up",
    change: "+15%",
  },
];
function TableSection() {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";

      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";

      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";

      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400";
    }
  };
  return (
    <div className="space-y-6">
      {/* recent order */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        {/* info */}
        <div className="p-3 sm:p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium sm:text-lg sm:font-bold text-slate-800 dark:text-white">
                Recent Order
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Latest Customer Orders
              </p>
            </div>

            <button className="px-2 py-1 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs sm:text-sm font-light sm:font-medium shadow-md hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ease-out">
              View All
            </button>
          </div>
        </div>
        {/* info */}

        {/* table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-2 sm:p-4 text-xs sm:text-sm font-medium sm:font-semibold text-slate-600 dark:text-amber-50">
                  Order Id
                </th>

                <th className="text-left p-2 sm:p-4 text-xs sm:text-sm font-medium sm:font-semibold text-slate-600 dark:text-amber-50">
                  Product
                </th>

                <th className="text-left p-2 sm:p-4 text-xs sm:text-sm font-medium sm:font-semibold text-slate-600 dark:text-amber-50">
                  Amount
                </th>

                <th className="text-left p-2 sm:p-4 text-xs sm:text-sm font-medium sm:font-semibold text-slate-600 dark:text-amber-50">
                  Status
                </th>

                <th className="text-left p-2 sm:p-4 text-xs sm:text-sm font-medium sm:font-semibold text-slate-600 dark:text-amber-50">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order, index) => {
                return (
                  <tr className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:bg-slate-800/50 transition-colors">
                    <td className="p-4" key={index}>
                      <span className="text-xs sm:text-sm font-medium sm:font-medium text-blue-200 cursor-pointer">
                        {order.id}
                      </span>
                    </td>

                    <td className="p-4">
                      <span className="text-xs sm:text-sm text-slate-800 dark:text-white">
                        {order.product}
                      </span>
                    </td>

                    <td className="p-4">
                      <span className="text-xs sm:text-sm font-medium sm:font-medium text-slate-800 dark:text-white">
                        {order.amount}
                      </span>
                    </td>

                    <td className="p-4">
                      <span
                        className={`text-xs text-slate-400 dark:text-white font-medium px-3 py-1 rounded-full ${getStatusColor(
                          order.status
                        )} `}
                      >
                        {order.date}
                      </span>
                    </td>

                    <td className="p-4">
                      <span className="text-xs sm:text-sm text-slate-800 dark:text-white cursor-pointer">
                        <MoreHorizontal className="w-4 h-4" />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* table */}
      </div>
      {/* recent order */}

      {/* top products */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-3 sm:p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm sm:text-lg font-medium sm:font-bold text-slate-800 dark:text-white">
              <h3 className="text-sm font-medium sm:text-lg sm:font-bold text-slate-800 dark:text-white">
                Top Products
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Best performing Products
            </p>
          </div>

          <button className="px-2 py-1 sm:px-4 sm:py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold shadow-lg hover:bg-white/20 hover:border-white/30 hover:shadow-xl hover:scale-105 hover:translate-x-0.5 transition-all duration-300 ease-out">
            View All
          </button>
        </div>

        {/* dynamic data */}
        <div className="p-3 sm:p-6 space-y-4">
          {topProducts.map((product, index) => {
            return (
              <div
                className="flex items-center justify-between p-2 sm:p-4 rounded-xl hover:bg-slate-50 hover:dark:bg-slate-800/50 transition-colors"
                key={index}
              >
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-medium sm:font-semibold text-slate-800 dark:text-white">
                    {product.name}
                  </h4>

                  <p className="text-xs text-slate-400 dark:text-slate-400">
                    {product.sales}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs sm:text-sm font-medium sm:font-semibold text-slate-800 dark:text-white">
                    {product.revenue}
                  </p>

                  <div className="flex items-center space-x-1">
                    {product.trend === "up" ? (
                      <TrendingUp className="w-3 h-3 text-emerald-500" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-500" />
                    )}
                    <span
                      className={`text-xs font-medium ${
                        product.trend === "up"
                          ? "text-emerald-500"
                          : "text-red-500"
                      }`}
                    >
                      {product.change}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* dynamic data */}
      </div>
      {/* top products */}
    </div>
  );
}

export default TableSection;
