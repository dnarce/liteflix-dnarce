import { MovieTMDB } from '@/interfaces/movies';
import { getRandomNumber } from '@/libs/mathUtils';

interface ApiResponse {
  results: Object[];
  errors: string[];
}

export const getNowPlaying = async (): Promise<MovieTMDB> => {
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
    return resultData.results[randomMovieIndex] as MovieTMDB;
  } else {
    throw new Error('Error al obtener datos de la API');
  }
};

export const getPopularMovies = async (): Promise<MovieTMDB[]> => {
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
    return resultData.results as MovieTMDB[];
  } else {
    throw new Error('Error al obtener datos de la API');
  }
};
