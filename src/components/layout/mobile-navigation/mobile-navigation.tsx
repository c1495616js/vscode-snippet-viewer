import Link from '@components/ui/link';
import SearchIcon from '@components/icons/search-icon';
// import UserIcon from '@components/icons/user-icon';
import MenuIcon from '@components/icons/menu-icon';
import HomeIcon from '@components/icons/home-icon';
import { useUI } from '@contexts/ui.context';
// import { ROUTES } from '@utils/routes';
// import dynamic from 'next/dynamic';
import { Drawer } from '@components/common/drawer/drawer';

const BottomNavigation: React.FC = () => {
  const {
    openSidebar,
    closeSidebar,
    displaySidebar,
    setDrawerView,
    openSearch,
  } = useUI();

  function handleMobileMenu() {
    setDrawerView('MOBILE_MENU');
    return openSidebar();
  }

  return (
    <>
      <div className='md:hidden fixed z-10 bottom-0 flex items-center justify-between shadow-bottomNavigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 px-4'>
        <button
          aria-label='Menu'
          className='menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none'
          onClick={handleMobileMenu}
        >
          <MenuIcon />
        </button>
        <button
          className='flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none'
          onClick={openSearch}
          aria-label='search-button'
        >
          <SearchIcon />
        </button>
        <Link href='/' className='flex-shrink-0'>
          <HomeIcon />
        </Link>
      </div>
      <Drawer
        open={displaySidebar}
        onClose={closeSidebar}
        handler={false}
        showMask={true}
        level={null}
      >
        Drawer
      </Drawer>
    </>
  );
};

export default BottomNavigation;
