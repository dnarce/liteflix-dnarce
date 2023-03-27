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

const bebasNeue = localFont({
  src: [
    {
      path: '../../public/fonts/BebasNeueLight.ttf',
      weight: '200',
    },
    {
      path: '../../public/fonts/BebasNeueRegular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/BebasNeueBold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-bebasNeue',
});
//TODO: Mover a interfaces
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

  //TODO: borrar esto
  console.log('nowPlayingResponse: 👇');
  console.log(nowPlayingResponse);
  console.log('popularMoviesResultData 👇');
  console.log(popularMoviesResultData);
  return {
    props: {
      nowPlaying: nowPlayingResultData,
      popularMovies: popularMoviesResultData,
    },
  };
};

export default function Home(props: HomeProps) {
  const { isModalOpen, toggleModal } = useModalContext();

  return (
    <div
      className={`relative ${bebasNeue.className} tracking-widest bg-dark-grey text-white`}
    >
      <Navbar />
      <Hero movie={props.nowPlaying as LiteFlixMovie} />
      <section
        id='movies-selection'
        className='lg:absolute lg:top-32 lg:right-24'
      >
        <div className='text-center mb-8'>
          <label>Ver:</label>{' '}
          <Dropdown items={['Populares', 'Mis Películas']} />
        </div>
        <MoviesGrid movies={props.popularMovies as LiteFlixMovie[]} />
      </section>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <MovieUploader />
      </Modal>
    </div>
  );
}
