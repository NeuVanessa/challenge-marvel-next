
import { NextApiHandler } from 'next';
//ApiMarvel Inportando
import { apiMarvel } from '../../services/apiMarvel';


//Criando os tipos de personagens
export type PersonagemType = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
};

//Criando um Export caso precise resgatar em determinado lugar
export type PersonagensDataApi = Array<PersonagemType>;

//Usando o async function para trazer todos os characters da API em formato json
const handler: NextApiHandler<PersonagensDataApi> = async (req, res) => {
  //criação do array characters
  const characters = [] as PersonagemType[];

  //Try cath tem a função push que traz com ele todos os dados listados dentro do map
  try {
    const { data } = await apiMarvel.get<any>(`/characters`);

    data.data.results.map((character: any) => {
      characters.push({
        id: String(character.id),
        name: character.name,
        description: character.description,
        thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      });

      return character;
    });
    //retornando o characters
    return res.json(characters);
    // caso tenha algum erro na resposta retorna abaixo.
  } catch (error) {
    return res.json(characters);
  }
};

export default handler;
