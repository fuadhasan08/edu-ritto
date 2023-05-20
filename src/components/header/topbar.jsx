import { useState } from 'react'
import { FaCheck, FaRegEnvelope, FaPhoneAlt, FaFacebook } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'
import useFetch from '../../hooks/useFetch'

const TopBar = () => {
  const [open, setOpen] = useState(false)

  const fetchedData = useFetch('wp-json/redux/v1/data')

  const { eiin_no, email, phone, social } = fetchedData

  return (
    <div className='text-white bg-primary px-4 sm:py-1 py-2 sm:block flex justify-between items-center'>
      <div className='flex justify-between flex-wrap gap-y-2 sm:gap-x-2'>
        {eiin_no && (
          <div className='flex items-center gap-x-2'>
            <FaCheck />
            <p className='font-eng text-sm sm:text-[18px]'>EIIN: {eiin_no}</p>
          </div>
        )}

        {email && (
          <div className='hidden sm:flex items-center gap-x-2'>
            <FaRegEnvelope />
            <a className='font-eng text-[18px]' href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        )}

        {phone && (
          <div className='hidden sm:flex items-center gap-x-2'>
            <FaPhoneAlt />
            <a className='font-eng text-[18px]' href={`tel:${phone}`}>
              {phone}
            </a>
          </div>
        )}

        {social && (
          <div className='hidden sm:flex items-center gap-x-2'>
            <FaFacebook />
            <p className='font-eng text-[18px]'>{social}</p>
          </div>
        )}
      </div>

      {(email || social || phone) && (
        <>
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
            {email && (
              <div className='flex items-center gap-x-2 border-b border-gray-200 pb-1'>
                <FaRegEnvelope className='text-primary' />
                <a
                  href={`mailto:${email}`}
                  className='font-eng text-sm hover:text-primary'
                >
                  {email}
                </a>
              </div>
            )}
            {phone && (
              <div className='flex items-center gap-x-2 border-b border-gray-200 pb-1'>
                <FaPhoneAlt className='text-primary' />
                <a
                  href={`tel:${phone}`}
                  className='font-eng text-sm hover:text-primary'
                >
                  {phone}
                </a>
              </div>
            )}

            {social && (
              <div className='flex items-center gap-x-2'>
                <FaFacebook className='text-primary' />
                <a href='#' className='font-eng text-sm hover:text-primary'>
                  {social}
                </a>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default TopBar
