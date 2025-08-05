import React from 'react';
import SideBar from './SideBar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100 sm:flex-row">
      {/* Sidebar */}
      <div className="w-full sm:w-[227px] sm:fixed sm:left-0 sm:top-0 sm:bottom-0 bg-white z-20">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 sm:ml-[227px] flex flex-col">
        <Header />
        <div className="p-2 sm:p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
