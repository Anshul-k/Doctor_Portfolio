import styled from 'styled-components'
import background1 from '../../Images/Assets/Background1.jpg'

export const FeatureConatiner = styled.div`
    display: flex;
    height: auto;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem;
    background: var(--lightBackground);
    background-image: url(${background1});
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 786px){
        flex-direction: column;
    }
`
export const FeatureElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;

    @media screen and (max-width: 786px){
        padding: 0;
    }
`
export const Image = styled.div`
    font-size: 4.5rem;
    color: var(--SecondaryLight);

    @media screen and (max-width: 786px){
        font-size: 4rem;
    }

    @media screen and (max-width: 380px){
        font-size: 3.2rem;
    }
`
export const FeatureHeading = styled.h2`
    font-weight: 700;
    align-items: center;
    color: var(--LinkTextDark);

    @media screen and (max-width: 380px){
        font-size: 1.4rem;
    }
`
export const FeatureContent = styled.p`
    color: var(--SubHeadingTextDark2);
    font-size: 1.1rem;
    font-weight: 600;

    @media screen and (max-width: 380px){
        font-size: 0.9rem;
    }
`