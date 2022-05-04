import styled from "styled-components";

export const ServiceConatiner = styled.div`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--lightBackground);
`
export const MyServices = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`
export const Cards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 786px) {
        flex-direction: column;
    }
`
export const PlusRotation = styled.img`
    position: absolute;
    animation: Rotation 20s linear infinite;
    left: 5%; 
    top: 20%;

    @keyframes Rotation {
    100% {transform: rotate(360deg);}
    }

    @media screen and (max-width: 760px){
        top: 15%;
    }
`