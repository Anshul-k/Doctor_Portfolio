import React, { useEffect } from 'react'
import { FaPills, FaHandHoldingHeart } from 'react-icons/fa'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { FeatureConatiner, FeatureElement, Image, FeatureHeading, FeatureContent } from './FeaturesElements'
import Aos from "aos";

const Features = () => {
    // For Animations
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <FeatureConatiner>
            <FeatureElement
                data-aos="zoom-in"
            >
                <Image>
                    <AiFillSafetyCertificate />
                </Image>
                <FeatureHeading>20+ Years</FeatureHeading>
                <FeatureContent>Of Experience</FeatureContent>
            </FeatureElement>
            <FeatureElement
                data-aos="zoom-in"
            >
                <Image>
                    <FaPills />
                </Image>
                <FeatureHeading>Quality Treatment</FeatureHeading>
                <FeatureContent>Patient's satisfaction comes first</FeatureContent>
            </FeatureElement>
            <FeatureElement
                data-aos="zoom-in"
            >
                <Image>
                    <FaHandHoldingHeart />
                </Image>
                <FeatureHeading>Personalize Care</FeatureHeading>
                <FeatureContent>Individual holistic approach to Chronic, Fatal and Psychosomatic cases.</FeatureContent>
            </FeatureElement>
        </FeatureConatiner>
    )
}

export default Features