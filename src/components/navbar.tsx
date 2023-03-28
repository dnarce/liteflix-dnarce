import Image from 'next/image';

//TODO: mover componentes, iconos avatar a sus respectivos directorios
import Avatar from '../../public/images/avatar.jpeg';
import { MenuIcon, NotificationActiveIcon, PlusIcon } from './icons';
import { LiteflixLogo } from './LiteflixLogo';
import { Drawer } from './Drawer';
import { useToggleDrawer } from '@/hooks/useToggleDrawer';
import { useModalContext } from '@/context/modal-context';
import { ButtonLink } from './Buttons';

export function Navbar() {
  const { isDrawerOpen, toggleDrawer } = useToggleDrawer();
  const { toggleModal } = useModalContext();

  return (
    <>
      <nav className='fixed top-0 left-0 w-full z-10'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between py-4'>
            <div className='lg:hidden'>
              <ButtonLink
                className='lg:flex lg:items-center mr-10'
                icon={<MenuIcon />}
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
                className='hidden lg:flex lg:items-center mr-10'
                icon={<MenuIcon />}
                onClick={() => toggleDrawer()}
              ></ButtonLink>
              <ButtonLink
                className='hidden lg:flex lg:items-center mr-10'
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
