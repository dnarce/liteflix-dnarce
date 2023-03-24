import { LiteFlixMovie } from '../interfaces/movies';
import { Button } from './Button';
//TODO: mover a Interface
interface HeroProps {
  movie: LiteFlixMovie;
}

const PlayIcon = () => {
  return (
    <svg
      width='11'
      height='16'
      viewBox='0 0 11 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.94234 8.2363L0.625 1.875V14.125L9.94234 8.2363Z'
        stroke='white'
      />
    </svg>
  );
};

const PlusIcon = () => {
  return (
    <svg
      width='15'
      height='14'
      viewBox='0 0 15 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M7.5 0V14' stroke='white' />
      <path d='M14.5 7L0.5 7' stroke='white' />
    </svg>
  );
};

export function Hero({ movie }: HeroProps) {
  const { originalTitle, backdropPath, isLiteFlixOriginal = true } = movie;
  return (
    <section
      className='relative flex items-end md:items-center justify-center md:justify-start min-h-screen bg-no-repeat bg-center bg-cover pb-4 md:pb-0'
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${backdropPath}')`,
      }}
    >
      <div className='absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#242424] to-transparent lg:invisible'></div>
      <div className='text-center md:text-left md:pl-24 text-white z-10 md:absolute md:bottom-0 md:mb-40'>
        {isLiteFlixOriginal && (
          <h2 className='text-[20px] uppercase font-light tracking-widest md:self-start'>
            Original de <span className='font-bold'>LITEFLIX</span>
          </h2>
        )}

        <h1 className='text-[76px] text-[#64EEBC] font-bold uppercase tracking-widest leading-none'>
          {originalTitle}
        </h1>
        <Button
          className='mx-6 md:mx-0 md:mr-6 my-4'
          icon={<PlayIcon />}
          isPrimary={true}
        >
          Reproducir
        </Button>
        <Button icon={<PlusIcon />}>Mi Lista</Button>
      </div>
    </section>
  );
}
