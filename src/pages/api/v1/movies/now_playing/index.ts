import { ErrorResponse } from '@/interfaces/error_response';
import { LiteFlixMovie, MovieTMDB } from '@/interfaces/movies';
import { parseMovie } from '@/utils/moviesParser';
import { getNowPlaying } from '@/services/movies';
import type { NextApiRequest, NextApiResponse } from 'next';

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
