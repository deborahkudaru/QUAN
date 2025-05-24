import React from 'react';
import Filters from '../components/dashboard/Filters';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import BarChart from '../components/dashboard/Barchart';
const Admin = () => {
  return (
    <DashboardLayout>
      <Filters />
      <BarChart />
    </DashboardLayout>
  );
};

export default Admin;
