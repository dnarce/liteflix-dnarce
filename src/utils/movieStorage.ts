import { LiteFlixMovie } from '@/interfaces/movies';

export const saveMovieToLocalStorage = (movie: LiteFlixMovie): void => {
  const existingMovies = JSON.parse(
    localStorage.getItem('uploadedMovies') || '[]'
  );
  const updatedMovies = [...existingMovies, movie];
  localStorage.setItem('uploadedMovies', JSON.stringify(updatedMovies));
};

export const getMoviesFromLocalStorage = (): LiteFlixMovie[] => {
  return JSON.parse(localStorage.getItem('uploadedMovies') || '[]');
};
