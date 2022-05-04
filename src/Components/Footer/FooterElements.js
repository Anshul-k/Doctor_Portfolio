import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: var(--LinkTextDark);
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    margin: 1em;
`;
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    transition: 0.3s;
    margin: 0rem 0.5rem 0rem 0.5rem;
    
    :hover{
        transform: scale(1.2);
        color: var(--Ternary);
    }
`;

export const Name = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;

    :hover{
        color: var(--Ternary);
    }
`;

export const WebsiteRights = styled.p`
    color: #fff;
    margin: 1em;
`;