//https://image.tmdb.org/t/p/original/a2tys4sD7xzVaogPntGsT1ypVoT.jpg
export function Hero() {
  return (
    <section
      className='flex items-center justify-center min-h-screen  bg-no-repeat bg-center bg-cover'
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/a2tys4sD7xzVaogPntGsT1ypVoT.jpg')",
      }}
    >
      <div className='text-center text-white'>
        <h2 className='text-xl uppercase'>Original de LITEFLIX</h2>
        <h1
          className='text-[76px] font-bold uppercase tracking-widest'
          style={{ color: '#64EEBC' }}
        >
          Cocain Bear
        </h1>
        <button>Reproducir</button>
        <button>+ Mi Lista</button>
      </div>
    </section>
  );
}
