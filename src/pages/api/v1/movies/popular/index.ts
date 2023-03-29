import { ErrorResponse } from '@/interfaces/error_response';
import { LiteFlixMovie, MovieTMDB } from '@/interfaces/movies';
import { parseMovies } from '@/utils/moviesParser';
import { getPopularMovies } from '@/services/movies';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LiteFlixMovie[] | ErrorResponse>
) {
  try {
    const popularMovies = (await getPopularMovies()).slice(0, 4);
    res.status(200).json(parseMovies(popularMovies));
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Ocurrió un error desconocido.' });
    }
  }
}
