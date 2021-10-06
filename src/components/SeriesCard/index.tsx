import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Navbar } from '../NavBar/NavBarHome';
// Services
import { api } from '../../services/api';

// Types
import { SeriesType } from '../../pages/api/series';

import { Search, Title } from './styles';

export const SeriesCard: React.FC = () => {
  const [series, setSeries] = useState<SeriesType[]>([] as any);

  useEffect(() => {
    api.get('/series').then(({ data }) => {
      setSeries(data);
    });
  }, []);

  if (series.length <= 0) {
    return <>Carregando Séries ...</>;
  }

  return (
    <>
      <Navbar />
      <>
        <Title>Mostrado Séries </Title>
      </>

      <Search>
        {/* Colocado apenas para deixar o designer mais elegante */}
        <input placeholder="Pesquise suas séries" />
        {series.map((comic) => (
          <Card
            key={comic.id}
            style={{
              width: '100%',
              margin: '2rem 0',
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={comic.thumbnail}
                alt={comic.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {comic.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {comic.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Search>
    </>
  );
};
