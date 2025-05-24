import React from 'react'
import SideBar from '../components/dashboard/SideBar'
import Filters from '../components/dashboard/Filters'

const Admin = () => {
  return (
    <div className='flex '>
      <div className=''>
       <SideBar />
      </div>
      <div>
        <Filters />
      </div>
    </div>
  )
}

export default Admin