import React from "react";
import { Globe } from "lucide-react";

const LocationItem = ({ country, users, percentage }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
    <div className="flex items-center">
      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
        <Globe className="w-4 h-4 text-blue-600" />
      </div>
      <span className="text-gray-900 font-medium">{country}</span>
    </div>
    <div className="text-right">
      <div className="text-gray-900 font-semibold">{users.toLocaleString()}</div>
      <div className="text-gray-500 text-sm">{percentage}%</div>
    </div>
  </div>
);

export default LocationItem;