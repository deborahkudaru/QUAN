import React from 'react'
import { LiaUserSolid } from "react-icons/lia";
import logo from "../../images/blacklogo.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <div className="flex justify-between">
              <div className="">
                <Link>
                  <img src={logo} alt="logo" className="md:w-8 w-6" />
                </Link>
              </div>
              <div className="border border-gray-700 p-1 rounded-full">
               <LiaUserSolid className="text-2xl text-gray-700" />
              </div>
            </div>
    </div>
  )
}

export default Header