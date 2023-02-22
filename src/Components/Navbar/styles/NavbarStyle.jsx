import styled from 'styled-components';
import { TextField } from '@mui/material';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`
const Img = styled.img`
    width: 8rem;
`

const Input = styled(TextField)`
    width: 95%;
`

export { Img, Div, Input };