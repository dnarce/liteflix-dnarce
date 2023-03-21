// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ErrorResponse } from '@/interfaces/error_response';
import { LiteFlixMovie, MovieTMDB } from '@/interfaces/movies';
import { getNowPlaying } from '@/services/movies';
import type { NextApiRequest, NextApiResponse } from 'next';

//TODO: Mover este parser
//TODO: Agregar los diferentes tipos de REST call [get, post, put]
const parseMovie = (movie: MovieTMDB): LiteFlixMovie => ({
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LiteFlixMovie | ErrorResponse>
) {
  try {
    const nowPlaying = await getNowPlaying();
    res.status(200).json(parseMovie(nowPlaying));
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Ocurrió un error desconocido.' });
    }
  }
}
