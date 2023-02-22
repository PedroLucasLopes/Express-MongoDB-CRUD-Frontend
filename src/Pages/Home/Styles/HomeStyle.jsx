import styled from 'styled-components';

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

const Main = styled.main`
    margin: 1.5rem 1rem;
    position: relative;

    @media (min-width: 468px) {
    margin: 0 18rem;
  }
`

const GridCard = styled.div`
  @media (min-width: 468px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 20px;
  }
`

export { Title, Main, GridCard }