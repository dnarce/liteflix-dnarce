import Image from 'next/image';
//TODO: mover componentes, iconos avatar a sus respectivos directorios
import Avatar from '../../public/images/avatar.jpeg';
const Hamburger = () => {
  return (
    <svg
      width='27'
      height='14'
      viewBox='0 0 27 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 1H27' stroke='white' />
      <path d='M0 7H27' stroke='white' />
      <path d='M0 13H17' stroke='white' />
    </svg>
  );
};

const LiteflixLogo = () => {
  return (
    <div
      className='uppercase text-[28px] font-bold'
      style={{ color: '#64EEBC' }}
    >
      <span className='font-bold'>Lite</span>
      <span className='font-extralight'>flix</span>
    </div>
    // <svg
    //   width='96'
    //   height='20'
    //   viewBox='0 0 96 20'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    // >
    //   <path
    //     d='M0.243047 20H8.39105V17.2H3.32305V0.399999H0.243047V20ZM13.7313 20H16.8113V0.399999H13.7313V20ZM22.1674 3.2H25.3874V20H28.4674V3.2H31.6874V0.399999H22.1674V3.2ZM40.1238 3.2H45.4438V0.399999H37.0438V20H45.4438V17.2H40.1238V11.46H44.3518V8.66H40.1238V3.2ZM52.6404 9.948V1.576H58.8004V0.399999H51.3524V20H52.6404V11.124H57.7084V9.948H52.6404ZM72.2067 20V18.824H66.0467V0.399999H64.7587V20H72.2067ZM78.1376 0.399999V20H79.4256V0.399999H78.1376ZM94.6249 20H95.9969L91.6009 9.836L95.7169 0.399999H94.4849L90.7609 8.828L87.0649 0.399999H85.7209L89.8369 9.836L85.4129 20H86.6729L90.6489 10.872L94.6249 20Z'
    //     fill='#64EEBC'
    //   />
    // </svg>
  );
};

export function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full z-10'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between py-4'>
          <div>
            <Hamburger />
          </div>

          <div>
            <LiteflixLogo />
          </div>

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
    </nav>
  );
}

{
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
}
