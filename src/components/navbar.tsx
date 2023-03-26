import Image from 'next/image';
import { Button, BUTTON_LINK } from './Button';
//TODO: mover componentes, iconos avatar a sus respectivos directorios
import Avatar from '../../public/images/avatar.jpeg';
import { MenuIcon, NotificationActiveIcon, PlusIcon } from './icons';
import { LiteflixLogo } from './LiteflixLogo';
import { Drawer } from './Drawer';
import { useToggleDrawer } from '@/hooks/useToggleDrawer';
import { MouseEventHandler } from 'react';
import { useModalContext } from '@/context/modal-context';

export function Navbar() {
  const { isDrawerOpen, toggleDrawer } = useToggleDrawer();
  const { toggleModal } = useModalContext();

  return (
    <>
      <nav className='fixed top-0 left-0 w-full z-10'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between py-4'>
            <div className='lg:hidden'>
              <Button
                className='lg:flex lg:items-center mr-10'
                icon={<MenuIcon />}
                buttonType={BUTTON_LINK}
                onClick={() => toggleDrawer()}
              ></Button>
            </div>

            <div className='flex'>
              <LiteflixLogo />
              <Button
                className='hidden lg:flex lg:items-center ml-4'
                icon={<PlusIcon />}
                buttonType={BUTTON_LINK}
                onClick={toggleModal}
              >
                Agregar Pelicula
              </Button>
            </div>

            <div className='flex'>
              <Button
                className='hidden lg:flex lg:items-center mr-10'
                icon={<MenuIcon />}
                buttonType={BUTTON_LINK}
                onClick={() => toggleDrawer()}
              ></Button>
              <Button
                className='hidden lg:flex lg:items-center mr-10'
                icon={<NotificationActiveIcon />}
                buttonType={BUTTON_LINK}
              ></Button>
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
