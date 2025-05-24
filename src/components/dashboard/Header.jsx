import React from "react";
import { LiaUserSolid } from "react-icons/lia";

const Header = () => {
  return (
    <div>
      <div className="flex justify-end pt-7 px-7">
        <div className="border border-gray-700 p-1 rounded-full">
          <LiaUserSolid className="text-2xl text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default Header;
