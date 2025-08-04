import React, { useState } from 'react';
import AdminImageUploader from '../../components/dashboard/AdminImageUploader';
import AdminPortfolioUploader from '../../components/dashboard/AdminPortfolioUploader';

const Library = () => {
  const [activeTab, setActiveTab] = useState('images');

  return (
    <div className="p-6">
      <div className="flex mb-6 space-x-2">
        <button
          className={`px-6 py-3 rounded-t-lg font-medium transition-colors ${
            activeTab === 'images'
              ? 'bg-white text-blue-600 shadow-sm border-t border-l border-r border-gray-200'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('images')}
        >
          Image Uploader
        </button>
        <button
          className={`px-6 py-3 rounded-t-lg font-medium transition-colors ${
            activeTab === 'portfolio'
              ? 'bg-white text-blue-600 shadow-sm border-t border-l border-r border-gray-200'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('portfolio')}
        >
          Portfolio Uploader
        </button>
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-b-lg rounded-tr-lg shadow-sm">
        {activeTab === 'images' && <AdminImageUploader />}
        {activeTab === 'portfolio' && <AdminPortfolioUploader />}
      </div>
    </div>
  );
};

export default Library;