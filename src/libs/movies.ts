import { getRandomNumber } from './mathUtils';

//TODO: modificar esta interface para que sea la de TMDB y moverla a un directorio de interfaces

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface ApiResponse {
  results: Object[];
  errors: string[];
}

export const getNowPlaying = async (): Promise<Movie> => {
  const fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
  };

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing`,
    fetchOptions
  );

  const resultData: ApiResponse = await data.json();
  if (resultData.results) {
    const randomMovieIndex = getRandomNumber(0, resultData.results.length - 1);
    return resultData.results[randomMovieIndex] as Movie;
  } else {
    throw new Error('Error al obtener datos de la API');
  }
};

export const getPopularMovies = async (): Promise<Movie[]> => {
  const fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
  };

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular`,
    fetchOptions
  );

  const resultData: ApiResponse = await data.json();
  if (resultData.results) {
    return resultData.results as Movie[];
  } else {
    throw new Error('Error al obtener datos de la API');
  }
};
