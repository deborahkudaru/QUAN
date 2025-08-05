import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AdminImageUploader from '../../components/dashboard/AdminImageUploader';
import AdminPortfolioUploader from '../../components/dashboard/AdminPortfolioUploader';

const Library = () => {
  const [activeTab, setActiveTab] = useState('images');

  // Animation variants
  const tabContentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2, ease: 'easeIn' }
    }
  };

  return (
    <div className="p-4 md:p-6 font-playFair">
      {/* Responsive tab buttons */}
      <div className="flex px-4 pb-2 mb-6 -mx-4 space-x-1 overflow-x-auto md:space-x-2 md:mx-0 md:px-0">
        <motion.button
          whileTap={{ scale: 0.98 }}
          className={`px-4 py-2 md:px-6 md:py-3 rounded-t-lg font-medium text-sm md:text-base transition-colors duration-200 whitespace-nowrap ${
            activeTab === 'images'
              ? 'bg-white text-blue-600 shadow border-t border-l border-r border-gray-200'
              : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
          }`}
          onClick={() => setActiveTab('images')}
        >
          Image Uploader
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.98 }}
          className={`px-4 py-2 md:px-6 md:py-3 rounded-t-lg font-medium text-sm md:text-base transition-colors duration-200 whitespace-nowrap ${
            activeTab === 'portfolio'
              ? 'bg-white text-blue-600 shadow border-t border-l border-r border-gray-200'
              : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
          }`}
          onClick={() => setActiveTab('portfolio')}
        >
          Portfolio Uploader
        </motion.button>
      </div>

      {/* Tab content with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="p-4 bg-white border border-gray-200 rounded-b-lg rounded-tr-lg shadow md:p-6"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {activeTab === 'images' && <AdminImageUploader />}
          {activeTab === 'portfolio' && <AdminPortfolioUploader />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Library;