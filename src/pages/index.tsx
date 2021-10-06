import type { NextPage } from 'next';
import { Navbar } from '../components/NavBar';
import { CardList } from '../components/Cards';
import { CardContainer, MainContainer } from './styles';

const Home: NextPage = () => (
  <>
    <Navbar />
    <MainContainer maxWidth="xl">
      <CardContainer>
        <CardList />
      </CardContainer>
    </MainContainer>
  </>
);
export default Home;
