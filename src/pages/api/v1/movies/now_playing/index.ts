// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getNowPlaying } from '@/services/movies';
import type { NextApiRequest, NextApiResponse } from 'next';
//TODO crear mi interfaz para la respuesta de mi API
//TODO Crea un parser para pasar de interface de TMDB a mi API interface
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const nowPlaying = await getNowPlaying();
    res.status(200).json(nowPlaying);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Ocurrió un error desconocido.' });
    }
  }
}
