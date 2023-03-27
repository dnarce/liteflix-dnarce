import { LiteFlixMovie, MovieTMDB } from '@/interfaces/movies';

export const parseMovie = (movie: MovieTMDB): LiteFlixMovie => ({
  adult: movie.adult,
  backdropPath: movie.backdrop_path,
  genreIds: movie.genre_ids,
  id: movie.id,
  originalLanguage: movie.original_language,
  originalTitle: movie.original_title,
  overview: movie.overview,
  popularity: movie.popularity,
  posterPath: movie.poster_path,
  releaseDate: movie.release_date,
  title: movie.title,
  video: movie.video,
  voteAverage: movie.vote_average,
  voteCount: movie.vote_count,
});

export const parseMovies = (movies: MovieTMDB[]): LiteFlixMovie[] =>
  movies.map(parseMovie);
