import React, { useState } from "react";
import {
  Bot,
  Cpu,
  Library,
  Rocket,
  Globe,
  Clock,
  Zap,
  Briefcase,
  PlayCircle,
  CheckCircle,
  Key,
  Users,
  Puzzle,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";

const MobileSidebar = ({ isOpen, onClose }) => {
  const [openMenus, setOpenMenus] = useState({
    myProjects: true,
    orchestrator: true,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menuItems = {
    myProjects: {
      title: "MY PROJECTS",
      icon: null,
      items: [
        { name: "Agents", icon: Bot },
        { name: "AI Models", icon: Cpu },
        { name: "Library", icon: Library },
      ],
    },
    orchestrator: {
      title: "ORCHESTRATOR",
      icon: null,
      items: [
        { name: "Published", icon: Rocket },
        { name: "Machines", icon: Globe },
        { name: "Queues", icon: Clock },
        { name: "Triggers", icon: Zap },
        { name: "Jobs", icon: Briefcase },
        { name: "Executions", icon: PlayCircle },
        { name: "Vault", icon: CheckCircle },
      ],
    },
    admin: {
      title: "ADMIN",
      icon: null,
      items: [
        { name: "Tenant", icon: Users },
        { name: "Integrations", icon: Puzzle },
      ],
    },
  };
  const handleItemClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      <aside className="fixed top-0 left-0 w-64 bg-sidebar-bg text-gray-900 h-full overflow-y-auto z-50 shadow-2xl animate-slide-in-right">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Knowledge Base
            </h1>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} className="text-gray-700" />
            </button>
          </div>

          <nav className="space-y-6">
            <div>
              <button
                onClick={() => toggleMenu("myProjects")}
                className="w-full flex items-center justify-between text-gray-500 text-xs font-semibold mb-2 hover:text-gray-700 transition-colors"
              >
                <span>{menuItems.myProjects.title}</span>
                {openMenus.myProjects ? (
                  <ChevronDown size={14} />
                ) : (
                  <ChevronRight size={14} />
                )}
              </button>
              {openMenus.myProjects && (
                <div className="space-y-1">
                  {menuItems.myProjects.items.map((item) => (
                    <div
                      key={item.name}
                      onClick={handleItemClick}
                      className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                    >
                      <item.icon
                        size={18}
                        className="text-gray-500 group-hover:text-primary"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-primary">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleMenu("orchestrator")}
                className="w-full flex items-center justify-between text-gray-500 text-xs font-semibold mb-2 hover:text-gray-700 transition-colors"
              >
                <span>{menuItems.orchestrator.title}</span>
                {openMenus.orchestrator ? (
                  <ChevronDown size={14} />
                ) : (
                  <ChevronRight size={14} />
                )}
              </button>
              {openMenus.orchestrator && (
                <div className="space-y-1">
                  {menuItems.orchestrator.items.map((item) => (
                    <div
                      key={item.name}
                      onClick={handleItemClick}
                      className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                    >
                      <item.icon
                        size={18}
                        className="text-gray-500 group-hover:text-primary"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-primary">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              onClick={handleItemClick}
              className="flex items-center gap-3 px-2 py-2 rounded-lg bg-primary/10 text-primary border-l-2 border-primary cursor-pointer"
            >
              <Library size={18} />
              <span className="font-medium">Knowledge Base</span>
            </div>

            <div
              onClick={handleItemClick}
              className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <Key size={18} className="text-gray-500" />
              <span className="text-sm text-gray-700">Key Store</span>
            </div>
            <div>
              <div className="text-gray-500 text-xs font-semibold mb-2">
                {menuItems.admin.title}
              </div>
              <div className="space-y-1">
                {menuItems.admin.items.map((item) => (
                  <div
                    key={item.name}
                    onClick={handleItemClick}
                    className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                  >
                    <item.icon
                      size={18}
                      className="text-gray-500 group-hover:text-primary"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-primary">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
