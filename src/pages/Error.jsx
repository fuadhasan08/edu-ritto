import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='text-center'>
      <h1 className='text-red-600'>Page Not Found</h1>
      <Link href='/' className='text-primary block mt-7'>
        Back To Home
      </Link>
    </div>
  )
}

export default Error
