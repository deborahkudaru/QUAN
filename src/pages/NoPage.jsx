import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className='px-52'>
      <h1>Comming soon</h1>
      <Link to="/" className='bg-black text-white py-2 px-5'>Home page</Link>
    </div>
  )
}

export default NoPage