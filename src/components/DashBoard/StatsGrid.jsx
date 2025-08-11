import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  DollarSign,
  Eye,
  ShoppingCart,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "৳124,563",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 t0-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-500 dark:text-emerald-400",
  },
  {
    title: "Active Users",
    value: "8,549",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 t0-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-500 dark:text-blue-400",
  },
  {
    title: "Total Orders",
    value: "2,847",
    change: "+15.3%",
    trend: "up",
    icon: ShoppingCart,
    color: "from-purple-500 t0-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-500 dark:text-purple-400",
  },
  {
    title: "Page Views",
    value: "45,892",
    change: "-2.1%",
    trend: "down",
    icon: Eye,
    color: "from-orange-500 t0-red-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-500 dark:text-orange-400",
  },
];

function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stats, index) => {
        return (
          <div
            className="group p-3 sm:p-6 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/20 transition-all duration-300"
            key={index}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-xs sm:text-sm font-light sm:font-medium text-slate-600 dark:text-slate-400 mb-2">
                  {stats.title}
                </p>

                <p className="text-xl sm:text-3xl font-medium sm:font-bold text-slate-800 dark:text-white mb-4">
                  {stats.value}
                </p>

                <div className="flex items-center space-x-2">
                  {stats.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500" />
                  )}

                  <span
                    className={`text-xs sm:text-sm  font-semibold ${
                      stats.trend === "up" ? "text-emerald-500" : "text-red-500"
                    }`}
                  >
                    {stats.change}
                  </span>

                  <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 ">
                    vs last Month
                  </span>
                </div>
              </div>

              <div
                className={`p-3 rounded-xl ${stats.bgColor} group-hover:scale-110  transition-all duration-200`}
              >
                {<stats.icon className={`w-6 h-6 ${stats.textColor}`} />}
              </div>
            </div>

            {/* progress bar */}
            <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${stats.color} rounded-full transition-all duration-100`}
                style={{ width: stats.trend === "up" ? "75%" : "45%" }}
              ></div>
            </div>
            {/* progress bar */}
          </div>
        );
      })}
    </div>
  );
}

export default StatsGrid;
