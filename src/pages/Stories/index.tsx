import type { NextPage } from 'next';
import { Navbar } from '../../components/NavBar/NavBarHome';
import { StoriesCards } from '../../components/StoriesCards';
const Series: NextPage = () => (
  <>
   <Navbar/>
    <StoriesCards />
  </>
);
export default Series;
