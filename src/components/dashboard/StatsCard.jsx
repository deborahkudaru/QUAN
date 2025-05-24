import React from "react";

const dummyData = {
  "Last 7 days": {
    "All Users": {
      "All Countries": { total: 200, new: 80, returning: 120 },
      "United States": { total: 90, new: 30, returning: 60 },
      "Europe": { total: 50, new: 20, returning: 30 },
      "Asia": { total: 30, new: 15, returning: 15 },
      "Americas": { total: 30, new: 15, returning: 15 },
    },
    "New Users": {
      "All Countries": { total: 80 },
      "United States": { total: 30 },
      "Europe": { total: 20 },
      "Asia": { total: 15 },
      "Americas": { total: 15 },
    },
    "Returning Users": {
      "All Countries": { total: 120 },
      "United States": { total: 60 },
      "Europe": { total: 30 },
      "Asia": { total: 15 },
      "Americas": { total: 15 },
    },
  },
  "All time": {
    "All Users": {
      "All Countries": { total: 7500, new: 3000, returning: 4500 },
      "United States": { total: 3200, new: 1400, returning: 1800 },
      "Europe": { total: 2100, new: 900, returning: 1200 },
      "Asia": { total: 1200, new: 500, returning: 700 },
      "Americas": { total: 1000, new: 400, returning: 600 },
    },
    "New Users": {
      "All Countries": { total: 3000 },
      "United States": { total: 1400 },
      "Europe": { total: 900 },
      "Asia": { total: 500 },
      "Americas": { total: 400 },
    },
    "Returning Users": {
      "All Countries": { total: 4500 },
      "United States": { total: 1800 },
      "Europe": { total: 1200 },
      "Asia": { total: 700 },
      "Americas": { total: 600 },
    },
  },
};

const StatsCard = ({ filters }) => {
  const timeFrame = filters[1] || "Last 7 days";
  const userType = filters[2] || "All Users";

  const allLocationsData = dummyData?.[timeFrame]?.[userType] || {};

  // Use "All Countries" data as the main stat for Total/New/Returning
  const mainStats = allLocationsData["All Countries"] || { total: 0, new: 0, returning: 0 };

  const cardClass =
    "bg-white rounded-xl shadow-md p-4 flex flex-col items-start justify-center";

  // Extract all specific locations except "All Countries"
  const locationStats = Object.entries(allLocationsData)
    .filter(([loc]) => loc !== "All Countries");

  return (
    <div className=" font-playFair space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className={cardClass}>
          <p className="text-gray-500 text-sm">Total Users</p>
          <h3 className="text-xl font-bold text-black">{mainStats.total || 0}</h3>
        </div>
        <div className={cardClass}>
          <p className="text-gray-500 text-sm">New Users</p>
          <h3 className="text-xl font-bold text-black">{mainStats.new || 0}</h3>
        </div>
        <div className={cardClass}>
          <p className="text-gray-500 text-sm">Returning Users</p>
          <h3 className="text-xl font-bold text-black">{mainStats.returning || 0}</h3>
        </div>
      </div>

      {/* Location breakdown */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <h3 className="text-md font-semibold mb-2 text-gray-700">Users by Location</h3>
        <ul className="text-gray-800 space-y-1">
          {locationStats.length === 0 ? (
            <li>No location data available.</li>
          ) : (
            locationStats.map(([location, stat]) => (
              <li key={location} className="flex justify-between border-b py-1">
                <span>{location}</span>
                <span>{stat.total || 0} users</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default StatsCard;
