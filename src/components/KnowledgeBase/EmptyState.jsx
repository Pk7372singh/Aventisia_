import React from 'react';
import { Database, Plus } from 'lucide-react';
import Button from '../UI/Button';

const EmptyState = ({ onCreateClick }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <Database size={48} className="text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-2">No Knowledge Bases Found</h3>
      <p className="text-gray-500 text-center mb-8 max-w-md">
        Get started by creating your first knowledge base. Add documents, websites, or text files to build your knowledge repository.
      </p>
      
    </div>
  );
};

export default EmptyState;