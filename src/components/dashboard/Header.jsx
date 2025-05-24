import React from "react";
import { LiaUserSolid } from "react-icons/lia";

const Header = () => {
  return (
    <div className="border-b border-gray-300 mx-7">
      <div className="flex justify-end py-3.5">
        <div className="border border-gray-700 p-1 rounded-full">
          <LiaUserSolid className="text-2xl text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default Header;
