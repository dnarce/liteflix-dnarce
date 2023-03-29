import { useLocalMoviesContext } from '@/context/local-movies-context';
import { LiteFlixMovie } from '@/interfaces/movies';
import { getMoviesFromLocalStorage } from '@/utils/movieStorage';
import { useEffect, useState } from 'react';
import { Dropdown } from './Dropdown';
import { MoviesGrid } from './MoviesGrid';

interface MediaGallerySelectorProps {
  popularMovies: LiteFlixMovie[];
}

export function MediaGallerySelector({
  popularMovies,
}: MediaGallerySelectorProps) {
  const { localMovies, setLocalMovies } = useLocalMoviesContext();
  const [gridMovies, setGridMovies] = useState<LiteFlixMovie[]>(popularMovies);
  const [selectedSource, setSelectedSource] = useState('Populares');
  useEffect(() => {
    const storedMovies = getMoviesFromLocalStorage();
    setLocalMovies(storedMovies);
  }, [setLocalMovies]);
  useEffect(() => {
    switch (selectedSource) {
      default:
      case 'Populares':
        setGridMovies(popularMovies);
        break;
      case 'Mis Películas': {
        setGridMovies(localMovies);
        break;
      }
    }

    if (selectedSource === 'Mis Películas') {
      setGridMovies(localMovies);
    }
  }, [localMovies, selectedSource, popularMovies]);

  const onMoviesSourceSelected = (option: string) => {
    setSelectedSource(option);
  };
  return (
    <section className='lg:absolute mt-10 lg:top-32 lg:right-24 z-30'>
      <div className='text-center mb-8'>
        <label>Ver:</label>{' '}
        <Dropdown
          items={['Populares', 'Mis Películas']}
          onSelectItem={onMoviesSourceSelected}
        />
      </div>
      <MoviesGrid movies={gridMovies} />
    </section>
  );
}
