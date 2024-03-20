import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';


const Header = () => {
  return (
    <div className='bg-transparent mx-auto flex w-full  items-center justify-between flex-wrap z-20 shadow-md p-4'>
      <Logo />
      <Navbar />
    </div>
  )
}

export default Header