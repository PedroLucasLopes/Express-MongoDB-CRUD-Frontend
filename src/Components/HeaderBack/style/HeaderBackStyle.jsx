import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
`

const BackBox = styled.div`
    position: relative;
`

const Back = styled.img`
    background-color: transparent;
    border: none;
    outline: none;
    opacity: .8;
    margin-top: 1.2rem;
    margin-right: 80vw;
`

const Img = styled.img`
    width: 8rem;
    animation: appear .5s ease-in;
    @keyframes appear {
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }
    @media (min-width: 650px) {
    width: 10rem;
  }
`

export { Div, BackBox, Back, Img }