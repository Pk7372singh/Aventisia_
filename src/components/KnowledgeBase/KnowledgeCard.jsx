import React from "react";
import { MoreVertical } from "lucide-react";

const KnowledgeCard = ({ knowledge, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl border border-border-gray hover:shadow-lg transition-all duration-300 cursor-pointer group animate-fade-in flex flex-col h-full"
    >
      <div className="flex justify-end p-4 pb-0">
        <button
          className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <MoreVertical
            size={18}
            className="text-gray-400 hover:text-gray-600"
          />
        </button>
      </div>
      <div className="flex-1 p-4 pt-0">
        <h3 className="text-lg font-semibold text-secondary mb-2">
          {knowledge.name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {knowledge.description}
        </p>
      </div>
      <div className="p-4 pt-0 pb-4">
        <div className="text-xs text-gray-400 border-t border-gray-100 pt-3">
          Created On: {knowledge.createdOn}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCard;
