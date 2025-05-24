import React from "react";

const ActiveFiltersDisplay = ({ filters }) => (
  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
    <div className="flex items-center">
      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
      <p className="text-blue-800 text-sm">
        <strong>Active Filters:</strong> {Object.values(filters).join(' • ')}
      </p>
    </div>
  </div>
);

export default ActiveFiltersDisplay;
