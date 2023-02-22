import { CardContent, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import React from 'react';
import * as Styled from './styles/CardStyle.jsx';

const Card = ({ name, description, price }) => {
    return (
        <Styled.CardBox>
            <CardContent>
                <Typography sx={{ fontSize: 24, fontWeight: 600 }} variant='h5'>{name}</Typography>
                <Typography color="text.secondary">{description}</Typography>
                <Styled.Price sx={{ fontWeight: 600 }} variant='p'>R${price}</Styled.Price>
            </CardContent>
            <CardActions>
            </CardActions>
        </Styled.CardBox>
    )
}

export default Card;
