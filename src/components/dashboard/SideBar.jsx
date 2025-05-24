import React from "react";
import { Link } from "react-router-dom";
import { TbReportAnalytics } from "react-icons/tb";
import { AiTwotonePicture } from "react-icons/ai";
import { PiArrowsMergeThin } from "react-icons/pi";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="font-playFair p-7 bg-white">
      <div>
        <ul className="flex flex-col gap-7 mt-10 font-medium text-gray-700">
          <li className="flex gap-2">
            <TbReportAnalytics className="self-center" />
            <Link>Reports</Link>
          </li>
          <li className="flex gap-2">
            <AiTwotonePicture className="self-center" />
            <Link>Library</Link>
          </li>
          <li className="flex gap-2">
            <PiArrowsMergeThin className="self-center" />
            <Link>Get Started</Link>
          </li>
          <li className="flex gap-2">
            <IoSettingsOutline className="self-center" />
            <Link>Settings</Link>
          </li>
          <li className="flex gap-2">
            <IoLogOutOutline className="self-center" />
            <Link>Log Out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
