import { useModalContext } from '@/context/modal-context';
import { useToggleDrawer } from '@/hooks/useToggleDrawer';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import Avatar from '../../public/images/avatar.jpeg';
import { ButtonLink } from './Buttons';
import { CloseIcon, NotificationActiveIcon, PlusIcon } from './icons';

interface DrawerProps {
  isOpen: boolean;
  toggleDrawer: Function;
}

export function Drawer({ isOpen, toggleDrawer }: DrawerProps) {
  const { toggleModal } = useModalContext();
  const linkHandler = (event: any) => {
    event.preventDefault();
    toggleDrawer();
  };

  const drawerClasses = classNames(
    'bg-dark-grey px-10 py-5 drawer-transition fixed inset-y-0 transform z-20 w-full lg:w-1/3',
    'transition-all duration-500 transform',
    {
      'right-0': isOpen,
      '-right-full lg:-right-1/2': !isOpen,
    }
  );

  return (
    <div className={drawerClasses}>
      <div className='mt-24 font-extralight'>
        <ul className='[&>li]:mt-10 text-drawer'>
          <li>
            <Link href={''} onClick={linkHandler}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href={''} onClick={linkHandler}>
              Series
            </Link>
          </li>
          <li>
            <Link href={''} onClick={linkHandler}>
              Películas
            </Link>
          </li>
          <li>
            <Link href={''} onClick={linkHandler}>
              Agregadas Recientemente
            </Link>
          </li>
          <li>
            <Link href={''} onClick={linkHandler}>
              Populares
            </Link>
          </li>
          <li>
            <Link href={''} onClick={linkHandler}>
              Mis Películas
            </Link>
          </li>
          <li>
            <Link href={''} onClick={linkHandler}>
              Mi Lista
            </Link>
          </li>
          <li>
            <ButtonLink
              className='mr-11 font-bold'
              icon={<PlusIcon />}
              onClick={toggleModal}
            >
              Agregar Pelícla
            </ButtonLink>
          </li>
          <li>
            <Link href={''} onClick={linkHandler}>
              Cerrar sesión
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* <ul>
  <li>Inicio</li>
  <li>Series</li>
  <li>Películas</li>
  <li>Agregadas Recientemente</li>
  <li>Populares</li>
  <li>Mis Películas</li>
  <li>Mi Lista</li>
  <li>
    <button>+ Agregar Pelícla</button>
  </li>
  <li>
    <button>Cerrar sesión</button>
  </li>
</ul>; */
