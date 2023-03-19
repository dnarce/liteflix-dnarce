// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPopularMovies } from '@/libs/movies';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    //TODO: agregar variables para controlar la cantidad de resultados
    const popularMovies = await (await getPopularMovies()).slice(0, 4);
    res.status(200).json(popularMovies);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Ocurrió un error desconocido.' });
    }
  }
}
