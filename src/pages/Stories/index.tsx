import type { NextPage } from 'next';
import { StoriesCards } from '../../components/StoriesCards';
import Container from '@mui/material/Container';

const Stories: NextPage = () => (
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
        <StoriesCards />
      </Container>
    </>
  </Container>
);
export default Stories;
