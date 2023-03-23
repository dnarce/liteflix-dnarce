import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { GetStaticProps } from 'next';

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

export const getStaticProps: GetStaticProps = async (context) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/api/v1/movies/now_playing`);
  const resultData: any = await response.json();

  console.log(resultData);
  return {
    props: {
      nowPlaying: resultData,
    },
  };
};

export default function Home(props: GetStaticProps) {
  return (
    <div className={`bg-orange-400 relative ${bebasNeue.className}`}>
      <Navbar />
      <Hero />
      <section>
        <h1>
          Ver: <button>Poulares</button>
          <div>Movie card list container</div>
        </h1>
      </section>
    </div>
  );
}
