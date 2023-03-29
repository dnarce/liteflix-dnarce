import { LiteFlixMovie } from '@/interfaces/movies';
import classNames from 'classnames';
import { PlayCircleIcon, StarIcon } from '../icons';

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
  return (
    <div
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
          'hover:flex-row'
        )}
      >
        <span className='group-hover:hidden'>
          <PlayCircleIcon size='large' />
        </span>
        <span className='hidden group-hover:block mr-2'>
          <PlayCircleIcon />
        </span>
        <h1
          className={classNames(
            'w-full',
            'text-ellipsis',
            'overflow-hidden',
            'whitespace-nowrap',
            'mt-2'
          )}
        >
          {originalTitle}
        </h1>
      </div>
      <div
        className={classNames(
          'hidden',
          'group-hover:flex',
          'flex-row',
          'items-center',
          'justify-items-center',
          'justify-between',
          'w-full'
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
    </div>
  );
}
