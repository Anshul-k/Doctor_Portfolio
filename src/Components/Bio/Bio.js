import React, { useState, useEffect } from 'react'
import BioImage from '../../Images/Bio/BioImage2.png'
import dottedlines from '../../Images/Assets/DottedLines.png'
import PlusSignImage from '../../Images/Assets/PlusSign2.png'

import {
    Column1,
    Column2,
    Container,
    Heading,
    Img,
    ImgWrap,
    Line,
    Row,
    Subheading,
    TextWrapper,
    Topline,
    ToplineContainer,
    Wrapper
} from '../CommonElements/Elements'
import { BioWrapper, BioSubheading, Button, PlusSign } from './BioElements'
import { BiPlusMedical } from 'react-icons/bi'
import Aos from "aos";


const Bio = ({ lightBg, imgStart }) => {

    // For Animations
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    // logic for adding data when "knowmore" button is clcked
    const [know, setKnow] = useState(false)
    const onhandleClick = () => {
        setKnow(!know)
    }

    return (
        <Container
            style={{
                backgroundImage: `url(${dottedlines})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '-90px 70px',
            }}
            lightBg={lightBg}
            id="bio">
            <Wrapper>
                <div
                    data-aos="fade-up"
                    style={{ position: 'absolute', width: '89%', height: '100%' }}
                >
                    <PlusSign
                        src={PlusSignImage}
                        alt='Square'
                    />
                </div>
                <Row imgStart={imgStart}>
                    <Column1
                        style={{ zIndex: 1 }}
                        data-aos="fade-up"
                    >
                        <TextWrapper>
                            <Heading ><Line />BioGraphy</Heading>
                            <ToplineContainer>
                                <Topline>Dr.</Topline>
                                <Topline style={{ zIndex: 1 }}>Balbir Kasana</Topline>
                            </ToplineContainer>
                            <Subheading >Hello Everyone, I am a Certified Homeopathic Clinical Physician on a mission to save lives with more safer and economical treatment. </Subheading>
                            <BioWrapper>
                                <BioSubheading >
                                    <BiPlusMedical style={{ marginRight: '1rem', color: 'var(--SecondaryLight)' }} />
                                    I Completed internship from Regional Research Institute under Central council for research in homeopathy Delhi in the campus of Nehru homeopathic medical College, defence colony Delhi.
                                </BioSubheading>
                                {
                                    know
                                        ?
                                        <React.Fragment>
                                            <BioSubheading >
                                                <BiPlusMedical style={{ marginRight: '1rem', color: 'var(--SecondaryLight)' }} />
                                                After completing housejob joined MCD and served as medical officer (homeopathy) up to 2009.
                                            </BioSubheading>
                                            <BioSubheading >
                                                <BiPlusMedical style={{ marginRight: '1rem', color: 'var(--SecondaryLight)' }} />
                                                Worked in heart care foundation of India and Served as homeopathic consultant in Swastik medical centre Anand Vihar, Delhi for 15 years.
                                            </BioSubheading>
                                            <BioSubheading >
                                                <BiPlusMedical style={{ marginRight: '1rem', color: 'var(--SecondaryLight)' }} />
                                                I also completed 1 year House job/house physician/ junior resident in Dr B.R. Sur homeopathic Medical College and Research Centre Moti Bagh Delhi.
                                            </BioSubheading>
                                        </React.Fragment>
                                        :
                                        <React.Fragment>
                                            <BioSubheading />
                                            <Button
                                                onClick={() => onhandleClick()}>Know More</Button>
                                        </React.Fragment>
                                }
                            </BioWrapper>
                            <Subheading >Now working as homeopathic clinical physician in Vasundhara and serving the community dedicately ever since.</Subheading>
                        </TextWrapper>
                    </Column1>
                    <Column2
                        data-aos="fade-up"
                    >
                        <ImgWrap>
                            <Img
                                src={BioImage} alt='Image' />
                        </ImgWrap>
                    </Column2>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Bio