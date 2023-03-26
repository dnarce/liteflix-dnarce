import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { GetStaticProps } from 'next';
import { LiteFlixMovie } from '@/interfaces/movies';

import localFont from 'next/font/local';
import { MoviesGrid } from '@/components/MoviesGrid';
import { Dropdown } from '@/components/Dropdown';
import { Modal } from '@/components/Modal';
import { useModalContext } from '@/context/modal-context';
import { FileDropZone } from '@/components/FileDropZone';
import { Button, BUTTON_PRIMARY } from '@/components/Button';

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
  const handleFileDrop = (file: File) => {
    console.log('Archivo seleccionado: ', file);
  };
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
        <h1 className='text-center text-primary text-base'>This is a modal</h1>
        <FileDropZone onFileDrop={handleFileDrop} />
        <div className='flex justify-center mt-4 mb-4'>
          {/* <label
            htmlFor='movieTitle'
            className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          >
            Título
          </label> */}
          <input
            type='text'
            name='movieTitle'
            id='movieTitle'
            className='w-full max-w-[248px] text-center py-2 border-b-[1px] border-white bg-transparent text-white placeholder-white focus:placeholder-transparent text-base tracking-[4px] focus:outline-none'
            placeholder='Título'
          />
        </div>
        <div className='flex justify-center mt-12'>
          <Button buttonType={BUTTON_PRIMARY}>Subir Película</Button>
        </div>
      </Modal>
    </div>
  );
}
