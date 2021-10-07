import type { NextPage } from 'next';
import { CardList } from '../components/Cards';
import { Navbar } from '../components/NavBar';
const Home: NextPage = () => (
  <>
    <Navbar />
    <CardList />
  </>
);
export default Home;
