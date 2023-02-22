import { CardContent, Typography } from '@mui/material';
import React from 'react';
import * as Styled from './styles/CardStyle.jsx';
import Delete from '../../assets/delete.svg';
import Edit from '../../assets/edit.svg';
import DeleteConfirmation from '../../Components/DeleteConfirmation/DeleteConfirmation.jsx';
import { Link } from 'react-router-dom';

const Card = ({ name, description, price, id }) => {
    const [modal, setModal] = React.useState(false)
    return (
        <Styled.CardBox>
            <CardContent>
                <Typography sx={{ fontSize: 24, fontWeight: 600 }} variant='h5'>{name}</Typography>
                <Typography color="text.secondary">{description}</Typography>
                <Styled.Price sx={{ fontWeight: 600 }} variant='p'>R${price}</Styled.Price>
            </CardContent>
            <Styled.CardAction>
                <Styled.ButtonCrud onClick={() => {
                    setModal(!modal)
                }} disabled={modal ? true : false}>
                    <Styled.Icon src={Delete} alt="Delete User" />
                </Styled.ButtonCrud>
                <Link to={`/edit/${id}`}>
                    <Styled.ButtonCrud>
                        <Styled.Icon src={Edit} alt="Edit User" />
                    </Styled.ButtonCrud>
                </Link>
            </Styled.CardAction>
            {modal ? <DeleteConfirmation name={name} modal={modal} setModal={setModal} id={id} /> : ''}
        </Styled.CardBox>
    )
}

export default Card;
