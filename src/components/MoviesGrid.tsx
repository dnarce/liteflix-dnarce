import { LiteFlixMovie } from '@/interfaces/movies';
import { MovieCard } from './MovieCard';

interface MoviesGridProps {
  movies: LiteFlixMovie[];
}

export function MoviesGrid({ movies }: MoviesGridProps) {
  return (
    <div className='flex flex-col items-center md:flex-row lg:flex-col md:overflow-x-auto md:max-w-screen justify-items-center lg:max-h-2/3-screen lg:overflow-y-auto'>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
