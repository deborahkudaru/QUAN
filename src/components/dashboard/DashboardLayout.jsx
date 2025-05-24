import React from 'react';
import SideBar from './SideBar';
import Header from './Header';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <div className="w-[227px] fixed left-0 top-0 bottom-0 bg-white">
        <SideBar />
      </div>

      <div className="ml-[227px] w-full flex flex-col">
        <Header />

        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
