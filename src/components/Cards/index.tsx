import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Services
import { api } from '../../services/api';

// Types
import { PersonagemType } from '../../pages/api/characters';

export const CardList: React.FC = () => {
  const [characters, setCharacters] = useState<PersonagemType[]>([] as any);

  useEffect(() => {
    api.get('/characters').then(({ data }) => {
      setCharacters(data);
    });
  }, []);

  if (characters.length <= 0) {
    return <>Carregando...</>;
  }

  return (
    <>
      {characters.map((character) => (
        <Card
          key={character.id}
          style={{
            width: '100%',
            margin: '2rem 0',
          }}
        >
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
        </Card>
      ))}
    </>
  );
};
