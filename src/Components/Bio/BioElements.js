import styled from 'styled-components'

export const BioWrapper = styled.div`
    max-width: 540px;
    padding-bottom: 30px;
    padding-left: 2rem;
    
    @media screen and (max-width: 480px){
        padding-bottom: 0;
    }
    
`
export const BioSubheading = styled.p`
    max-width: 440px;
    margin-bottom: 0.5rem;
    font-size: 17px;
    line-height: 22px;
    color: var(--SubHeadingTextDark2);

    @media screen and (max-width: 480px){
        font-size: 15px;
    }
`
export const Button = styled.button`
    border-radius: 50px;
    background: var(--Button);
    white-space: nowrap;
    padding: 12px 30px;
    color: #fff;
    font-size: 15px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-shadow: 0px 2px 20px 0px rgba(251, 161, 49, 0.9);
    margin: 1rem;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: var(--LinkTextLight);
        color: var(--Ternary);
    }

    @media screen and (max-width: 480px){
        font-size: 12px;
    }
`

export const PlusSign = styled.img`
    position: absolute;
    animation: up-down 1.5s infinite alternate;
    right: 9%;
    top: 10%;
` 