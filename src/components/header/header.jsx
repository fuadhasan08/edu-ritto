import { useEffect, useState } from 'react';
import LogoPanel from './logopanel';
import TopBar from './topbar';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const MenuItem = () => {
  const fetchedData = useFetch('wp-json/mycustomapi/v1/menu');

  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

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

  return (
    <>
      <TopBar />
      <LogoPanel />
      <header
        className={`js-page-header z-20 w-full bg-white px-2 justify-center sm:-mt-4 mt-4 transition-all duration-1000 ${
          sticky ? '!sticky top-0 inset-x-0 ' : ''
        }`}
      >
        <div className='flex items-center lg:justify-center justify-between border-b border-primary py-4'>
          <div
            className={`js-mobile-menu invisible lg:visible fixed inset-x-0 top-0 z-10  items-center bg-primary opacity-0 lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent ${
              open ? 'nav-menu--is-open' : ''
            }`}
          >
            {/* nav-menu--is-open */}
            <div className='t-0 absolute left-0 z-10 flex w-full items-center justify-end bg-primary p-6 lg:hidden'>
              <button
                className='js-mobile-close group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent'
                aria-label='close mobile menu'
                onClick={() => {
                  setOpen(false);
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  className='h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z' />
                </svg>
              </button>
            </div>

            <nav className='navbar w-full mt-24 mb-8 lg:mt-0 lg:mb-0'>
              <ul className='flex-col lg:flex-row gap-1.5 flex-wrap hidden lg:flex'>
                {fetchedData.map((item) => {
                  const { id, title, url, submenu } = item;

                  let url2 = url;

                  if (url2 == 'page/') {
                    url2 = '';
                  }

                  return !submenu && submenu == undefined ? (
                    <li className='group' key={id}>
                      <Link
                        to={url2}
                        className='flex items-center justify-between py-3 font-display text-white lg:px-6 bg-primary rounded-sm text-base font-medium'
                      >
                        {title}
                      </Link>
                    </li>
                  ) : (
                    <li className='js-nav-dropdown group relative' key={id}>
                      <Link
                        to={url2}
                        className='dropdown-toggle flex items-center justify-between py-3 font-display text-white lg:px-6 bg-primary rounded-sm text-base font-medium'
                        id='navDropdown-4'
                        aria-expanded='false'
                        role='button'
                        data-bs-toggle='dropdown'
                      >
                        {title}
                        <i className='lg:hidden'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            className='h-4 w-4 dark:fill-white'
                          >
                            <path fill='none' d='M0 0h24v24H0z' />
                            <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' />
                          </svg>
                        </i>
                      </Link>
                      <ul
                        className='dropdown-menu group-hover:visible lg:invisible left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2'
                        aria-labelledby='navDropdown-4'
                      >
                        {submenu.map((item) => {
                          const { id, title, url, submenu } = item;

                          if (submenu == undefined) {
                            return (
                              <li key={id}>
                                <Link
                                  to={url}
                                  className='flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600'
                                >
                                  <span className='font-display text-sm text-body dark:text-body'>
                                    {title}
                                  </span>
                                </Link>
                              </li>
                            );
                          } else {
                            return (
                              <li
                                key={id}
                                className='js-nav-dropdown group/child relative'
                              >
                                <Link
                                  to={url}
                                  className='dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-body hover:text-accent focus:text-accent dark:text-body dark:hover:text-accent dark:focus:text-accent lg:px-5'
                                  id='navDropdown-4'
                                  aria-expanded='false'
                                  role='button'
                                  data-bs-toggle='dropdown'
                                >
                                  {title}
                                  <i className='lg:hidden'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 24 24'
                                      width='24'
                                      height='24'
                                      className='h-4 w-4 dark:fill-white'
                                    >
                                      <path fill='none' d='M0 0h24v24H0z' />
                                      <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' />
                                    </svg>
                                  </i>
                                </Link>
                                <ul
                                  className='dropdown-menu group-hover/child:visible lg:invisible -left-52 top-0 z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover/child:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover/child:translate-y-2'
                                  aria-labelledby='navDropdown-4'
                                >
                                  {submenu.map((item) => {
                                    const { id, title, url } = item;
                                    return (
                                      <li key={id}>
                                        <Link
                                          to={url}
                                          className='flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600'
                                        >
                                          <span className='font-display text-sm text-body dark:text-body'>
                                            {title}
                                          </span>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
              <ul className='flex lg:hidden flex-col lg:flex-row gap-1.5 flex-wrap '>
                {merged.map((item) => {
                  const { id, title, url, submenu } = item;

                  let url2 = url;

                  if (url2 == 'page/') {
                    url2 = '';
                  }

                  return !submenu && submenu == undefined ? (
                    <li className='group' key={id}>
                      <Link
                        to={url2}
                        className='flex items-center justify-between py-3 font-display text-white lg:px-6 bg-primary rounded-sm text-base font-medium'
                      >
                        {title}
                      </Link>
                    </li>
                  ) : (
                    <li className='js-nav-dropdown group relative' key={id}>
                      <Link
                        to={url2}
                        className='dropdown-toggle flex items-center justify-between py-3 font-display text-white lg:px-6 bg-primary rounded-sm text-base font-medium'
                        id='navDropdown-4'
                        aria-expanded='false'
                        role='button'
                        data-bs-toggle='dropdown'
                      >
                        {title}
                        <i className='lg:hidden'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            className='h-4 w-4 dark:fill-white'
                          >
                            <path fill='none' d='M0 0h24v24H0z' />
                            <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' />
                          </svg>
                        </i>
                      </Link>
                      <ul
                        className='dropdown-menu group-hover:visible lg:invisible left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2'
                        aria-labelledby='navDropdown-4'
                      >
                        {submenu.map((item) => {
                          const { id, title, url, submenu } = item;

                          if (submenu == undefined) {
                            return (
                              <li key={id}>
                                <Link
                                  to={url}
                                  className='flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600'
                                >
                                  <span className='font-display text-sm text-body dark:text-body'>
                                    {title}
                                  </span>
                                </Link>
                              </li>
                            );
                          } else {
                            return (
                              <li
                                key={id}
                                className='js-nav-dropdown group/child relative'
                              >
                                <Link
                                  to={url}
                                  className='dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-body hover:text-accent focus:text-accent dark:text-body dark:hover:text-accent dark:focus:text-accent lg:px-5'
                                  id='navDropdown-4'
                                  aria-expanded='false'
                                  role='button'
                                  data-bs-toggle='dropdown'
                                >
                                  {title}
                                  <i className='lg:hidden'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 24 24'
                                      width='24'
                                      height='24'
                                      className='h-4 w-4 dark:fill-white'
                                    >
                                      <path fill='none' d='M0 0h24v24H0z' />
                                      <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' />
                                    </svg>
                                  </i>
                                </Link>
                                <ul
                                  className='dropdown-menu group-hover/child:visible lg:invisible -left-52 top-0 z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover/child:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover/child:translate-y-2'
                                  aria-labelledby='navDropdown-4'
                                >
                                  {submenu.map((item) => {
                                    const { id, title, url } = item;
                                    return (
                                      <li key={id}>
                                        <Link
                                          to={url}
                                          className='flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600'
                                        >
                                          <span className='font-display text-sm text-body dark:text-body'>
                                            {title}
                                          </span>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className='flex justify-between lg:hidden flex-1 items-center'>
            <p className='text-base font-bold'>মেনু</p>
            <button
              className='js-mobile-toggle group ml-2 flex h-10 w-10 items-center justify-center border border-primary bg-primary text-body'
              aria-label='open mobile menu'
              onClick={() => {
                setOpen((old) => !old);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='24'
                height='24'
                className='h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white'
              >
                <path fill='none' d='M0 0h24v24H0z' />
                <path d='M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z' />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default MenuItem;
