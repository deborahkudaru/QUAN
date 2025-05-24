import React from "react";
import { TrendingUp } from "lucide-react";
import ActivityItem from "./ActivityItem";

const RecentActivity = ({ activities }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <div className="flex items-center mb-6">
      <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
      <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
    </div>
    <div className="space-y-1">
      {activities.map((activity, index) => (
        <ActivityItem
          key={index}
          time={activity.time}
          location={activity.location}
          duration={activity.duration}
        />
      ))}
    </div>
  </div>
);

export default RecentActivity;