import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    width: 100%;
    background: var(--lightBackground);
`
export const LocationConatiner = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: auto;
    background: var(--colorBackground);
    padding: 2rem;

    @media screen and (max-width: 760px){
        flex-direction: column;
    }
`
export const Location = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Varela Round', sans-serif;
    font-weight: 400;
    color: var(--LinkTextLight);

    @media screen and (max-width: 760px){
        margin-top: 1rem;
    }
`
export const Map = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
`
export const MapReact = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
`