import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/pricemet-logo.png';
import * as Styled from './styles/NavbarStyle.jsx';

const Navbar = ({ setSearch, search }) => {
    console.log(search)
    return (
        <Styled.Div>
            <Link to='/'>
                <Styled.Img src={Logo} alt='Pricemet Logo' />
            </Link>
            <Styled.Input label='Search for a product' variant="standard" onChange={({ target }) => { setSearch(target.value) }} />
        </Styled.Div>
    )
}

export default Navbar;
