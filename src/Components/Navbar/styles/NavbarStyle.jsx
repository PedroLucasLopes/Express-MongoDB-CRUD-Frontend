import styled from 'styled-components';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 1rem;
`
const Img = styled.img`
    width: 8rem;
    @media (min-width: 650px) {
    width: 10rem;
    animation: appear .5s ease-in;
    @keyframes appear {
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }
  }
`

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Input = styled(TextField)`
    width: 80vw;
`

const LinkAdd = styled(Link)`
    background-color: transparent;
    border: none;
    outline: none;
    opacity: .8;
    margin-top: 1.2rem;
`

export { Img, Div, Input, LinkAdd, SearchBox };