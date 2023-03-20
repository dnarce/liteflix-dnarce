import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/api/v1/movies/now_playing`);
  const resultData: any = await response.json();

  console.log(resultData);
  return {
    props: {
      name: 'diego',
    },
  };
};

export default function Home(props: GetStaticProps) {
  const [data, setData] = useState<any | null>(null);

  return (
    <>
      <nav>
        <ul>
          <li>LITEFLIX</li>
          <li>Hamburguer button</li>
          <li>User Avatar</li>
        </ul>
        <div>
          <ul>
            <li>Inicio</li>
            <li>Series</li>
            <li>Películas</li>
            <li>Agregadas Recientemente</li>
            <li>Populares</li>
            <li>Mis Películas</li>
            <li>Mi Lista</li>
            <li>
              <button>+ Agregar Pelícla</button>
            </li>
            <li>
              <button>Cerrar sesión</button>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <h2>Original de LITEFLIX</h2>
        <h1>La casa de Papel</h1>
        <button>Reproducir</button>
        <button>+ Mi Lista</button>
      </section>
      <section>
        <h1>
          Ver: <button>Poulares</button>
          <div>Movie card list container</div>
        </h1>
      </section>
    </>
  );
}
