import React, { useState, useEffect } from "react";
import MainLayout from "./components/Layout/MainLayout";
import KnowledgeBaseList from "./components/KnowledgeBase/KnowledgeBaseList";
import CreateModal from "./components/Modal/CreateModal";
import Button from "./components/UI/Button";
import { Plus, Search } from "lucide-react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [knowledgeBases, setKnowledgeBases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("knowledgeBases");
    if (saved) {
      setKnowledgeBases(JSON.parse(saved));
    } else {
      setKnowledgeBases([]);
    }
  }, []);

  const filteredKnowledgeBases = knowledgeBases.filter(
    (kb) =>
      kb.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      kb.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleCreateKnowledgeBase = (newKnowledgeBase) => {
    const updated = [newKnowledgeBase, ...knowledgeBases];
    setKnowledgeBases(updated);
    localStorage.setItem("knowledgeBases", JSON.stringify(updated));
    setCurrentPage(1);
  };

  const handleCardClick = (knowledgeBase) => {
    console.log("Clicked:", knowledgeBase);
  };

  return (
    <MainLayout>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-black">Knowledge Bases</h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Search Bar - Chota */}
          <div className="relative">
            <Search
              className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-3 py-1.5 w-48 text-sm border border-black rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white text-gray-900 placeholder-gray-500"
            />
          </div>

          <Button
            onClick={() => setIsModalOpen(true)}
            variant="primary"
            size="sm"
          >
            <Plus size={16} />
            Create New
          </Button>
        </div>
      </div>

      <KnowledgeBaseList
        knowledgeBases={filteredKnowledgeBases}
        onCardClick={handleCardClick}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      <CreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateKnowledgeBase}
      />
    </MainLayout>
  );
}

export default App;
