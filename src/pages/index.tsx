import { Navbar } from '@/components/Navbar';
import { GetStaticProps } from 'next';
import { LiteFlixMovie } from '@/interfaces/movies';

import { MoviesGrid } from '@/components/MoviesGrid';
import { Dropdown } from '@/components/Dropdown';
import { Modal } from '@/components/Modal';
import { useModalContext } from '@/context/modal-context';
import { MovieUploader } from '@/components/MovieUploader';
import { Hero } from '@/components/hero';
import { MediaGallerySelector } from '@/components/MediaGallerySelector';

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

  return (
    <div
      className={`relative font-bebas-neue tracking-widest bg-dark-grey text-white`}
    >
      <Navbar />
      <Hero movie={nowPlaying as LiteFlixMovie} />
      <MediaGallerySelector popularMovies={popularMovies} />
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <MovieUploader />
      </Modal>
    </div>
  );
}
