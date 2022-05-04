import React, { useEffect } from 'react'
import FAQImage from '../../Images/FAQ/FAQImage.svg'
import { FaWhatsapp } from 'react-icons/fa' // React icons
import dottedlines from '../../Images/Assets/DottedLines2.png'
import {
    Column1,
    Column2,
    Container,
    Heading,
    ImgWrap,
    Line,
    Row,
    Subheading,
    Subheading2,
    TextWrapper,
    Topline,
    Wrapper
} from '../CommonElements/Elements'
import { AskButton, AskContainer, FAQLine, FAQImg } from './FAQElements'
import Aos from "aos";

const FAQ = ({ lightBg, imgStart, primary, dark, dark2 }) => {

    // For Animations
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <Container
            style={{
                backgroundImage: `url(${dottedlines})`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            }}
            lightBg={lightBg}
            id='faq'>
            <Wrapper>
                <Row imgStart={imgStart}>
                    <Column1
                        data-aos="fade-up"
                    >
                        <TextWrapper>
                            <Heading ><Line />FAQ's</Heading>
                            <Topline>Most Aksed Questions</Topline>
                            <Subheading style={{ marginBottom: '20px' }} >
                                Q. Is Homeopathy Slow?
                            </Subheading>
                            <Subheading2 >
                                A. No, it is more faster than allopathy, actually in homeopathy patient comes for chronic, incurable and late stage of diseases. Mostly patient comes after allopathic treatment for long. So it takes more time to treat chronic and Incurable diseases. Results are more fastering acute illness.
                            </Subheading2>
                            <FAQLine />
                            <Subheading style={{ marginBottom: '20px' }} >
                                Q. Can these sweet small pills actually cure diseases?
                            </Subheading>
                            <Subheading2 >
                                A. Yes, sweetness doesn't matter. It is efficacy/ effectivity that matters. Only small amount of poison can kill the person. Small micron size is invisible virus can cause fatal diseases.
                            </Subheading2>
                            <FAQLine />
                            <Subheading style={{ marginBottom: '20px' }} >
                                Q. Is there a lot of dietary precautions in homeopathy?
                            </Subheading>
                            <Subheading2 >
                                A. No nowadays it is not like that. Medicines are advance, only few dietary precautions are required.
                            </Subheading2>
                            <FAQLine />
                            <Subheading style={{ marginBottom: '20px' }} >
                                Q. Are there any side effects in homeopathy?
                            </Subheading>
                            <Subheading2 >
                                A. No, Generally there are no side effects of homeopathy.
                            </Subheading2>
                            <FAQLine />
                            <Subheading style={{ marginBottom: '20px' }} >
                                Q. Can we drink water before and after taking homeopathic medicines?
                            </Subheading>
                            <Subheading2 >
                                A. Yes, Water is permissible.
                            </Subheading2>
                            <FAQLine />
                            <Subheading style={{ marginBottom: '20px' }} >
                                Q. Does homeopathic medicines expires?
                            </Subheading>
                            <Subheading2 >
                                A. Homeopathic medicines are good indefinitely as their stable when stored under normal conditions.
                            </Subheading2>
                            <FAQLine />
                            <AskContainer>
                                <Topline>Ask your Questions to Dr. Kasana</Topline>
                                <AskButton
                                    to="//wa.me/919810572058"
                                    duration={500}
                                    exact="true"
                                    offset={-80}
                                    target="_blank"
                                    aria-label="Whatsapp"
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}>
                                    WhatsApp
                                    &nbsp;
                                    <FaWhatsapp />
                                </AskButton>
                            </AskContainer>
                        </TextWrapper>
                    </Column1>
                    <Column2
                        data-aos="fade-up"
                    >
                        <ImgWrap>
                            <FAQImg src={FAQImage} alt='Image' />
                        </ImgWrap>
                        <AskContainer>
                            <Subheading style={{ marginBottom: '20px' }} >Having Questions??</Subheading>
                            <Subheading2 >I am willing to help any needful person for any kind of query and questions that must be answered by expert.</Subheading2>
                        </AskContainer>
                    </Column2>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default FAQ