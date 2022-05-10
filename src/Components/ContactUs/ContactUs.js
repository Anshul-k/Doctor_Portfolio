import React, { useEffect } from 'react'
import { Heading, Line } from '../CommonElements/Elements'
import { AskButton } from '../FAQ/FAQElements'
import { MdLocationOn, MdMessage, MdCall } from 'react-icons/md'
import { ContactContainer, Location, LocationConatiner, } from './ContactUsElements'
import { Link } from 'react-router-dom'
import Aos from "aos";
// import GoogleMap from './GoogleMap'



const ContactUs = ({ primary, dark, dark2 }) => {

    // For Animations
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <ContactContainer
            data-aos="fade-up"
            id='contactus'
        >
            <Heading
            ><Line />Contact Us</Heading>
            <LocationConatiner>
                <Location>
                    <MdLocationOn style={{ fontSize: '2rem', margin: '0.5rem', color: 'var(--Ternary)' }} />
                    <h5>Address</h5>
                    <p>C-13, Sector-15, Vasundhara,<br /> Ghaziabad, U.P-201010</p>
                </Location>
                <Location>
                    <MdMessage style={{ fontSize: '2rem', margin: '0.5rem', color: 'var(--Ternary)' }} />
                    <h5>Send Us Message !</h5>
                    <AskButton
                        style={{ boxShadow: '0px 6px 24px 3px rgba(251, 169, 40, 0.6)', fontSize: '0.8rem' }}
                        to="//wa.me/919810572058"
                        duration={500}
                        exact="true"
                        offset={-80}
                        target="_blank"
                        aria-label="Message"
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}>
                        Message
                    </AskButton>
                </Location>
                <Location>
                    <MdCall style={{ fontSize: '2rem', margin: '0.5rem', color: 'var(--Ternary)' }} />
                    <h5>Call Us at</h5>
                    <p>+91-9810572058</p>
                </Location>
            </LocationConatiner>
            {/* <Map>
                <GoogleMap />
            </Map> */}
            <LocationConatiner style={{ padding: '1rem' }}>
                <Location>
                    <h5>To get Directions on Google Maps App, Click
                        <Link
                            style={{ textDecoration: 'none', color: 'var(--Ternary)', marginLeft: '6px' }}
                            to='//maps.google.com?q=+28.654782+,+77.358880'
                        >
                            HERE
                        </Link>.
                    </h5>
                </Location>
            </LocationConatiner>
        </ContactContainer>
    )
}

export default ContactUs