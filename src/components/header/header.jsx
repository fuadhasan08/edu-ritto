import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from './topbar';
import LogoPanel from './logopanel';
import MenuWithChildren from './MenuWithChildren';
import useFetch from '../../hooks/useFetch';
import MenuSingleItem from './MenuItem';

const Header = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
  };

  const fetchedData = useFetch('wp-json/mycustomapi/v1/menu');

  useEffect(() => {
    const listener = () => {
      if (window.scrollY >= 210) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  const mobileMenu = useFetch(`wp-json/mycustomapi/v1/menu2`);

  const merged = [...fetchedData, ...mobileMenu];

  // Control sidebar navigation
  let items = document.querySelectorAll('.menu-item-has-children > a');
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function (e) {
        e.preventDefault();
        this.parentElement
          .querySelector('.sub-menu')
          .classList.toggle('active');
        this.classList.toggle('open');
      };
    }
  }

  return (
    <>
      <TopBar />
      <LogoPanel />
      <header
        className={`js-page-header z-20 w-full bg-white justify-center transition-all duration-200 pt-6 pb-3 lg:border-b lg:border-primary ${
          sticky ? '!sticky top-0 inset-x-0 border-b border-primary !py-3' : ''
        }`}
      >
        {/* navbar start */}
        <nav className='navbar navbar-area navbar-expand-lg'>
          <div className='nav-container navbar-bg'>
            <div className='responsive-mobile-menu lg:hidden flex justify-between items-center'>
              <p className='text-base font-bold mt-4'>মেনু</p>
              <button
                onClick={menuActive}
                className={active ? 'menu toggle-btn open' : 'menu toggle-btn'}
              >
                <span className='icon-left' />
                <span className='icon-right' />
              </button>
            </div>

            <div
              className={`transition-all duration-300 lg:opacity-100 lg:block ${
                active ? 'navbar-collapse block' : ' navbar-collapse hidden'
              }`}
              id='itech_main_menu'
            >
              <ul className='navbar-nav menu-open text-lg-end'>
                {fetchedData.map((item) => {
                  const { id, title, url, submenu } = item;

                  let url2 = url;

                  if (url2 == 'page/') {
                    url2 = '';
                  }

                  if (!submenu && submenu === undefined) {
                    return <MenuSingleItem key={id} url={url2} title={title} />;
                  }

                  <MenuWithChildren key={id} submenu={submenu} />;
                })}
              </ul>
            </div>
          </div>
        </nav>
        {/* navbar end */}
      </header>
    </>
  );
};

export default Header;
