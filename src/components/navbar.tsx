import Image from 'next/image';
import Avatar from '../../public/images/avatar2.jpeg';
import { CloseIcon, MenuIcon, NotificationActiveIcon, PlusIcon } from './icons';
import { LiteflixLogo } from './LiteflixLogo';
import { Drawer } from './Drawer';
import { useToggleDrawer } from '@/hooks/useToggleDrawer';
import { useModalContext } from '@/context/modal-context';
import { ButtonLink } from './Buttons';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export function Navbar() {
  const { isDrawerOpen, toggleDrawer } = useToggleDrawer();
  const { toggleModal } = useModalContext();
  const navbarClasses = classNames('fixed top-0 left-0 w-full z-50');
  const [menuIcon, setMenuIcon] = useState(<MenuIcon />);
  useEffect(() => {
    setMenuIcon(isDrawerOpen ? <CloseIcon /> : <MenuIcon />);
  }, [isDrawerOpen]);
  //

  return (
    <>
      <nav className={navbarClasses}>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between py-4'>
            <div className='lg:hidden'>
              <ButtonLink
                className='lg:flex lg:items-center mr-10'
                icon={menuIcon}
                onClick={() => toggleDrawer()}
              ></ButtonLink>
            </div>

            <div className='flex items-center'>
              <LiteflixLogo />
              <ButtonLink
                className='hidden lg:flex lg:items-center ml-4'
                icon={<PlusIcon />}
                onClick={toggleModal}
              >
                Agregar Pelicula
              </ButtonLink>
            </div>

            <div className='flex'>
              <ButtonLink
                className={classNames(
                  'hidden lg:flex lg:items-center transition-all duration-300 transform',
                  {
                    'mr-28': isDrawerOpen,
                    'mr-10': !isDrawerOpen,
                  }
                )}
                icon={menuIcon}
                onClick={() => toggleDrawer()}
              ></ButtonLink>
              <ButtonLink
                className={'hidden lg:flex lg:items-center mr-10'}
                icon={<NotificationActiveIcon />}
              ></ButtonLink>
              <div className='cursor-pointer'>
                <Image
                  src={Avatar}
                  className='object-cover rounded-full'
                  alt='avatar image'
                  width={42}
                  height={42}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}
