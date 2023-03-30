import { GetStaticProps } from 'next';
import { LiteFlixMovie } from '@/interfaces/movies';

import { Navbar } from '@/components/Navbar/Navbar';
import { Modal } from '@/components/Modal/Modal';
import { useModalContext } from '@/context/modal-context';
import { MovieUploader } from '@/components/MovieUploader';
import { MediaGallerySelector } from '@/components/MediaGallerySelector';
import classNames from 'classnames';
import { loadNowPlayingMovies, loadPopularMovies } from '@/utils/moviesApi';
import { HeroV2 } from '@/components/Hero/HeroV2';

interface HomeProps {
  nowPlaying: LiteFlixMovie;
  popularMovies: LiteFlixMovie[];
}

export const getStaticProps: GetStaticProps = async () => {
  const nowPlayingResultData = await loadNowPlayingMovies();
  const popularMoviesResultData = await loadPopularMovies();

  return {
    props: {
      nowPlaying: nowPlayingResultData,
      popularMovies: popularMoviesResultData,
    },
  };
};

export default function Home({ nowPlaying, popularMovies }: HomeProps) {
  const { isModalOpen, toggleModal } = useModalContext();

  const homeMainClassNames = classNames([
    'relative',
    'font-bebas-neue',
    'tracking-widest',
    'bg-dark-grey',
    'text-white',
  ]);

  return (
    <div className={homeMainClassNames}>
      <Navbar />
      <HeroV2 movie={nowPlaying as LiteFlixMovie} />
      <MediaGallerySelector popularMovies={popularMovies} />
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <MovieUploader />
      </Modal>
    </div>
  );
}
