import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { GetStaticProps } from 'next';
import { LiteFlixMovie } from '@/interfaces/movies';

import localFont from 'next/font/local';

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
}

export const getStaticProps: GetStaticProps = async (context) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/api/v1/movies/now_playing`);
  const resultData: LiteFlixMovie = await response.json();

  console.log(resultData);
  return {
    props: {
      nowPlaying: resultData,
    },
  };
};

export default function Home(props: HomeProps) {
  return (
    <div className={`relative ${bebasNeue.className} tracking-widest`}>
      <Navbar />
      <Hero movie={props.nowPlaying as LiteFlixMovie} />
      <section>
        <h1>
          Ver: <button>Poulares</button>
          <div>Movie card list container</div>
        </h1>
      </section>
    </div>
  );
}
