import React from 'react';
import KnowledgeCard from './KnowledgeCard';
import EmptyState from './EmptyState';
import Pagination from '../UI/Pagination';

const KnowledgeBaseList = ({ knowledgeBases, onCardClick, currentPage, itemsPerPage, onPageChange }) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = knowledgeBases.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(knowledgeBases.length / itemsPerPage);

  if (knowledgeBases.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="animate-slide-up">
      {/* Grid with 3 cards per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((kb, index) => (
          <KnowledgeCard 
            key={kb.id || index} 
            knowledge={kb} 
            onClick={() => onCardClick(kb)}
          />
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={knowledgeBases.length}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default KnowledgeBaseList;