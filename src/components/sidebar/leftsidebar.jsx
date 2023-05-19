import useFetch from '../../hooks/useFetch'
import { FaSquare } from 'react-icons/fa'

const LeftSidebar = () => {
  const fetchedData = useFetch(
    'https://demo.ritto360.com/eduritto/wp-json/mycustomapi/v1/menu2'
  )

  return (
    <div className='lg:max-w-[200px] w-full px-2 lg:pr-- lg:pl-2'>
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