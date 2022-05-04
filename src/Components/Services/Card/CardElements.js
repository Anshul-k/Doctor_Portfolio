import styled from "styled-components";

export const CardConatiner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.16);
    border: 5px solid rgba(241, 119, 50, 0.65);
    box-shadow: 0px 19px 60px rgb(0 0 0 / 8%);
    border-radius: 20px;
    padding: 0px 26px 2rem 26px;
    margin: auto;
`
export const CardImg = styled.img`
    transform: scale(0.65);
    margin-bottom: -2rem;
    width: 100%;
    height: 100%;
`
export const CardHeading = styled.span`
    color: var(--SubHeadingTextDark);
    font-weight: 600;
    font-size: 1.15rem;
`
export const CardDetail = styled.span`
    color: var(--SubHeadingTextDark2);
    font-size: 1rem;
`

