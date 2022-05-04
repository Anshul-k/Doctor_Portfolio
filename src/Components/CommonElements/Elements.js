import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? 'var(--lightBackground)' : 'var(--colorBackground)')};


    @media screen and (max-width: 786px){
        padding: 40px 0;
    }

    @media screen and (max-width: 480px){
        padding: 10px 0;
    }
`
export const Wrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    padding-top: 1rem;

     @media screen and (max-width: 786px){
        padding-top: 0;
    }
`
export const Row = styled.div`
    width: auto;
    height: auto;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 786px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 50px;

    @media screen and (max-width: 786px){
        padding-bottom: 0;
    }
`
export const Topline = styled.p`
    color: var(--SecondaryLight);
    font-size: 22px;
    line-height: 22px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 1rem;
    margin-top: 0;
    padding: 0 0 0 5px;

    @media screen and (max-width: 480px){
        font-size: 19px;
    }

`
export const ToplineContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 45px;
    line-height: 1.1.%;
    font-weight: 600;
    color: var(--LinkTextDark);
    display: flex;
    align-items: center;
    font-weight: bold;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const Subheading = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    color: var(--HeadingTextDark);

    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`
export const Subheading2 = styled.p`
    max-width: 440px;
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    color: var(--SubHeadingTextDark2);

    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`
export const Line = styled.div`
    background: var(--SecondaryLight);
    height: 4px;
    margin: 0 20px 8px 0;
    width: 75px;
`

export const WhatsAppButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ece5dd;
    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 50px;
    background: #25d366;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    z-index: 2;
    height: 4.2rem;
    width: 4.2rem;
    font-size: 2.3rem;
    transition: 1s;
    box-shadow: 1px 1px 4px 0px black;

    &:hover{
        transform: scale(1.3);
        color: #fff;
    }

    @media screen and (max-width: 480px){
        height: 4rem;
        width: 4rem;
        font-size: 2.2rem;
    }
`

export const ScrollToTopButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    color: white; 
    bottom: 114px;
    right: 35px;
    border-radius: 50px;
    background: var(--SecondaryLight);
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    z-index: 2;
    height: 3.6rem;
    width: 3.6rem;
    font-size: 2.1rem;
    transition: 1s;
    box-shadow: 1px 1px 4px 0px black;

    &:hover{
        transform: scale(1.15);
        color: #fff;
    }

    @media screen and (max-width: 480px){
        height: 3.3rem;
        width: 3.3rem;
        font-size: 1.9rem;
    }
`
