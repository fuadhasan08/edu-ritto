import { BsChevronDown } from 'react-icons/bs';

import MenuSingleItem from './MenuItem';

const MenuWithChildren = ({ submenu }) => {
  return (
    <li className='menu-item-has-children js-nav-dropdown group relative'>
      <a
        href='#'
        className='dropdown-toggle items-center py-3 font-display text-white lg:px-6 px-3 bg-primary rounded-sm text-base font-medium inline-flex w-full justify-between'
      >
        Title <BsChevronDown className='font-semibold ml-2' />
      </a>
      <ul className='sub-menu'>
        <MenuSingleItem />
      </ul>
    </li>
  );
};

export default MenuWithChildren;
