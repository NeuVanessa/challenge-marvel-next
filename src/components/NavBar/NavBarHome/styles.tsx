import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Image from '@mui/material/Avatar';

export const HeaderContainer = styled.div`
  display: flex;
  background: white;
  border-radius: 5px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
  margin-top: 10px;

`;

export const Images = styled(Image)`
  width: 100px;
  height: 40px;
  left: 20px;
  border-radius: 0px;
`;
export const MainContainer = styled(Container)`

 flex-direction: row;
 display: flex;
`;
