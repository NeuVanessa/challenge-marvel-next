import React, { useEffect, useState } from 'react';
import { Navbar } from '../NavBar/NavBarHome';
// Services
import { api } from '../../services/api';

//Image Material Ui
import CardMedia from '@mui/material/CardMedia';

// Types
import { SeriesType } from '../../pages/api/series';
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

export const SeriesCard: React.FC = () => {
  //Todos os personagens
  const [series, setSeries] = useState<SeriesType[]>([] as any);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    async function onSearch() {
      if (search === '') {
        if (
          localStorage.getItem('fav') === '[]' ||
          !localStorage.getItem('fav')
        ) {
          await api
            .get('/series')
            .then(({ data }) => {
              setSeries(data);
            })
            .catch((err) => console.log(err));
        } else {
          const fav = JSON.parse(localStorage.getItem('favItem') || '{}');
          setSeries(fav);
        }
      } else {
        await api
          .get(`/series?nameStartsWith=${search}`)
          .then(({ data }) => {
            setSeries(data);
          })
          .catch((err: any) => console.log(err));
      }
    }
    onSearch();
  }, [search]);

  //console.log(series);

  //Carrega a pagina com a seguinte frase
  if (series.length <= 0) {
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
          {series.map((data) => {
            if (
              search == '' ||
              data.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return (
                <Cards>
                  <CardMedia
                    component="img"
                    height="140"
                    image={data.thumbnail}
                    alt={data.title}
                  />
                  <ContentCard>
                    <Description gutterBottom variant="h5">
                      {data.title}
                    </Description>

                    <Description variant="body2" color="text.secondary">
                      {data.description}
                    </Description>
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
