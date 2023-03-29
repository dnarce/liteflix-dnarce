import { LiteFlixMovie } from '@/interfaces/movies';
import { PlayCircleIcon, StarIcon } from './icons';
import { motion, AnimatePresence } from 'framer-motion';

interface MovieCardProps {
  movie: LiteFlixMovie;
  index: number;
}

const cardContainerEffect = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    opacity: { duration: 1.2, delay: 0.5 },
    y: { duration: 0.75, delay: 0.5 },
  },
};

export function MovieCard({ movie, index }: MovieCardProps) {
  const {
    originalTitle,
    backdropPath,
    localBackdropPath,
    voteAverage,
    releaseDate,
  } = movie;
  const backgroundImage = localBackdropPath
    ? `url('${localBackdropPath}')`
    : `url('https://image.tmdb.org/t/p/w500${backdropPath}')`;

  const releaseYear = releaseDate?.split('-')[0];

  return (
    <div className='group inline-block mr-4 p-4'>
      <motion.div
        initial={cardContainerEffect.initial}
        animate={cardContainerEffect.animate}
        transition={{
          opacity: { duration: 1.2, delay: index / 5 },
          y: { duration: 0.75, delay: index / 6 },
        }}
        className='relative flex items-center justify-center w-[327px] h-[172px] md:w-[220px] md:h-[146px] bg-center bg-no-repeat bg-cover rounded cursor-pointer group-hover:hidden'
        style={{
          backgroundImage,
        }}
      >
        <div className='absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 via-black/30 to-opacity-0'></div>

        <div className='flex flex-col items-center justify-center inset-0'>
          <motion.span
            initial={cardContainerEffect.initial}
            animate={cardContainerEffect.animate}
            transition={{
              opacity: { duration: 1, delay: index / 5 },
              y: { duration: 0.5, delay: index / 6 },
            }}
            className='block'
          >
            <PlayCircleIcon size='large' />
          </motion.span>
          <motion.h1
            initial={cardContainerEffect.initial}
            animate={cardContainerEffect.animate}
            transition={{
              opacity: { duration: 1, delay: index / 5 },
              y: { duration: 0.5, delay: index / 6 },
            }}
            className='absolute bottom-3.5 text-center w-full text-ellipsis overflow-hidden whitespace-nowrap px-2'
          >
            {originalTitle}
          </motion.h1>
        </div>
      </motion.div>

      <div
        className='hidden group-hover:flex items-center w-[327px] h-[172px] md:w-[220px] md:h-[146px] bg-center bg-no-repeat bg-cover rounded cursor-pointer'
        style={{
          backgroundImage,
        }}
      >
        <div className='p-4 bg-black/50 w-full h-full flex flex-col justify-end'>
          <div className='flex flex-row items-center justify-items-center flex-grow'>
            <span>
              <PlayCircleIcon />
            </span>
            <span className='ml-2 w-full text-ellipsis overflow-hidden whitespace-nowrap'>
              {originalTitle}
            </span>
          </div>
          {!localBackdropPath && (
            <div className='flex flex-row items-center justify-items-center justify-between'>
              <span className='flex items-center'>
                <span className='mr-2'>
                  <StarIcon />
                </span>
                {voteAverage}
              </span>
              <span>{releaseYear}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
