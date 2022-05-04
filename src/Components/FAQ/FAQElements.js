import styled from "styled-components"
import { Link } from 'react-router-dom'

export const FAQLine = styled.div`
    background: ${({ darkText }) => (darkText ? 'var(--LinkTextLight)' : 'var(--SubHeadingTextDark)')};
    height: 2px;
    width: 100%;
    max-width: 440px;
    margin-bottom: 8px;
`
export const AskContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    width: 100%;
`
export const AskButton = styled(Link)`
    border-radius: 50px;
    background: var(--Button);
    white-space: nowrap;
    padding: 12px 30px;
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-shadow: 0px 5px 20px 0px rgba(257, 169, 49, 0.9);;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: var(--LinkTextLight);
        color: var(--Ternary    );
    }
`;

export const FAQImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    animation: up-down 2s ease-in-out infinite alternate-reverse both;

    @-webkit-keyframes up-down{
        0%{
            transform: translateY(8px);
        }
        100%{
            transform: translateY(-8px);
        }
    }
    @keyframes up-down{
        0%{
            transform: translateY(8px);
        }
        100%{
            transform: translateY(-8px);
        }
    }
`