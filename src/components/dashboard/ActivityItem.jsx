import React from "react";
import { Timer } from "lucide-react";

const ActivityItem = ({ time, location, duration }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
    <div>
      <div className="text-gray-900 font-medium">{location}</div>
      <div className="text-gray-500 text-sm">{time}</div>
    </div>
    <div className="flex items-center text-gray-600">
      <Timer className="w-4 h-4 mr-1" />
      <span className="text-sm">{duration}</span>
    </div>
  </div>
);

export default ActivityItem;
