import type { NextPage } from 'next';
import { StoriesCards } from '../../components/StoriesCards';

const Stories: NextPage = () => (
  <>

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
      <StoriesCards />
    </div>
  </>
);
export default Stories;
