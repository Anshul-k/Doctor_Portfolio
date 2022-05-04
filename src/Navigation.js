import React from 'react'
import Footer from './Components/Footer/Footer'
import ImageSlider from './Components/ImageSlider/ImageSlider'
import Navbar from './Components/Navbar/Navbar'
import styled from 'styled-components'
import Bio from './Components/Bio/Bio'
import FAQ from './Components/FAQ/FAQ'
import Timings from './Components/Timings/Timings'
import Service from './Components/Services/Service'
import ContactUs from './Components/ContactUs/ContactUs'
import SpecialityandAwards from './Components/Speciality&Awards/SpecialityandAwards'
import PopUpImage from './Components/PopUpImage/PopUpImage'
import Features from './Components/Features/Features'


const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Navigation() {
  return (
    <Container>
      <Navbar />
      <ImageSlider />
      <Features />
      <Bio lightBg={true} imgStart={true} primary={false} />
      <SpecialityandAwards lightBg={true} imgStart={false} />
      <Service />
      <PopUpImage />
      <Timings />
      <FAQ lightBg={true} imgStart={false} primary={false} />
      <ContactUs darkText={false} primary={true} />
      <Footer />
    </Container>
  )
}
