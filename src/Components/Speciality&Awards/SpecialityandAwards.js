import React, { useEffect } from 'react'
import { BioSubheading, BioWrapper } from '../Bio/BioElements'
import { FaAward, FaHandHoldingMedical } from 'react-icons/fa' // React icons 
import dottedlines from '../../Images/Assets/DottedLines2.png'
import {
    Column1,
    Column2,
    Container,
    Heading,
    Line,
    Row,
    TextWrapper,
    Wrapper
} from '../CommonElements/Elements'
import styled from 'styled-components'
import Aos from "aos";


const Subheading3 = styled.p`
    max-width: 440px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    color: var(--SubHeadingTextDark);

    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`

const SpecialityandAwards = ({ lightBg, imgStart }) => {

    // For Animations
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <Container
            style={{
                backgroundImage: `url(${dottedlines})`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}
            lightBg={lightBg}
            id='specialityandawards'>
            <Wrapper style={{ padding: '0 10px' }}>
                <Row imgStart={imgStart}>
                    <Column1
                        data-aos="fade-up"
                    >
                        <TextWrapper style={{ margin: '1rem', paddingBottom: '10px' }}>
                            <Heading ><Line />Specialities</Heading>
                            <Subheading3 ><FaHandHoldingMedical style={{ marginRight: '1rem', color: 'var(--SecondaryLight)' }} />Renal stones and small gallbladder stones.</Subheading3>
                            <Subheading3><FaHandHoldingMedical style={{ marginRight: '1rem', color: 'var(--SecondaryLight)' }} />All kinds of Skin Disorders.</Subheading3>
                            <Subheading3><FaHandHoldingMedical style={{ marginRight: '1rem', color: 'var(--SecondaryLight)' }} />Joint disorders, All arthritis</Subheading3>
                            <Subheading3><FaHandHoldingMedical style={{ marginRight: '1rem', color: 'var(--SecondaryLight)' }} />All Children diseases</Subheading3>
                            <Subheading3 style={{ lineHeight: '24px' }}><FaHandHoldingMedical style={{ marginRight: '1rem', color: 'var(--SecondaryLight)' }} />Female disorder (PCOD, Infertility, Uterine Fibroids).</Subheading3>
                            <Subheading3><FaHandHoldingMedical style={{ marginRight: '1rem', color: 'var(--SecondaryLight)' }} />Cardiac Pulmonary and Respiratory Illness</Subheading3>
                            <Subheading3><FaHandHoldingMedical style={{ marginRight: '1rem', color: 'var(--SecondaryLight)' }} />Gastro Intestinal Disorders</Subheading3>
                        </TextWrapper>
                    </Column1>
                    <Column2
                        data-aos="fade-up"
                    >
                        <TextWrapper style={{ margin: '1rem', paddingBottom: '10px' }}>
                            <Heading ><Line />Awards</Heading>
                            <Subheading3>Dedication, Hard Work, Sincerity, Punctuality, Patients first approach, Sympathetic approach towards patients and Treatment of tough and incurable cases made me eligible for several Delhi homeopathic bored awards :-</Subheading3>
                            &nbsp;
                            <BioWrapper>
                                <BioSubheading ><FaAward style={{ marginRight: '1rem', color: 'var(--SecondaryLight)' }} />Dr.Jugal Kishore award, 2012</BioSubheading>
                                <BioSubheading ><FaAward style={{ marginRight: '1rem', color: 'var(--SecondaryLight)' }} />Dr.Diwan Harish chand award, 2013 and 2014</BioSubheading>
                                <BioSubheading ><FaAward style={{ marginRight: '1rem', color: 'var(--SecondaryLight)' }} />Delhi Board Appreciation award, 2015</BioSubheading>
                            </BioWrapper>
                        </TextWrapper>
                    </Column2>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default SpecialityandAwards