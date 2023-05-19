import React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalHeader from '../header/header'
import LeftSidebar from '../sidebar/leftsidebar'
import RightSidebar from '../sidebar/rightsidebar'

const GlobalLayout = () => {
  return (
    <div className='max-w-[1250px] mx-auto bg-white w-full'>
      <GlobalHeader />
      <div className='flex pt-4 gap-5 lg:flex-nowrap flex-wrap'>
        <LeftSidebar />
        <Outlet />
        <RightSidebar />
      </div>
    </div>
  )
}

export default GlobalLayout
