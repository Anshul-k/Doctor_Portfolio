import styled from "styled-components";
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    height: 5rem;
    background: ${({ scrollnav }) => (scrollnav ? 'var(--PrimaryDark)' : 'var(--PrimaryDark)')};
    display: flex;
    position: sticky;
    top: 0;
    z-index: 3;
    box-shadow: 0px 0px 15px 0px var(--bs-gray);

     @media screen and (max-width: 920px) {
         position: sticky;
         top: 0;
         height: 13vh;
     }
`;

export const Logo = styled.div`
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    font-size: 2rem;
    color: black;
    height: 85%;
    width: 24%;
    min-width: 13rem;
    min-height: 3.8rem;
    cursor: pointer;

    @media screen and (max-width: 480px){
        margin-left: 1rem;
    }
`;

export const Hamburger = styled.div`
    
    z-index: 5;
    display: none;

    @media screen and (max-width: 920px) {
        position: fixed;
        width: 60px;
        height: 60px;
        right: 4%;
        top: 6.5%;
        transform: translate(-5%, -50%); 
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
     }

     span{
        background: var(--SecondaryLight);
        position: absolute;
        width: 35px;
        height: 4px;
        border-radius: 4px;
        transition: 0.5s;
        margin: 5px;
     }

    span:nth-child(1){
        transform: translate(-7px, -15px);
        width: 22px;
        left: 15px;
    }

    span:nth-child(2){
        transform: translate(-7px, 15px);
        width: 13px;
        left: 15px;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    width: 50%;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 4;
    
    @media screen and (max-width: 920px) {
        position: fixed;
        background: var(--SecondaryDark);
        height: 100vh;
        width: 100%;
        flex-direction: column;
        -webkit-clip-path: circle(100px at 90% -20%);
        clip-path: circle(100px at 90% -20%);
        transition: all 1s ease-out;
        pointer-events: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width: 768px) {
       width: 100%;
    }
`
export const NavLinkS = styled(LinkS)`
    color: ${({ scrollnav }) => (scrollnav ? 'var(--LinkTextDark)' : 'var(--LinkTextDark)')};
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    :hover{
        color: ${({ scrollnav }) => (scrollnav ? 'var(--SecondaryLight)' : 'var(--SecondaryLight)')};
    }

    &.active{
        border-bottom: 3px solid var(--SecondaryLight);
    }

     @media screen and (max-width: 920px) {
        justify-content: center;
        font-size: 22px;
        color: var(--LinkTextLight);
        
        :hover{
        color: var(--Ternary);
    }

        &.active{
        border-bottom: 0;
    }
    }
`


// export const Line = styled.div`
//     border-radius: 20px;

//      @media screen and (max-width: 768px) {
//         width: 30px;
//         height: 3px;
//         background: white;
//         margin: 5px;
//      }
// `;