import React from 'next';
import Link from 'next/link';

import { HeaderContainer, ContainerButton } from './styles';

export const Navbar: React.FC = () => (
  <HeaderContainer>
    <Link href="/">
      <a>Personagens</a>
    </Link>
    <Link href="/Stories">
      <a>Histórias</a>
    </Link>
    <Link href="/contact">
      <a>Histórias</a>
    </Link>
    <Link href="/contact">
      <a>Séries</a>
    </Link>

    <ContainerButton to="/Character">Informação</ContainerButton>
  </HeaderContainer>
);
