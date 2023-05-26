import { Link } from 'react-router-dom';

const MenuSingleItem = ({ url, title }) => {
  return (
    <li className='js-nav-dropdown group relative'>
      <Link
        to={url}
        className='dropdown-toggle flex items-center justify-between py-3 font-display lg:text-white lg:px-6 lg:bg-primary lg:rounded-sm text-base font-medium'
      >
        {title}
      </Link>
    </li>
  );
};

export default MenuSingleItem;
