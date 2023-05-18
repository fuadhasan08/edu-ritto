import React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalHeader from '../header/header'

const GlobalLayout = () => {
  return (
    <div className='max-w-[1250px] mx-auto bg-white w-full'>
      <GlobalHeader />
      <Outlet />
    </div>
  )
}

export default GlobalLayout
