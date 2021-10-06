import styleds from 'styled-components';
import styled from '@emotion/styled';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const CardImage = styled(CardMedia)`
  height: 150px;
  flex-direction: row;
`;
export const Title = styled(Typography)`
  color: white;
  margin: 20px;
`;
export const Search = styleds.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  input {
    height: 50px;
    width:100%;
    padding: 20px 15px;
    background: #626F75;
    border: none;
    border-radius: 20px;
    color: white;
    margin-bottom: 25px;
    transition: all 0.2s;
    &::placeholder {
      color: white;
    }
    &:focus {
      border: 1px solid #000000;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.8);
    }
  }
`;
