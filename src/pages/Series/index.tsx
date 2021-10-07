import type { NextPage } from 'next';
import { SeriesCard } from '../../components/SeriesCard';
import { Navbar } from '../../components/NavBar/NavBarHome';

const Series: NextPage = () => (
  <>
   <Navbar/>
    <SeriesCard />
  </>
);
export default Series;
