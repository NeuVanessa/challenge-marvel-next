import type { NextPage } from 'next';
import { SeriesCard } from '../../components/SeriesCard';
import Container from '@mui/material/Container';

const Series: NextPage = () => (
  <Container
    maxWidth="xl"
    style={{
      backgroundColor: '#4F1D26',
    }}
  >
    <>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '400px',
          width: '100%',
          margin: 'auto',
          padding: '0 16px',
        }}
      >
        <SeriesCard />
      </Container>
    </>
  </Container>
);
export default Series;
