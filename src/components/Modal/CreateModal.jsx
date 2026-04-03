import React, { useState } from 'react';
import { X } from 'lucide-react';
import Button from '../UI/Button';

const CreateModal = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    vectorStore: 'Qdrant',
    llmModel: 'text-embedding-ada-002'
  });
  
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 50) {
      newErrors.name = 'Name must be less than 50 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newKnowledgeBase = {
        id: Date.now(),
        name: formData.name,
        description: formData.description || 'No description provided',
        createdOn: new Date().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }).replace(/\//g, '/'),
        vectorStore: formData.vectorStore,
        llmModel: formData.llmModel
      };
      onCreate(newKnowledgeBase);
      setFormData({
        name: '',
        description: '',
        vectorStore: 'Qdrant',
        llmModel: 'text-embedding-ada-002'
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end">
      <div className="bg-white w-full max-w-2xl h-full overflow-y-auto shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-gray sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-xl font-bold text-black">Create New Knowledge Base</h2>
            <p className="text-xs text-black mt-1">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        
        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
              <span className="text-xs text-gray-500 ml-2">Cannot be edited later</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter knowledge base name"
              className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-border-gray'} rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter description"
              rows="3"
              className="w-full px-4 py-2 border border-border-gray rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vector Store <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.vectorStore}
              onChange={(e) => setFormData({ ...formData, vectorStore: e.target.value })}
              className="w-full px-4 py-2 border border-border-gray rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
            >
              <option value="Qdrant">Qdrant</option>
              <option value="Pinecone">Pinecone</option>
              <option value="Weaviate">Weaviate</option>
              <option value="Chroma">Chroma</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              LLM Embedding Model <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.llmModel}
              onChange={(e) => setFormData({ ...formData, llmModel: e.target.value })}
              className="w-full px-4 py-2 border border-border-gray rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
            >
              <option value="text-embedding-ada-002">text-embedding-ada-002</option>
              <option value="text-embedding-3-small">text-embedding-3-small</option>
              <option value="text-embedding-3-large">text-embedding-3-large</option>
              <option value="BAAI/bge-large-en">BAAI/bge-large-en</option>
            </select>
          </div>
          
          <div className="flex justify-end pt-4 border-t border-border-gray sticky bottom-0 bg-white">
            <Button type="submit" variant="primary">
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;