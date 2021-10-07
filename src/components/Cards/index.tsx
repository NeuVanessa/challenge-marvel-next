import React, { useEffect, useState } from 'react';

// Services
import { api } from '../../services/api';

//Image Material Ui
import CardMedia from '@mui/material/CardMedia';

// Types
import { PersonagemType } from '../../pages/api/characters';
//Styles
import {
  Title,
  Search,
  Containers,
  CardLists,
  Cards,
  Description,
  ContentCard,
} from './styles';

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

  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Containers>
        <div
          style={{
            flexDirection: 'column',
            marginLeft: 'auto',
            display: 'block',
            marginRight: 'auto',
            padding: 30,
          }}
        >
          <Title variant="h6">Listando todos os Personagens</Title>

          <Search>
            <input
              onChange={handleChange}
              placeholder="Digite o nome do personagem"
            />
          </Search>
        </div>
        <CardLists>
          {characters.map((data) => {
            if (
              search == '' ||
              data.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return (
                <Cards>
                  <CardMedia
                    component="img"
                    height="140"
                    image={data.thumbnail}
                    alt={data.name}
                  />
                  <ContentCard>
                    <Description gutterBottom variant="h5">
                      {data.name}
                    </Description>
                    {data.description.length > 0 && (
                      <Description variant="body2" color="text.secondary">
                        {data.description}
                      </Description>
                    )}
                  </ContentCard>
                </Cards>
              );
            }
            return null;
          })}
        </CardLists>
      </Containers>
    </>
  );
};
