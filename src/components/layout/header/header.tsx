import React, { useRef } from 'react';
import SearchIcon from '@components/icons/search-icon';
import { siteSettings } from '@settings/site-settings';
import HeaderMenu from '@components/layout/header/header-menu';
import Logo from '@components/ui/logo';
import { useUI } from '@contexts/ui.context';
import { ROUTES } from '@utils/routes';
import { addActiveScroll } from '@utils/add-active-scroll';
import dynamic from 'next/dynamic';

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;
const Header: React.FC = () => {
  const {
    openSidebar,
    setDrawerView,
    openSearch,
    openModal,
    setModalView,
    isAuthorized,
  } = useUI();

  const siteHeaderRef = useRef() as DivElementRef;
  addActiveScroll(siteHeaderRef);

  function handleLogin() {
    setModalView('LOGIN_VIEW');
    return openModal();
  }
  function handleMobileMenu() {
    setDrawerView('MOBILE_MENU');
    return openSidebar();
  }

  return (
    <header
      id='siteHeader'
      ref={siteHeaderRef}
      className='w-full h-16 sm:h-20 lg:h-24 relative z-20'
    >
      <div className='innerSticky text-gray-700 body-font fixed bg-white w-full h-16 sm:h-20 lg:h-24 z-20 pl-5 md:pl-0 lg:pl-6 pr-5 lg:pr-6 transition duration-200 ease-in-out'>
        <div className='flex items-center justify-center mx-auto max-w-[1920px] h-full w-full'>
          <button
            aria-label='Menu'
            className='menuBtn hidden md:flex lg:hidden flex-col items-center justify-center px-5 2xl:px-7 flex-shrink-0 h-full outline-none focus:outline-none'
            onClick={handleMobileMenu}
          >
            <span className='menuIcon'>
              <span className='bar' />
              <span className='bar' />
              <span className='bar' />
            </span>
          </button>
          <Logo />

          {/* <HeaderMenu
            data={site_header.menu}
            className='hidden lg:flex md:ml-6 xl:ml-10'
          /> */}

          <div className='hidden md:flex justify-end items-center space-x-6 lg:space-x-5 xl:space-x-8 2xl:space-x-10 ml-auto'>
            <button
              className='flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform'
              onClick={openSearch}
              aria-label='search-button'
            >
              <SearchIcon />
            </button>
            <div className='-mt-0.5 flex-shrink-0'></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
