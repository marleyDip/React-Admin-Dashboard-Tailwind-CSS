import { Zap } from "lucide-react";
import logo from "../../assets/me.jpg";

function Sidebar() {
  return (
    <div className="relative z-10 flex flex-col bg-white/80 dark:bg-slate-900/80  backdrop-blur-xl border-r border-slate-200/50 hover:border-slate-700/50 transition duration-300 ease-in-out">
      {/* logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="grid place-items-center w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>

          {/* conditional rendering */}
          <div>
            <h1 className="text-xl font-bold text-slate-800  dark:text-white">
              Nexus
            </h1>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Admin Panel
            </p>
          </div>
          {/* conditional rendering */}
        </div>
      </div>
      {/* logo */}

      {/* Navigation, display dynamic menu */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto"></nav>
      {/* Navigation, display dynamic menu */}

      {/* user profile */}
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
      {/* user profile */}
    </div>
  );
}

export default Sidebar;
