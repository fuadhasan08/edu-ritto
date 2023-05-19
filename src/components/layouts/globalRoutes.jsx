import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import GlobalHeader from '../header/header'
import LeftSidebar from '../sidebar/leftsidebar'
import RightSidebar from '../sidebar/rightsidebar'
import GlobalFooter from '../footer/footer'
import useFetch from '../../hooks/useFetch'
import Error from '../../pages/Error'

const GlobalLayout = () => {
  const fetchedData = useFetch('http://localhost/eduritto/wp-json/wp/v2/pages')
  const { slug } = useParams()

  let pageData = 'home'

  if (slug) {
    pageData = fetchedData.find((item) => item.slug === slug)
  }

  if (pageData) {
    return (
      <div className='max-w-[1250px] mx-auto bg-white w-full'>
        <GlobalHeader />
        <div className='flex pt-4 gap-5 lg:flex-nowrap flex-wrap'>
          <LeftSidebar />
          <Outlet />
          <RightSidebar />
        </div>
        <GlobalFooter />
      </div>
    )
  }
}

export default GlobalLayout
