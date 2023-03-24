import { LiteFlixMovie } from '@/interfaces/movies';

const PlayMovieIcon = () => {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='24'
        cy='24'
        r='23.5'
        fill='#242424'
        fill-opacity='0.5'
        stroke='white'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M31.9783 24.324L19.2002 15.6V32.4L31.9783 24.324Z'
        stroke='white'
      />
    </svg>
  );
};

interface MoviesCard {
  originalTitle: string;
  backdropPath: string;
}

function MovieCard({ originalTitle, backdropPath }: MoviesCard) {
  return (
    <div
      className='relative flex items-center justify-center w-[350px] h-[194px] bg-no-repeat bg-cover mb-4 rounded'
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500${backdropPath}')`,
      }}
    >
      <div className='absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 via-black/30 to-opacity-0'></div>
      <div className='absolute flex flex-col items-center justify-center inset-0'>
        <PlayMovieIcon />
      </div>
      <h1 className='absolute bottom-3.5 text-center w-full'>
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
    <div className='grid grid-cols-1 justify-items-center'>
      {movies?.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </div>
  );
}
