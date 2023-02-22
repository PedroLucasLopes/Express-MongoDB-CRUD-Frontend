import React from 'react'
import * as Styled from './styles/ErrorStyle';

const Error = ({ message }) => {
    return (
        <Styled.Error>{message}</Styled.Error>
    )
}

export default Error
