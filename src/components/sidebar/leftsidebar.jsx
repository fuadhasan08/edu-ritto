import useFetch from '../../hooks/useFetch'
import { FaSquare } from 'react-icons/fa'

const LeftSidebar = () => {
  const fetchedData = useFetch(
    `${import.meta.env.VITE_API_URI}wp-json/mycustomapi/v1/menu2`
  )

  return (
    <div className='px-2 lg:pr-0 lg:pl-2 lg:col-span-2'>
      <ul className='space-y-1.5'>
        {fetchedData.map((item) => {
          const { id, title, url } = item

          return (
            <li
              key={id}
              className='cursor-pointer bg-secondary rounded-sm px-2 py-0.5 group hover:bg-primary transition-all duration-300 flex items-center gap-x-2 text-sm text-text'
            >
              <FaSquare className='group-hover:text-white' />
              <a
                href={`/${url}`}
                className='group-hover:text-white group-hover:underline w-full'
              >
                {title}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LeftSidebar
