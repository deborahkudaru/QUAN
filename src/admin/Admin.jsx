import React from 'react';
import Filters from '../components/dashboard/Filters';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const Admin = () => {
  return (
    <DashboardLayout>
      <Filters />
    </DashboardLayout>
  );
};

export default Admin;
