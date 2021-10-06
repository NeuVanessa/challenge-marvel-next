import React from 'react';
import { HeaderContainer } from './styles';
import { SimpleButtom } from '../Button';
import { MainContainer } from './styles';

export const Navbar: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        {/* <img
          src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png"
          style={{ width: 80, height: 40, left: 20 }}
        /> */}

        <MainContainer>
          <SimpleButtom to="/">Inicio</SimpleButtom>
          {'\n'}
          <SimpleButtom to="/Stories">Histórias</SimpleButtom>
          {'\n'}
          <SimpleButtom to="/Series">Séries</SimpleButtom>
        </MainContainer>
      </HeaderContainer>
    </>
  );
};
