import React, { useState } from 'react';
import AdminImageUploader from '../../components/dashboard/AdminImageUploader';
import AdminPortfolioUploader from '../../components/dashboard/AdminPortfolioUploader';

const Library = () => {
  const [activeTab, setActiveTab] = useState('images');

  return (
    <div className="p-6 font-playFair">
      <div className="flex mb-6 space-x-2">
        <button
          className={`px-6 py-3 rounded-t-lg font-medium transition-colors duration-200 ${
            activeTab === 'images'
              ? 'bg-white text-blue-600 shadow border-t border-l border-r border-gray-200'
              : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
          }`}
          onClick={() => setActiveTab('images')}
        >
          Image Uploader
        </button>
        <button
          className={`px-6 py-3 rounded-t-lg font-medium transition-colors duration-200 ${
            activeTab === 'portfolio'
              ? 'bg-white text-blue-600 shadow border-t border-l border-r border-gray-200'
              : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
          }`}
          onClick={() => setActiveTab('portfolio')}
        >
          Portfolio Uploader
        </button>
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-b-lg rounded-tr-lg shadow">
        {activeTab === 'images' && <AdminImageUploader />}
        {activeTab === 'portfolio' && <AdminPortfolioUploader />}
      </div>
    </div>
  );
};

export default Library;