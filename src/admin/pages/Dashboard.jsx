import React, { useState } from 'react';
import Filters from '../../components/dashboard/Filters';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import BarChart from '../../components/dashboard/Barchart';
import StatsCard from '../../components/dashboard/StatsCard';

const Dashboard = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    1: "Last 7 days",
    2: "All Users",
    3: "All Countries",
  });

  const handleFilterChange = (filterId, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterId]: value,
    }));
  };

  return (
    // <DashboardLayout>
    <>
          <Filters onFilterChange={handleFilterChange} />
      <div className='grid grid-cols-2 pl-4 pr-7'>
      <StatsCard filters={selectedFilters} />
      <BarChart />
      </div></>

    //* </DashboardLayout> *
  );
};

export default Dashboard;
