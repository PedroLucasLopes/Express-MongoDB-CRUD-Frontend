import styled from "styled-components";

const Container = styled.div`
animation: move .5s ease-in-out;
    @keyframes move {
        from {
            opacity: 0;
            transform: translate3d(-20px,0, 0);

        } to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
    @media (min-width: 650px) {
    margin: 0 18rem;
  }
`

const Title = styled.h1`
    font-weight: 600;
    font-size: 1.7rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    animation: appear .5s ease-in;
    @keyframes appear {
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
`

const FormDiv = styled.form`
    margin: 0 1rem;
`

export { Div, FormDiv, Title, Container }