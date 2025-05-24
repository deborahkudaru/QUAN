import React from "react";
import { Users, Clock, Timer } from "lucide-react";
import StatsCard from "./StatsCard";

const StatsGrid = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <StatsCard
      title="Total Users"
      value={data.totalUsers.toLocaleString()}
      subtitle="Unique visitors to your site"
      icon={Users}
      trend={12.5}
    />
    <StatsCard
      title="Average Time Spent"
      value={data.averageTimeSpent}
      subtitle="Per user session"
      icon={Clock}
      trend={8.3}
    />
    <StatsCard
      title="Total Time Spent"
      value={data.totalTimeSpent}
      subtitle="Across all users"
      icon={Timer}
      trend={15.7}
    />
  </div>
);

export default StatsGrid;
