
import { NextApiHandler } from 'next';
//ApiMarvel Inportando
import { apiMarvel } from '../../services/apiMarvel';


//Criando os tipos de personagens
export type SeriesType = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
};

//Criando um Export caso precise resgatar em determinado lugar
export type SeriesDataApi = Array<SeriesType>;

//Usando o async function para trazer todos os characters da API em formato json
const handler: NextApiHandler<SeriesDataApi> = async (req, res) => {
  //criação do array characters
  const series = [] as SeriesType[];

  //Try cath tem a função push que traz com ele todos os dados listados dentro do map
  try {
    const { data } = await apiMarvel.get<any>(`/series`);

    data.data.results.map((character: any) => {
      series.push({
        id: String(character.id),
        title: character.title,
        description: character.description,
        thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      });

      return character;
    });
    //retornando o characters
    return res.json(series);
    // caso tenha algum erro na resposta retorna abaixo.
  } catch (error) {
    return res.json(series);
  }
};

export default handler;
