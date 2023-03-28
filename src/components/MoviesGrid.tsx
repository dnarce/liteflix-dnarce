import { LiteFlixMovie } from '@/interfaces/movies';
import { PlayCircleIcon } from './icons';

interface MoviesCard {
  originalTitle: string;
  backdropPath?: string;
  localBackdropPath?: string;
}

function MovieCard({
  originalTitle,
  backdropPath,
  localBackdropPath,
}: MoviesCard) {
  const backgroundImage = localBackdropPath
    ? `url('${localBackdropPath}')`
    : `url('https://image.tmdb.org/t/p/w500${backdropPath}')`;

  return (
    <div
      className='relative flex items-center justify-center w-[327px] h-[172px] md:w-[220px] md:h-[146px] bg-center bg-no-repeat bg-cover mb-4 rounded'
      style={{
        backgroundImage,
      }}
    >
      <div className='absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 via-black/30 to-opacity-0'></div>
      <div className='absolute flex flex-col items-center justify-center inset-0'>
        <PlayCircleIcon />
      </div>
      <h1 className='absolute bottom-3.5 text-center w-full text-ellipsis overflow-hidden whitespace-nowrap px-2'>
        {originalTitle}
      </h1>
    </div>
  );
}

interface MoviesGridProps {
  movies: LiteFlixMovie[];
}

export function MoviesGrid({ movies }: MoviesGridProps) {
  return (
    <div className='grid grid-cols-1 justify-items-center lg:max-h-2/3-screen lg:overflow-y-auto'>
      {movies?.map((movie) => (
        <MovieCard
          key={movie.id}
          originalTitle={movie.originalTitle}
          backdropPath={movie.backdropPath}
          localBackdropPath={movie.localBackdropPath}
        />
      ))}
    </div>
  );
}
