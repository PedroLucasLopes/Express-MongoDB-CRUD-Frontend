import React from 'react';
import * as Styled from './Styles/DeleteConfirmationStyle.jsx';
import instance from "../../utils/instance";

const DeleteConfirmationStyle = ({ name, modal, setModal, id }) => {
    return (
        <Styled.ModalContainer>
            <Styled.Text>Tem certeza que deseja excluir <Styled.Product>{name}</Styled.Product>?</Styled.Text>
            <Styled.ButtonBox>
                <Styled.ButtonWarning onClick={() => {
                    instance.delete(`products/${id}`);
                }}>Excluir</Styled.ButtonWarning>
                <Styled.ButtonDefault onClick={() => {
                    setModal(!modal);
                }}>Manter</Styled.ButtonDefault>
            </Styled.ButtonBox>
        </Styled.ModalContainer>
    )
}

export default DeleteConfirmationStyle;
