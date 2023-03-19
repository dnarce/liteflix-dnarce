// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getNowPlaying } from '@/libs/movies';
import type { NextApiRequest, NextApiResponse } from 'next';

// type Data = {
//   name: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const nowPlaying = await getNowPlaying();
    console.log(nowPlaying);
    res.status(200).json(nowPlaying);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Ocurrió un error desconocido.' });
    }
  }
}
