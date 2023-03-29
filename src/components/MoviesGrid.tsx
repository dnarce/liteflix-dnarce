import { LiteFlixMovie } from '@/interfaces/movies';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { EmptyCard } from './MovieCard/EmptyCard';
import { MovieCard } from './MovieCard/MovieCard';

interface MoviesGridProps {
  movies: LiteFlixMovie[];
}

export function MoviesGrid({ movies }: MoviesGridProps) {
  const [shouldShowEmptyCard, setShouldShowEmptyCard] = useState(false);

  useEffect(() => {
    setShouldShowEmptyCard(movies.length === 0);
  }, [movies]);

  const moviesGridClases = classNames(
    'flex',
    'flex-col',
    'items-center',
    'md:flex-row',
    'lg:flex-col',
    'md:overflow-x-auto',
    'md:max-w-screen',
    'justify-items-center',
    'lg:max-h-2/3-screen',
    'lg:overflow-y-auto'
  );
  return (
    <div className={moviesGridClases}>
      {!shouldShowEmptyCard &&
        movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      {shouldShowEmptyCard && <EmptyCard />}
    </div>
  );
}
