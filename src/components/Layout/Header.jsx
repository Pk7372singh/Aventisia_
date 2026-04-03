import React, { useState } from 'react';
import { Search, Bell, Settings, ChevronDown, Layout } from 'lucide-react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState('Workspace 1');

  const workspaces = ['Workspace 1', 'Workspace 2', 'Workspace 3'];

  return (
    <header className="bg-secondary border-b border-border-gray px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Layout size={24} className="text-white" />
        <h2 className="text-2xl font-semibold text-white">Workspace</h2>
        
        <div className="relative">
          <div className="bg-gray-800/50 rounded-full px-4 py-1.5 border border-gray-700">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-white hover:opacity-80 transition-opacity"
            >
              <span className="text-base font-semibold text-white">{selectedWorkspace}</span>
              <ChevronDown size={16} className={`text-white transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {isDropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20 overflow-hidden">
                {workspaces.map((workspace) => (
                  <button
                    key={workspace}
                    onClick={() => {
                      setSelectedWorkspace(workspace);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                      selectedWorkspace === workspace ? 'bg-primary/10 text-primary' : 'text-gray-700'
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
      
      <div className="flex-1 max-w-md mx-auto px-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-secondary text-white placeholder-gray-400"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
          <Bell size={20} className="text-white" />
        </button>
        
       
        <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity font-semibold text-white text-sm">
          OK
        </div>
      </div>
    </header>
  );
};

export default Header;