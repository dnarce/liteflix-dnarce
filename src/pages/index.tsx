import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { GetStaticProps } from 'next';

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
    <div className={`bg-orange-400 relative`}>
      <Navbar />
      <Hero />
      {/* <section className='bg-blue-800 min-h-screen'>
        <h2>Original de LITEFLIX</h2>
        <h1>La casa de papel</h1>
        <button>Reproducir</button>
        <button>+ Mi Lista</button>
      </section> */}
      <section>
        <h1>
          Ver: <button>Poulares</button>
          <div>Movie card list container</div>
        </h1>
      </section>
    </div>
  );
}
