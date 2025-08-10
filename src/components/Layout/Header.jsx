import {
  Bell,
  ChevronDown,
  Filter,
  Menu,
  Plus,
  Search,
  Settings,
  Sun,
} from "lucide-react";
import logo from "../../assets/me.jpg";

function Header() {
  return (
    <div className="px-6 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="flex items-center justify-between">
        {/* left section */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden md:block">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              DashBoard
            </h1>

            <p className="text-sm font-medium text-slate-800 dark:text-white">
              Welcome Back, Sofian! Here's what's happing today!
            </p>
          </div>
        </div>
        {/* left section */}

        {/* center */}
        <div className="flex-1 md:max-w-md sm:max-w-sm max-w-[200px]  mx-8">
          <div className="relative group">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-300" />

            <input
              type="text"
              placeholder="Search Anything"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent transition-all"
            />

            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:text-slate-300 group-hover:scale-105 group-hover:-translate-x-1 transition-all duration-300">
              <Filter />
            </button>
          </div>
        </div>
        {/* center */}

        {/* right */}
        <div className="flex items-center space-x-3">
          {/* quick action */}
          <button className="hidden group lg:flex items-center space-x-2 px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="p-1 bg-white rounded-full transform group-hover:rotate-[360deg] transition-transform duration-300">
              <Plus className="text-violet-800 w-4 h-4 font-bold" />
            </div>
            <span className="text-sm font-medium transform group-hover:translate-x-1 transition-transform duration-300">
              New
            </span>
          </button>
          {/* quick action */}

          {/* toggle */}
          <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Sun className="w-5 h-5" />
          </button>
          {/* toggle */}

          {/* notification */}
          <button className="relative group p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100  hover:dark:bg-slate-800 transition-colors">
            <Bell className="w-5 h-5" />

            <span className="absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center transform group-hover:-translate-y-1">
              3
            </span>
          </button>
          {/* notification */}

          {/* setting */}
          <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          {/* setting */}

          {/* user profile */}
          <div className="flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700">
            <img
              src={logo}
              alt="user"
              className="w-8 h-8 rounded-full ring-2 ring-blue-500"
            />

            <div className="hidden md:block">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Md Sofian Hasan
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Administrator
              </p>
            </div>

            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
          {/* user profile */}
        </div>
        {/* right */}
      </div>
    </div>
  );
}

export default Header;
