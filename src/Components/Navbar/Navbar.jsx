import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/pricemet-logo.png';
import Add from '../../assets/add.svg';
import * as Styled from './styles/NavbarStyle.jsx';

const Navbar = ({ setSearch, search }) => {
    return (
        <Styled.Div>
            <Link to='/'>
                <Styled.Img src={Logo} alt='Pricemet Logo' />
            </Link>
            <Styled.SearchBox>
                <Styled.Input label='Search for a product' variant="standard" onChange={({ target }) => { setSearch(target.value) }} />
                <Styled.LinkAdd to={'/new'}>
                    <img src={Add} alt="Add a new Product" />
                </Styled.LinkAdd>
            </Styled.SearchBox>
        </Styled.Div >
    )
}

export default Navbar;
