import { LiteFlixMovie } from '@/interfaces/movies';
import { MovieCard } from './MovieCard';

interface MoviesGridProps {
  movies: LiteFlixMovie[];
}

export function MoviesGrid({ movies }: MoviesGridProps) {
  return (
    <div className='grid grid-cols-1 justify-items-center lg:max-h-2/3-screen lg:overflow-y-auto'>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
