import { LiteFlixMovie } from '@/interfaces/movies';
import { PlayCircleIcon, StarIcon } from './icons';

export function MovieCard({
  originalTitle,
  backdropPath,
  localBackdropPath,
  voteAverage,
  releaseDate,
}: LiteFlixMovie) {
  const backgroundImage = localBackdropPath
    ? `url('${localBackdropPath}')`
    : `url('https://image.tmdb.org/t/p/w500${backdropPath}')`;

  const releaseYear = releaseDate?.split('-')[0];

  return (
    <div className='group inline-block mb-4 mr-4 p-4'>
      <div
        className='relative flex items-center justify-center w-[327px] h-[172px] md:w-[220px] md:h-[146px] bg-center bg-no-repeat bg-cover rounded cursor-pointer group-hover:hidden'
        style={{
          backgroundImage,
        }}
      >
        <div className='absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 via-black/30 to-opacity-0'></div>

        <div className='flex flex-col items-center justify-center inset-0'>
          <span className='block'>
            <PlayCircleIcon size='large' />
          </span>
          <h1 className='absolute bottom-3.5 text-center w-full text-ellipsis overflow-hidden whitespace-nowrap px-2'>
            {originalTitle}
          </h1>
        </div>
      </div>

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
          <div className='flex flex-row items-center justify-items-center justify-between'>
            <span className='flex items-center'>
              <span className='mr-2'>
                <StarIcon />
              </span>
              {voteAverage}
            </span>
            <span>{releaseYear}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
