import { NextApiHandler } from 'next';
import { apiMarvel } from '../../services/apiMarvel';

export type HistoriasType = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
};

export type HistoriasDataApi = Array<HistoriasType>;

const handler: NextApiHandler<HistoriasDataApi> = async (req, res) => {
  const comics = [] as HistoriasType[];

  try {
    const { data } = await apiMarvel.get<any>('/comics');

    data.data.results.map((comic: any) => {
      comics.push({
        id: String(comic.id),
        title: comic.title,
        description: comic.description,
        thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      });

      return comic;
    });

    return res.json(comics);
  } catch (error) {
    return res.json(comics);
  }
};

export default handler;
