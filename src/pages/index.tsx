export default function Home() {
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
