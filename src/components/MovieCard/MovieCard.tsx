import { LiteFlixMovie } from '@/interfaces/movies';
import { PlayCircleIcon, StarIcon } from '../icons';
import { motion } from 'framer-motion';
import { useMotionEffectsContext } from '@/context/motion-effects-context';
import {
  baseCardContainerClasses,
  baseHiddenContainerClasses,
  baseCardShadowClasses,
  baseCardBodyClasses,
  baseCardTitle,
  baseHiddenCardBody,
  baseHiddenCardContenClasses,
  baseHiddenCardTitleClasses,
  baseHiddenCardExtraContentClasses,
} from './movie-card.styles';

interface MovieCardProps {
  movie: LiteFlixMovie;
  index: number;
}

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

  const {
    card: { cardContainerEffect },
  } = useMotionEffectsContext();

  return (
    <div className='group inline-block mr-4 p-4'>
      <motion.div
        initial={cardContainerEffect.initial}
        animate={cardContainerEffect.animate}
        transition={{
          opacity: { duration: 1.2, delay: index / 5 },
          y: { duration: 0.75, delay: index / 6 },
        }}
        className={baseCardContainerClasses}
        style={{
          backgroundImage,
        }}
      >
        <div className={baseCardShadowClasses}></div>
        <div className={baseCardBodyClasses}>
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
            className={baseCardTitle}
          >
            {originalTitle}
          </motion.h1>
        </div>
      </motion.div>

      <div
        className={baseHiddenContainerClasses}
        style={{
          backgroundImage,
        }}
      >
        <div className={baseHiddenCardBody}>
          <div className={baseHiddenCardContenClasses}>
            <span>
              <PlayCircleIcon />
            </span>
            <span className={baseHiddenCardTitleClasses}>{originalTitle}</span>
          </div>
          {!localBackdropPath && (
            <div className={baseHiddenCardExtraContentClasses}>
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
