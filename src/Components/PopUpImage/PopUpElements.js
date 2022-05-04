import styled from "styled-components";

export const PopImage = styled.img`
    cursor: pointer;
    width: 100%;
    height: 100%;
`
export const PopWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;

    @media screen and (max-width: 640px) {
        flex-direction: column;
    }
`
export const PopWrapperImages = styled.div`
`
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(27, 27, 27, 0.541);
    display: flex;
    align-items: center;
    z-index: 50;
`
export const OverlayImg = styled.img`
    display: block;
    max-width: 100%;
    max-height: 90%;
    margin: 60px auto;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
`
export const OverlaySpan = styled.span`
    position: fixed;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: #ffffff;
    z-index: 50;
    cursor: pointer;
`
export const OverlayArrowsLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    width: 4rem;
    height: 4rem;
    left: 1rem;
    z-index: 50;

    @media screen and (max-width: 480px){
        left: 0;
    }
`
export const OverlayArrowsRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 1rem;
    width: 4rem;
    height: 4rem;
    top: 50%;
    z-index: 50;

    @media screen and (max-width: 480px){
        right: 0;
    }
`