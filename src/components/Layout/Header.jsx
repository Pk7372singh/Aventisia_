import React, { useState } from "react";
import { Search, Bell, ChevronDown, Layout } from "lucide-react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState("Workspace 1");

  const workspaces = ["Workspace 1", "Workspace 2", "Workspace 3"];

  return (
    <header className="bg-secondary border-b border-border-gray pl-10 pr-3 md:px-8 py-2 md:py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-3">
        <Layout size={18} className="text-white md:w-6 md:h-6" />

        <h2 className="text-sm sm:text-base md:text-2xl font-semibold text-white">
          Workspace
        </h2>
        <div className="relative">
          <div className="bg-gray-800/50 rounded-full px-2 md:px-4 py-1 border border-gray-700">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-white"
            >
              <span className="text-xs sm:text-sm md:text-base font-semibold">
                {selectedWorkspace}
              </span>

              <ChevronDown
                size={14}
                className={`text-white transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute top-full left-0 mt-2 w-40 md:w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20 overflow-hidden">
                {workspaces.map((workspace) => (
                  <button
                    key={workspace}
                    onClick={() => {
                      setSelectedWorkspace(workspace);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 md:px-4 py-2 text-xs sm:text-sm md:text-base ${
                      selectedWorkspace === workspace
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700"
                    }`}
                  >
                    {workspace}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="hidden sm:flex flex-1 max-w-md mx-auto px-2 md:px-4">
        <div className="relative w-full">
          <Search
            size={16}
            className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-8 md:pl-10 pr-3 md:pr-4 py-1.5 md:py-2 text-xs sm:text-sm md:text-base border border-gray-700 rounded-lg bg-secondary text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <button className="p-1.5 md:p-2 hover:bg-gray-700 rounded-full transition-colors">
          <Bell size={16} className="md:w-5 md:h-5 text-white" />
        </button>

        <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-xs sm:text-sm bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer hover:opacity-80">
          OK
        </div>
      </div>
    </header>
  );
};

export default Header;
