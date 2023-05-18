import { useState } from 'react'
import { FaCheck, FaRegEnvelope, FaPhoneAlt, FaFacebook } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'

const TopBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='text-white bg-primary px-4 sm:py-1 py-2 sm:block flex justify-between items-center'>
      <div className='sm:flex justify-between flex-wrap gap-y-2 sm:gap-x-2 hidden'>
        <div className='flex items-center gap-x-2'>
          <FaCheck />
          <p className='font-eng text-[18px]'>EIIN: 11797</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <FaRegEnvelope />
          <p className='font-eng text-[18px]'>example@gmail.com</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <FaPhoneAlt />
          <p className='font-eng text-[18px]'>+880170390303</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <FaFacebook />
          <p className='font-eng text-[18px]'>Ritto360</p>
        </div>
      </div>
      <div className='flex items-center gap-x-2 pb-1 sm:hidden'>
        <FaCheck />
        <p className='font-eng text-sm hover:text-primary'>EIIN: 11797</p>
      </div>
      <div className='text-right relative sm:hidden'>
        <p
          className='inline-flex items-center text-sm '
          onClick={() => {
            setOpen((old) => !old)
          }}
        >
          Contact Infos. <FiInfo className='ml-2' />
        </p>
      </div>
      <div
        className={`absolute bg-white text-body shadow-md rounded-sm top-10 right-0 space-y-3 px-5 py-4 transition-all duration-300 ${
          open
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-5'
        }`}
      >
        <div className='flex items-center gap-x-2 border-b border-gray-200 pb-1'>
          <FaRegEnvelope className='text-primary' />
          <a href='#' className='font-eng text-sm hover:text-primary'>
            example@gmail.com
          </a>
        </div>
        <div className='flex items-center gap-x-2 border-b border-gray-200 pb-1'>
          <FaPhoneAlt className='text-primary' />
          <a href='#' className='font-eng text-sm hover:text-primary'>
            +880170390303
          </a>
        </div>
        <div className='flex items-center gap-x-2'>
          <FaFacebook className='text-primary' />
          <a href='#' className='font-eng text-sm hover:text-primary'>
            Ritto360
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
