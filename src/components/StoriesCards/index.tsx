import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Services
import { api } from '../../services/api';

// Types
import { HistoriasType } from '../../pages/api/comics';

export const StoriesCards: React.FC = () => {
  const [comics, setComics] = useState<HistoriasType[]>([] as any);

  useEffect(() => {
    api.get('/comics').then(({ data }) => {
      setComics(data);
    });
  }, []);

  if (comics.length <= 0) {
    return <>Carregando Histórias em Quadrinhos...</>;
  }

  return (
    <>
      {comics.map((comic) => (
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
    </>
  );
};
