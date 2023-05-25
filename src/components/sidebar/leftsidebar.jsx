import useFetch from '../../hooks/useFetch';
import { FaSquare } from 'react-icons/fa';

const LeftSidebar = () => {
  const fetchedData = useFetch(`wp-json/mycustomapi/v1/menu2`);

  return (
    <div className='px-2 lg:pr-0 lg:pl-2 lg:col-span-2'>
      <ul className='space-y-1.5'>
        {fetchedData.map((item) => {
          const { id, title, url } = item;

          return (
            // <li
            //   key={id}
            //   className='cursor-pointer border-l-2 border-pr rounded-sm px-2 py-1.5 group hover:bg-primary transition-all duration-300 flex items-center gap-x-2 text-sm text-text'
            // >
            //   <a
            //     href={`/${url}`}
            //     className='group-hover:text-white group-hover:underline w-full'
            //   >
            //     {title}
            //   </a>
            // </li>
            <li
              key={id}
              className='cursor-pointer bg-secondary rounded-sm px-2 py-1.5 group hover:bg-primary transition-all duration-300 flex items-center gap-x-2 text-base text-text font-medium'
            >
              <a
                href={`/${url}`}
                className='group-hover:text-white group-hover:underline w-full'
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
