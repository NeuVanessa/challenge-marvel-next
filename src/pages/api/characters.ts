import { NextApiHandler } from 'next';
import { apiMarvel } from '../../services/apiMarvel';

export type PersonagemType = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
};

export type PersonagensDataApi = Array<PersonagemType>;

const handler: NextApiHandler<PersonagensDataApi> = async (req, res) => {
  const characters = [] as PersonagemType[];

  try {
    const { data } = await apiMarvel.get<any>('/characters');

    data.data.results.map((character: any) => {
      characters.push({
        id: String(character.id),
        name: character.name,
        description: character.description,
        thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      });

      return character;
    });

    return res.json(characters);
  } catch (error) {
    return res.json(characters);
  }
};

export default handler;
