import styled from "styled-components";

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 1rem;
`

const Product = styled.span`
    font-weight: bold;
`

const Text = styled.p`
    text-align: center;
`

const ButtonBox = styled.div`
    display: flex;
    gap: .2rem;
    margin-top: 1rem;
`

const ButtonWarning = styled.button`
    outline: none;
    width: 4rem;
    height: 2rem;
    background-color: #ff4949;
    color: white;
    border: none;
    border-radius: 5px;
`

const ButtonDefault = styled.button`
    outline: none;
    width: 4rem;
    height: 2rem;
    background-color: transparent;
    color: #525252;
    border: none;
`

export { ModalContainer, Product, Text, ButtonBox, ButtonWarning, ButtonDefault }