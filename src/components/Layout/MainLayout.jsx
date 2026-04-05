import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import { Menu } from "lucide-react";

const MainLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="md:hidden fixed top-2 left-0 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-1.5 bg-primary/90 rounded-md text-white shadow-md hover:bg-primary transition-colors"
        >
          <Menu size={16} />
        </button>
      </div>

      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MobileSidebar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
