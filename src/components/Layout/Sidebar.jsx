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
} from "lucide-react";

const Sidebar = () => {
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
    knowledgeBase: {
      title: "Knowledge Base",
      icon: null,
      isLink: true,
    },
    keyStore: {
      title: "Key Store",
      icon: null,
      isLink: true,
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

  return (
    <aside className=" hidden md:block w-64 bg-sidebar-bg text-white flex-shrink-0 h-screen overflow-y-auto scrollbar-custom">
      <div className="p-6">
        <nav className="space-y-6">
          <div>
            <button
              onClick={() => toggleMenu("myProjects")}
              className="w-full flex items-center justify-between text-gray-400 text-xs font-semibold mb-2 hover:text-gray-400 transition-colors"
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
                    className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group"
                  >
                    <item.icon
                      size={18}
                      className="text-gray-800 group-hover:text-primary"
                    />
                    <span className="text-sm text-gray-800 group-hover:text-primary">
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
              className="w-full flex items-center justify-between text-gray-400 text-xs font-semibold mb-2 hover:text-gray-300 transition-colors"
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
                    className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group"
                  >
                    <item.icon
                      size={18}
                      className="text-gray-800 group-hover:text-primary"
                    />
                    <span className=" text-sm text-gray-800 group-hover:text-primary">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3 px-2 py-2 rounded-lg bg-primary/20 text-primary border-l-2 border-primary">
            <Library size={18} />
            <span className="font-medium">Knowledge Base</span>
          </div>
          <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
            <Key size={18} className="text-gray-800" />
            <span className=" text-sm text-gray-800">Key Store</span>
          </div>
          <div>
            <div className="text-gray-400 text-xs font-semibold mb-2">
              {menuItems.admin.title}
            </div>
            <div className="space-y-1">
              {menuItems.admin.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <item.icon
                    size={18}
                    className="text-gray-800 group-hover:text-primary"
                  />
                  <span className=" text-sm text-gray-800 group-hover:text-primary">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
