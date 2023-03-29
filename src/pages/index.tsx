import { Navbar } from '@/components/Navbar';
import { GetStaticProps } from 'next';
import { LiteFlixMovie } from '@/interfaces/movies';

import { Modal } from '@/components/Modal';
import { useModalContext } from '@/context/modal-context';
import { MovieUploader } from '@/components/MovieUploader';
import { Hero } from '@/components/Hero/hero';
import { MediaGallerySelector } from '@/components/MediaGallerySelector';
import { homeMainClassNames } from './index.styles';

interface HomeProps {
  nowPlaying: LiteFlixMovie;
  popularMovies: LiteFlixMovie[];
}

export const getStaticProps: GetStaticProps = async () => {
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

  return (
    <div className={homeMainClassNames}>
      <Navbar />
      <Hero movie={nowPlaying as LiteFlixMovie} />
      <MediaGallerySelector popularMovies={popularMovies} />
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <MovieUploader />
      </Modal>
    </div>
  );
}
