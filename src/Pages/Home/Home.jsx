import React from 'react';
import * as Styled from './Styles/HomeStyle';
import Card from '../../Components/Card/Card';

const products = [
    {
        name: 'Geladeira Tsunami',
        description: 'Geladeira Samsung 2 portas',
        price: 2500.00
    },
    {
        name: 'Frigideira Jest',
        description: 'Frigideira Jest feita por teste automatizado',
        price: 200.00
    },
    {
        name: 'Panela de pressão',
        description: 'Panela de pressão Eletrolux',
        price: 120.00
    },
    {
        name: 'Churrasqueira Elétrica',
        description: 'Churrasqueira Eletrica que pega fogo',
        price: 350.00
    },
    {
        name: 'Conjunto de pratos',
        description: 'Conjunto de 25 pratos rasos Inox',
        price: 120.50
    },
]

const Home = ({ search }) => {
    return (
        <Styled.Main>
            <Styled.Title>Products</Styled.Title>
            {
                products.map(({ name, description, price }) => {
                    <Card
                        key={name}
                        name={name}
                        description={description}
                        price={Number(price).toFixed(2)}
                    />
                })
            }
        </Styled.Main>
    )
}

export default Home;
