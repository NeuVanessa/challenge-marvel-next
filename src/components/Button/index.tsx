import React from 'react';
import { useRouter } from 'next/router';
import { ButtonContainer } from './styles';

type Props = {
  to: string;
};
export const SimpleButtom: React.FC<Props> = ({ children, to }) => {
  const router = useRouter();
  const hendleButtonBack = () => {
    router.push(to);
  };
  return (
    <ButtonContainer onClick={hendleButtonBack}>{children}</ButtonContainer>
  );
};
