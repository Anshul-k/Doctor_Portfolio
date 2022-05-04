import React from 'react'
import { animateScroll as scroll } from 'react-scroll'  //animateScroll is used for scrolling to the top
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa' // React icons 
import { GoMail } from 'react-icons/go'
import { FooterContainer, WebsiteRights, SocialIconLink, SocialIcons, Name } from './FooterElements'

export default function Footer() {

  // To scroll to the top of the page
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <SocialIcons>
        <SocialIconLink href="https://www.facebook.com/profile.php?id=100010137571877" target="_blank" aria-label="Facebook">
          <FaFacebookF />
        </SocialIconLink>
        <SocialIconLink href="https://wa.me/919810572058" target="_blank" aria-label="Whatsapp">
          <FaWhatsapp />
        </SocialIconLink>
        <SocialIconLink href="mailto:drbalbir.kasana06@gmail.com?subject=Query" target="_blank" aria-label="Gmail">
          <GoMail />
        </SocialIconLink>
      </SocialIcons>
      {/* For displaying the year in the footer along with the name of the Clinic, which on click scroll to the top */}
      <WebsiteRights><Name to='/' onClick={toggleHome} >Kasana Homeopathic Clinic</Name> © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
    </FooterContainer>
  )
}
