import styleds from 'styled-components';
import styled from '@emotion/styled';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
export const CardImage = styled(CardMedia)``;
export const CardSimple = styled(Card)`
  width: 100%;
  margin: 1.1rem 0;
`;
export const Title = styled(Typography)`
  color: white;
  margin: 20px;
`;
export const Search = styleds.div`
  min-width: 560px;
  display: flex;
  flex-direction: column;
  input {
    height: 50px;
    width:68%;
    padding: 20px 15px;
    background: #1F3042;
    border: none;
    border-radius: 20px;
    color: white;
    margin-bottom: 25px;
    transition: all 0.2s;
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
