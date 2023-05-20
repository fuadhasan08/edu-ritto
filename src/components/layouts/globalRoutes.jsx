import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import GlobalHeader from '../header/header'
import LeftSidebar from '../sidebar/leftsidebar'
import RightSidebar from '../sidebar/rightsidebar'
import GlobalFooter from '../footer/footer'
import useFetch from '../../hooks/useFetch'

const GlobalLayout = () => {
  return (
    <div className='max-w-[1250px] mx-auto bg-white w-full'>
      <GlobalHeader />
      <div className='lg:grid lg:grid-cols-12 pt-4 gap-5'>
        <LeftSidebar />
        <Outlet />
        <RightSidebar />
      </div>
      <GlobalFooter />
    </div>
  )
}

export default GlobalLayout
