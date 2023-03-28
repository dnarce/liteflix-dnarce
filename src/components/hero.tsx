import { LiteFlixMovie } from '../interfaces/movies';
import { ButtonPrimary, ButtonSecondary } from './Buttons';
import { PlayIcon, PlusIcon } from './icons';

interface HeroProps {
  movie: LiteFlixMovie;
}

export function Hero({ movie }: HeroProps) {
  const { originalTitle, backdropPath, isLiteFlixOriginal = true } = movie;
  return (
    <section
      className='relative flex items-end md:items-center justify-center md:justify-start min-h-screen bg-no-repeat bg-center bg-cover pb-4 md:pb-0'
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${backdropPath}')`,
      }}
    >
      <div className='absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-dark-grey to-transparent lg:invisible'></div>
      <div className='text-center md:text-left md:pl-24 text-white z-10 md:absolute md:bottom-0 md:mb-40 lg:max-w-2/3-screen'>
        {isLiteFlixOriginal && (
          <h2 className='text-[20px] uppercase font-light tracking-[4px] md:self-start'>
            Original de <span className='font-bold'>LITEFLIX</span>
          </h2>
        )}

        <h1 className='text-[76px] text-primary font-bold uppercase tracking-[12px] md:tracking-[16px] leading-none'>
          {originalTitle}
        </h1>
        <ButtonPrimary
          className='mx-6 md:mx-0 md:mr-6 my-4'
          icon={<PlayIcon />}
        >
          Reproducir
        </ButtonPrimary>
        <ButtonSecondary icon={<PlusIcon />}>Mi Lista</ButtonSecondary>
      </div>
    </section>
  );
}
