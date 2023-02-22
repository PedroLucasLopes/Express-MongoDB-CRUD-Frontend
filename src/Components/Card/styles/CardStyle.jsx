import { Card, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import styled from 'styled-components';

const CardBox = styled(Card)`
  margin-bottom: 2rem;
  animation: side .5s ease-out;
  @keyframes side {
    from {
      opacity: 0;
      transform: translate3d(0, -20px, 0);
    } to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`

const Price = styled(Typography)`
  font-weight: 600;
  margin-top: 2rem;
`

const Icon = styled.img`
  width: 1rem;
  opacity: .6;
  margin-right: .2rem;
  align-self: flex-end;
  margin-right: .5rem;
`

const ButtonCrud = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
`

const CardAction = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export { CardBox, Price, Icon, CardAction, ButtonCrud };
