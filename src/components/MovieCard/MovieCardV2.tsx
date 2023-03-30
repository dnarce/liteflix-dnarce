import { LiteFlixMovie } from '@/interfaces/movies';
import classNames from 'classnames';
import { PlayCircleIcon, StarIcon } from '../icons';
import { motion } from 'framer-motion';
import { useMotionEffectsContext } from '@/context/motion-effects-context';

interface MovieCardProps {
  movie: LiteFlixMovie;
  index: number;
}

export function MovieCardV2({ movie, index }: MovieCardProps) {
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
  const {
    card: { cardContainerEffect },
  } = useMotionEffectsContext();
  return (
    <motion.div
      initial={cardContainerEffect.initial}
      animate={cardContainerEffect.animate}
      transition={{
        opacity: { duration: 1.2, delay: index / 5 },
        y: { duration: 0.75, delay: index / 6 },
      }}
      className={classNames(
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'w-full',
        'h-auto',
        'aspect-video',
        'mx-4',
        'md:mx-0',
        'md:w-[220px]',
        'md:h-[146px]',
        'md:min-w-[220px]',
        'md:min-h-[146px]',
        'bg-center',
        'bg-no-repeat',
        'bg-cover',
        'rounded',
        'cursor-pointer',
        'p-4',
        'group',
        'relative',
        'mb-8'
      )}
      style={{
        backgroundImage,
      }}
    >
      <div
        className={classNames(
          'flex',
          'flex-col',
          'items-center',
          'justify-center',
          'w-full',
          'h-full',
          'hover:flex-row',
          'z-10'
        )}
      >
        <motion.span
          initial={cardContainerEffect.initial}
          animate={cardContainerEffect.animate}
          transition={{
            opacity: { duration: 1, delay: index / 5 },
            y: { duration: 0.5, delay: index / 6 },
          }}
          className='group-hover:hidden'
        >
          <PlayCircleIcon size='large' />
        </motion.span>
        <span className='hidden group-hover:block mr-2'>
          <PlayCircleIcon />
        </span>
        <motion.h1
          initial={cardContainerEffect.initial}
          animate={cardContainerEffect.animate}
          transition={{
            opacity: { duration: 1, delay: index / 5 },
            y: { duration: 0.5, delay: index / 6 },
          }}
          className={classNames(
            'w-full',
            'md:max-w-[220px]',
            'group-hover:block w-auto',
            'text-ellipsis',
            'overflow-hidden',
            'whitespace-nowrap',
            'group-hover:whitespace-normal',
            'group-hover:text-left',
            'text-center',
            'mt-2'
          )}
        >
          {originalTitle}
        </motion.h1>
      </div>
      <div
        className={classNames(
          'hidden',
          'group-hover:flex',
          'flex-row',
          'items-center',
          'justify-items-center',
          'justify-between',
          'w-full',
          'z-10'
        )}
      >
        <span className='flex items-center'>
          <span className='mr-2'>
            <StarIcon />
          </span>
          {voteAverage}
        </span>
        <span>{releaseYear}</span>
      </div>
      <div
        className={classNames(
          'absolute',
          'bottom-0',
          'left-0',
          'w-full',
          'h-full',
          'bg-dark-grey/70',
          'hidden',
          'group-hover:block',
          'z-0'
        )}
      ></div>
    </motion.div>
  );
}
