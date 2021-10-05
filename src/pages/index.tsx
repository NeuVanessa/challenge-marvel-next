import type { NextPage } from 'next';

import { Navbar } from '../components/NavBar';
import { CardList } from '../components/Cards';

const Home: NextPage = () => (
  <>
    <Navbar />
    <div
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
      <CardList />
    </div>
  </>
);
export default Home;
