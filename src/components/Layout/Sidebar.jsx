import {
  BarChart3,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
  Zap,
} from "lucide-react";
import logo from "../../assets/me.jpg";
import { useState } from "react";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    count: "847",
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions",
  },
  {
    id: "message",
    icon: MessageSquare,
    label: "Message",
    badge: "12",
  },
  {
    id: "calender",
    icon: Calendar,
    label: "Calender",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

function Sidebar({ collapsed, onToggle, currentPage, onPageChange }) {
  const [expandedItems, setExpandedItems] = useState(new Set(["analytics"]));

  const toggleExpanded = (itemId) => {
    const newExpanded = new Set(expandedItems);

    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }

    setExpandedItems(newExpanded);
  };

  return (
    <div
      className={`${
        collapsed ? "w-12 sm:w-20" : "w-36 sm:w-54 md:w-72"
      } relative z-10 flex flex-col bg-white/80 dark:bg-slate-900/80  backdrop-blur-xl border-r border-slate-200/50 hover:border-slate-700/50 transition duration-300 ease-in-out`}
    >
      {/* logo */}
      <div className="p-3 sm:p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="grid place-items-center w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>

          {/* conditional rendering */}
          {!collapsed && (
            <div>
              <h1 className="text-base sm:text-xl font-medium sm:font-bold text-slate-800 dark:text-white">
                Nexus
              </h1>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
          {/* conditional rendering */}
        </div>
      </div>
      {/* logo */}

      {/* Navigation, display dynamic menu */}
      <nav className="flex-1 p-2 sm:p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          return (
            <div key={item.id}>
              <button
                className={`w-full flex items-center justify-between mt-1 p-1 sm:p-3 sm:mt-0 rounded-xl transition-all duration-200 ${
                  currentPage === item.id || item.active
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
                onClick={() => {
                  if (item.submenu) {
                    toggleExpanded(item.id);
                  } else {
                    onPageChange(item.id);
                  }
                }}
              >
                <div className="flex items-center space-x-1 sm:space-x-3">
                  <item.icon className={`w-5 h-5`} />

                  {/* conditional rendering */}
                  {!collapsed && (
                    <>
                      <span className="text-xs sm:text-base font-medium ml-1 sm:ml-2">
                        {item.label}
                      </span>

                      {item.badge && (
                        <span className="px-1 py-0.5 sm:px-2 sm:py-1 text-xs bg-red-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}

                      {item.count && (
                        <span className="px-1 py-0.5 sm:px-2 sm:py-1 text-xs bg-slate-200  dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </>
                  )}
                  {/* conditional rendering */}
                </div>

                {!collapsed && item.submenu && (
                  <ChevronDown className="w-4 h-4 transition-transform" />
                )}
              </button>

              {/* sub menu */}
              {!collapsed && item.submenu && expandedItems.has(item.id) && (
                <div className="ml-4 mt-1 sm:ml-8 sm:mt-2 space-y-1">
                  {item.submenu.map((subitem) => {
                    return (
                      <button className="w-full text-left p-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all">
                        {subitem.label}
                      </button>
                    );
                  })}
                </div>
              )}
              {/* sub menu */}
            </div>
          );
        })}
      </nav>
      {/* Navigation, display dynamic menu */}

      {/* user profile */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-sky-800/50">
            <img
              src={logo}
              alt="user"
              className="w-10 h-10 rounded-full ring-2 ring-blue-500"
            />

            <div className="flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                  Sofian Hasan
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* user profile */}
    </div>
  );
}

export default Sidebar;
