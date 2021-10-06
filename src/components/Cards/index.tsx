import React, { useEffect, useState } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SearchInput from '../Search';

// Services
import { api } from '../../services/api';

// Types
import { PersonagemType } from '../../pages/api/characters';
//Styles
import { CardSimple, MainContainer, Title } from './styles';

export const CardList: React.FC = () => {
  //Todos os personagens
  const [characters, setCharacters] = useState<PersonagemType[]>([] as any);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    async function onSearch() {
      if (search === '') {
        if (
          localStorage.getItem('fav') === '[]' ||
          !localStorage.getItem('fav')
        ) {
          await api
            .get('/characters')
            .then(({ data }) => {
              setCharacters(data);
            })
            .catch((err) => console.log(err));
        } else {
          const fav = JSON.parse(localStorage.getItem('favItem') || '{}');
          setCharacters(fav);
        }
      } else {
        await api
          .get(`/characters?nameStartsWith=${search}`)
          .then(({ data }) => {
            setCharacters(data);
          })
          .catch((err: any) => console.log(err));
      }
    }
    onSearch();
  }, [search]);

  console.log(characters);

  //Carrega a pagina com a seguinte frase
  if (characters.length <= 0) {
    return (
      <Title variant="h6" color="white">
        {' '}
        Carregando as Informaçãoes...
      </Title>
    );
  }

  return (
    <>
      <MainContainer>
        <>
          <Title variant="h6"> Listando todos os Personagens</Title>
        </>
        <SearchInput searched={(q) => setSearch(q)}></SearchInput>
        {characters.map((data, index) => {
          return (
            <CardSimple
              key={index}
              date={data.id}
            //  updateData={setSearch}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={data.thumbnail}
                  alt={data.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                  </Typography>
                  {data.description.length > 0 && (
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
            </CardSimple>
          );
        })}
      </MainContainer>
    </>
  );
};
