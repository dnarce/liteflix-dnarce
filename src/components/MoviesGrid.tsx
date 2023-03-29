import { LiteFlixMovie } from '@/interfaces/movies';
import { useEffect, useState } from 'react';
import { EmptyCard } from './EmptyCard';
import { MovieCard } from './MoveCard/MovieCard';

interface MoviesGridProps {
  movies: LiteFlixMovie[];
}

export function MoviesGrid({ movies }: MoviesGridProps) {
  const [shouldShowEmptyCard, setShouldShowEmptyCard] = useState(false);

  useEffect(() => {
    setShouldShowEmptyCard(movies.length === 0);
  }, [movies]);

  return (
    <div className='flex flex-col items-center md:flex-row lg:flex-col md:overflow-x-auto md:max-w-screen justify-items-center lg:max-h-2/3-screen lg:overflow-y-auto'>
      {!shouldShowEmptyCard &&
        movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      {shouldShowEmptyCard && <EmptyCard />}
    </div>
  );
}
