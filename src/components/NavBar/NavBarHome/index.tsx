import React from 'next';
import { HeaderContainer } from './styles';
import { SimpleButtom } from '../../Button';
import { MainContainer, Images } from './styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
export const Navbar: React.FC = () => (
  <HeaderContainer>
    <MainContainer>
      <SimpleButtom to="/">
        <ArrowBackIosIcon />
        Voltar
      </SimpleButtom>
      <Images src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png" />
    </MainContainer>

  </HeaderContainer>
);
