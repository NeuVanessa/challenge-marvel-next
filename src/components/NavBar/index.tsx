import React from 'react';
import { HeaderContainer } from './styles';
import { SimpleButtom } from '../Button';
import { MainContainer, Images} from './styles';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddReactionIcon from '@material-ui/icons/AddAlertSharp';
import MenuBookIcon from '@material-ui/icons/MenuBook';
export const Navbar: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Images src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png" />

        <MainContainer>
          <SimpleButtom to="/">
            <PersonOutlineIcon />
            Inicio
          </SimpleButtom>
          {'\n'}
          <SimpleButtom to="/Stories">
            <MenuBookIcon />
            Histórias
          </SimpleButtom>
          {'\n'}
          <SimpleButtom to="/Series">
            <AddReactionIcon />
            Séries
          </SimpleButtom>
        </MainContainer>
      </HeaderContainer>
    </>
  );
};
