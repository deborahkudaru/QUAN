import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TbReportAnalytics } from "react-icons/tb";
import { AiTwotonePicture } from "react-icons/ai";
import { PiArrowsMergeThin } from "react-icons/pi";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import logo from "../../images/blacklogo.png";

const SideBar = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      icon: TbReportAnalytics,
      label: "Dashboard",
      path: "/dashboard"
    },
    {
      icon: AiTwotonePicture,
      label: "Library",
      path: "/dashboard/library"
    },
    {
      icon: IoSettingsOutline,
      label: "Settings",
      path: "/dashboard/settings"
    },
    {
      icon: IoLogOutOutline,
      label: "Log Out",
      path: "/logout"
    }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-white font-playFair p-7">
      <div className="mb-10">
        <Link to="/">
          <img src={logo} alt="logo" className="w-6 md:w-8" />
        </Link>
      </div>
      <div>
        <ul className="flex flex-col mt-10 font-medium text-gray-700 gap-7">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            const active = isActive(item.path);
            
            return (
              <li key={index} className="flex gap-2">
                <IconComponent className="self-center" />
                <Link 
                  to={item.path}
                  className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                    active 
                      ? 'bg-gray-800 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;