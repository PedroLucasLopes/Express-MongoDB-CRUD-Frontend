import React from 'react';
import * as Styled from './styles/NewProductStyle.jsx';
import { TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, Button } from '@mui/material';
import instance from '../../utils/instance.js';
import Error from '../../Components/Error/Error.jsx';
import HeaderBack from '../../Components/HeaderBack/HeaderBack.jsx';

const NewProduct = () => {
    const [errorName, setErrorName] = React.useState(false);
    const [errorDesc, setErrorDesc] = React.useState(false);
    const [errorPrice, setErrorPrice] = React.useState(false);

    const [name, setName] = React.useState();
    const [description, setDescription] = React.useState();
    const [price, setPrice] = React.useState();

    return (
        <Styled.Container>
            <HeaderBack path='/' />
            <Styled.FormDiv htmlFor='buttonSubmit' onSubmit={() => {
                instance.post('/products', {
                    name: name,
                    description: description,
                    price: price
                })
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }}>
                <Styled.Title>Add a new Product</Styled.Title>
                <FormControl fullWidth sx={{ s: 1, marginBottom: 3, marginTop: 2 }}>
                    <TextField id="outlined-basic-name" label="Product Name" variant="outlined" onChange={({ target }) => {
                        if (target.value != '') {
                            setName(target.value);
                            setErrorName(false);
                        } else {
                            setErrorName(true);
                        }
                    }} required />
                    {errorName && <Error message='O nome do produto é obrigatório!' />}
                </FormControl>
                <FormControl fullWidth sx={{ s: 1, marginBottom: 3 }}>
                    <TextField id="outlined-basic-description" label="Product Description" variant="outlined" onChange={({ target }) => {
                        if (target.value != '') {
                            setDescription(target.value);
                            setErrorDesc(false);
                        } else {
                            setErrorDesc(true);
                        }
                    }} required />
                    {errorDesc && <Error message='A descrição não pode estar vazia' />}
                </FormControl>
                <FormControl fullWidth sx={{ s: 1, marginBottom: 3 }}>
                    <InputLabel htmlFor="outlined-adornment-price" required>Price</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-price"
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        label="Amount"
                        onChange={({ target }) => {
                            if (target.value != '' && target.value > 0) {
                                const parseValue = Number(target.value);
                                setPrice(parseValue);
                                setErrorPrice(false);
                            } else {
                                setErrorPrice(true);
                            }
                        }}
                        required
                    />
                </FormControl>
                {errorPrice && <Error message='Coloque um valor numérico válido maior que 0' />}
                <Button type={errorName == false && errorDesc == false && errorPrice == false ? 'submit' : 'button'} variant="contained" id='buttonSubmit'>Add Product</Button>
            </Styled.FormDiv>
        </Styled.Container>
    )
}

export default NewProduct;
