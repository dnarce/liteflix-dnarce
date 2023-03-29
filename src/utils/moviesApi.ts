import { getNowPlaying, getPopularMovies } from '@/services/movies';
import { parseMovie, parseMovies } from './moviesParser';

export async function loadNowPlayingMovies() {
  const nowPlaying = await getNowPlaying();
  return parseMovie(nowPlaying);
}

export async function loadPopularMovies() {
  const popularMovies = (await getPopularMovies()).slice(0, 4);
  return parseMovies(popularMovies);
}
