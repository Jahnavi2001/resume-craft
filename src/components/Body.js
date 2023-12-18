import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'

const Body = () => {

  return (
    <div className='dark'>
      <Outlet/>
    </div>
  )
}

export default Body
