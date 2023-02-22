import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/pricemet-logo.png';
import Back from '../../assets/back.svg';
import * as Styled from './style/HeaderBackStyle';

const HeaderBack = ({ path }) => {
    return (
        <Styled.Div>
            <Link to={path}>
                <Styled.Img src={Logo} alt='Pricemet Logo' />
            </Link>
            <Styled.BackBox>
                <Link to={path}>
                    <Styled.Back src={Back} alt="back to main page" />
                </Link>
            </Styled.BackBox>
        </Styled.Div>
    )
}

export default HeaderBack;
