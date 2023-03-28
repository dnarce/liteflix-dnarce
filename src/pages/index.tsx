import { Navbar } from '@/components/Navbar';
import { GetStaticProps } from 'next';
import { LiteFlixMovie } from '@/interfaces/movies';

import localFont from 'next/font/local';
import { MoviesGrid } from '@/components/MoviesGrid';
import { Dropdown } from '@/components/Dropdown';
import { Modal } from '@/components/Modal';
import { useModalContext } from '@/context/modal-context';

import { MovieUploader } from '@/components/MovieUploader';
import { Hero } from '@/components/hero';
import { useEffect, useState } from 'react';
import { getMoviesFromLocalStorage } from '@/utils/movieStorage';
import { useLocalMoviesContext } from '@/context/local-movies-context';

interface HomeProps {
  nowPlaying: LiteFlixMovie;
  popularMovies: LiteFlixMovie[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const nowPlayingResponse = await fetch(`${apiUrl}/api/v1/movies/now_playing`);
  const nowPlayingResultData: LiteFlixMovie = await nowPlayingResponse.json();

  const popularMoviesResponse = await fetch(`${apiUrl}/api/v1/movies/popular`);
  const popularMoviesResultData: LiteFlixMovie =
    await popularMoviesResponse.json();

  return {
    props: {
      nowPlaying: nowPlayingResultData,
      popularMovies: popularMoviesResultData,
    },
  };
};

export default function Home({ nowPlaying, popularMovies }: HomeProps) {
  const { isModalOpen, toggleModal } = useModalContext();
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
    <div
      className={`relative font-bebas-neue tracking-widest bg-dark-grey text-white`}
    >
      <Navbar />
      <Hero movie={nowPlaying as LiteFlixMovie} />
      <section
        id='movies-selection'
        className='lg:absolute lg:top-32 lg:right-24'
      >
        <div className='text-center mb-8'>
          <label>Ver:</label>{' '}
          <Dropdown
            items={['Populares', 'Mis Películas']}
            onSelectItem={onMoviesSourceSelected}
          />
        </div>
        <MoviesGrid movies={gridMovies} />
      </section>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <MovieUploader />
      </Modal>
    </div>
  );
}
