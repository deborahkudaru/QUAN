import React from "react";
import { MapPin } from "lucide-react";
import LocationItem from "./LocationItem";

const UserLocations = ({ locations }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <div className="flex items-center mb-6">
      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
      <h2 className="text-xl font-semibold text-gray-900">User Locations</h2>
    </div>
    <div className="space-y-1">
      {locations.map((location, index) => (
        <LocationItem
          key={index}
          country={location.country}
          users={location.users}
          percentage={location.percentage}
        />
      ))}
    </div>
  </div>
);

export default UserLocations;