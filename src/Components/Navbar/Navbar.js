import React, { useState, useEffect } from 'react'
import { Nav, Logo, Hamburger, NavMenu, NavItem, NavLinkS } from './NavbarElements'
import { FaWhatsapp } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'
import { ScrollToTopButton, WhatsAppButton } from '../CommonElements/Elements'
import LogoImage from '../../Images/Logo/LOGO2.png'

export default function Navbar() {

    // For Navbar Scroll
    const [scrollnav, setScrollnav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 100) {
            setScrollnav(true)
        } else {
            setScrollnav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    //To toggle between the hamburger option in mobile view.
    const [clicked, setClicked] = useState(false)
    const handleOnClick = () => {
        setClicked(!clicked)
    }

    // The Whatsapp button is hidden at the beginning
    const [showButton, setShowButton] = useState(false);
    const [scroll, setScroll] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 1,
            behavior: 'smooth' // for smoothly scrolling
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 260) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }

            if (window.pageYOffset > 500) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        });
    }, []);


    return (
        <Nav scrollnav={scrollnav}>
            <Logo onClick={() => scrollToTop()}>
                <img
                    height='100%'
                    width='100%'
                    src={LogoImage}
                    alt='Logo'
                />
            </Logo>
            {/* ------ For Haburger Option or 3 lines --------- */}
            <Hamburger
                onClick={() => handleOnClick()}>
                <span
                    style={clicked ? { width: '30px', transform: 'translateY(0px) rotate(45deg)', transitionDelay: '0.25s' } : null}
                />
                <span
                    style={clicked ? { width: '30px', transform: 'translateY(0px) rotate(315deg)', transitionDelay: '0.25s' } : null}
                />
                <span
                    style={clicked ? { transform: 'translateX(60px)' } : null}
                />
            </Hamburger>
            {/* ----------------------------------------------- */}

            <NavMenu
                style={clicked ? { clipPath: 'circle(1200px at 90% -20%)', pointerEvents: 'all' } : null}
            >
                <NavItem>
                    <NavLinkS
                        to="bio"
                        scrollnav={{ scrollnav }}
                        onClick={() => handleOnClick()}
                        smooth={true} duration={600} spy={true} exact='true' offset={-74}
                    >
                        BioGraphy
                    </NavLinkS>
                </NavItem>
                <NavItem>
                    <NavLinkS
                        to="specialityandawards"
                        scrollnav={{ scrollnav }}
                        onClick={() => handleOnClick()}
                        smooth={true} duration={600} spy={true} exact='true' offset={-74}
                    >
                        Specialities & Awards
                    </NavLinkS>
                </NavItem>
                <NavItem>
                    <NavLinkS
                        to="services"
                        onClick={() => handleOnClick()}
                        smooth={true} duration={600} spy={true} exact='true' offset={-74}
                        scrollnav={{ scrollnav }}
                    >
                        Services
                    </NavLinkS>
                </NavItem>
                <NavItem>
                    <NavLinkS
                        to="timings"
                        onClick={() => handleOnClick()}
                        smooth={true} duration={600} spy={true} exact='true' offset={-80}
                        scrollnav={{ scrollnav }}
                    >
                        Timings
                    </NavLinkS>
                </NavItem>
                <NavItem>
                    <NavLinkS
                        to="faq"
                        onClick={() => handleOnClick()}
                        smooth={true} duration={600} spy={true} exact='true' offset={-80}
                        scrollnav={{ scrollnav }}
                    >
                        FAQ
                    </NavLinkS>
                </NavItem>
                <NavItem>
                    <NavLinkS
                        to="contactus"
                        onClick={() => handleOnClick()}
                        smooth={true} duration={600} spy={true} exact='true' offset={-80}
                        scrollnav={{ scrollnav }}
                    >
                        Contact Us
                    </NavLinkS>
                </NavItem>
            </NavMenu>
            {
                scroll && (
                    <ScrollToTopButton
                        onClick={() => scrollToTop()}
                    >
                        <FiArrowUp />
                    </ScrollToTopButton>
                )
            }
            {
                showButton && (
                    <WhatsAppButton
                        to="//wa.me/919810572058"
                        duration={500}
                        exact="true"
                        offset={-80}
                        target="_blank"
                        aria-label="Whatsapp"
                    >
                        <FaWhatsapp />
                    </WhatsAppButton>
                )
            }
        </Nav >
    )
}
