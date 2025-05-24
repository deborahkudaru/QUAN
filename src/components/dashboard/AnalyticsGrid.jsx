import React from "react";
import UserLocations from "./UserLocations";
import RecentActivity from "./RecentActivity";

const AnalyticsGrid = ({ userLocations, recentActivity }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <UserLocations locations={userLocations} />
    <RecentActivity activities={recentActivity} />
  </div>
);

export default AnalyticsGrid;