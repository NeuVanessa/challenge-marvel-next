import React, { useEffect, useState } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Services
import { api } from '../../services/api';

// Types
import { PersonagemType } from '../../pages/api/characters';
//Styles
import { CardSimple, Search,MainContainer,Title } from './styles';



export const CardList: React.FC = () => {
  //Todos os personagens
  const [characters, setCharacters] = useState<PersonagemType[]>([] as any);

  //Buscando o characters apenas uma unica vez com o useEffect.
  useEffect(() => {
    api.get(`/characters`).then(({ data }) => {
      setCharacters(data);
    });
  }, []);

  //Carrega a pagina com a seguinte frase
  if (characters.length <= 0) {
    return <Title variant="h6" color="white"> Carregando as Informaçãoes...</Title>;
  }

  return (
    <>
      <MainContainer>
        <>
          <Title variant="h6"> Listando todos os Personagens</Title>
        </>
        <Search>
          <input placeholder="Pesquise seus personagens" />
          {characters.map((character) => (
            <CardSimple key={character.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={character.thumbnail}
                  alt={character.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {character.name}
                  </Typography>
                  {character.description.length > 0 && (
                    <Typography variant="body2" color="text.secondary">
                      {character.description}
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
            </CardSimple>
          ))}
        </Search>
      </MainContainer>
    </>
  );
};
