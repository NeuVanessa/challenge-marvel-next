import styled from '@emotion/styled';

//Material Ui
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const ContentCard = styled(CardContent)``;
export const CardSimple = styled(Card)`
  width: 100%;
  margin: 1.1rem 0;
`;
export const Title = styled(Typography)`
  position: relative;
  color: #1f3042;
  left: 50px;
`;

export const Description = styled(Typography)`
  color: white;
`;
export const Search = styled(Container)`
  min-width: 560px;
  display: flex;
  flex-direction: column;
  input {
    height: 50px;
    width: 68%;
    padding: 20px 15px;
    background: #1f3042;
    border: none;
    border-radius: 20px;
    color: white;
    margin-bottom: 25px;
    transition: all 0.2s;
    flex-direction: column;
    &::placeholder {
      color: #a9aaae;
    }
    &:focus {
      border: 1px solid #000000;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.8);
    }
  }
`;
export const MainContainer = styled(Container)`
  background: transparent;
`;

export const Cards = styled(Card)`
  height: 300px;
  width: 450px;
  overflow: hidden;
  margin: 30px;
  border-radius: 5px;
  box-shadow: 2px 2px 30px 1 rgba(0, 0, 0, 0.3);
  background-color: #7a1f30;
`;

export const Containers = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
export const CardLists = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #ffffff;
`;
