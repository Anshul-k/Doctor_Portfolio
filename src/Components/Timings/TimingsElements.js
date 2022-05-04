import styled from "styled-components";
import Waveylines from '../../Images/Assets/Waveylines.png'

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    padding: 3rem;
    background: var(--PrimaryLight);
    background-image: url(${Waveylines});
    background-size: cover;
    background-position: center center;
`
export const Table = styled.table`
    width: 100%; 
    max-width: 50rem;
    border-collapse: collapse;
    border-spacing: 0;
    box-shadow: 0 2px 15px rgba(64,64,64,.7);
    border-radius: 12px 12px;
    overflow: hidden;
`
export const TableRow = styled.tr`
    width: 100%;
    background: #fafafa;
    font-family: 'Montserrat', sans-serif;
    transition: all 0.2s ease-in-out;
    cursor: pointer; 

    :hover{
        background: #f6f6f6;
        transform: scale(1.02);
        border: none;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);
    }

    @media screen and (max-width: 440px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #ddd;
    }
`
export const TableHeading = styled.h1`
    padding: 15px 20px;
    text-align: center;
    background: var(--SecondaryDark);
    color: #fafafa;
    font-weight: 500;
    border-collapse: collapse;
    border-spacing: 0;
    box-shadow: 0 2px 8px rgba(64,64,64,.7);
    border-radius: 12px 12px;
    overflow: hidden;
    width: 100%;
    max-width: 50rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover{
        background: var(--SecondaryLight);
        transform: scale(1.02);
        color: var(--PrimaryDark);
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);
    }
`
export const TableData = styled.td`
    padding: 20px 20px;
    text-align: center; 
    border-bottom: 1px solid #ddd;
    font-weight: 600;
    font-size: 1rem;

    @media screen and (max-width: 440px) {
        border-bottom: 0px;
        padding: 8px;
    }

    :hover{
        font-size: 1.2rem;
    }
`
export const SquarePrimaryImage = styled.img`
    position: absolute;
    animation: up-down 1.5s infinite alternate;
    left: 5%; 
    bottom: 20%;

    @media screen and (max-width: 760px){
        left: 0;
    }
` 