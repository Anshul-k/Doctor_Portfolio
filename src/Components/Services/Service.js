import React, { useEffect } from 'react'
import { Heading, Line, Subheading } from '../CommonElements/Elements'
import Card from './Card/Card'
import { Cards, MyServices, PlusRotation, ServiceConatiner } from './ServiceElements'
import PlusRotationImage from '../../Images/Assets/PlusSign.png'
import Aos from "aos";

import PhoneNVideoCall from '../../Images/Sevices/Phone&VideoCall.svg'
import OnlinePayment from '../../Images/Sevices/OnlinePayment.svg'
import MedicineDelivery from '../../Images/Sevices/MedicineDelivery.svg'

const Service = () => {

    // For Animations
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <ServiceConatiner id='services'>
            <div
                style={{ position: 'absolute', width: '100%', height: '100%' }}
            >
                <PlusRotation
                    data-aos="fade-up"
                    src={PlusRotationImage}
                    alt='Plus'
                />
            </div>
            {/* LefT Side */}
            <MyServices
                data-aos="fade-up"
            >
                <Heading ><Line />Services</Heading>
                <Subheading style={{ zIndex: 1 }} >We provide a variety of Services including: -</Subheading>
            </MyServices>
            {/* Right Side */}
            <Cards>
                {/* First Card */}
                <div
                    data-aos="flip-left"
                    style={{ margin: '1rem' }}>
                    <Card
                        cardimg={PhoneNVideoCall}
                        heading={'Phone and Video Consultation'}
                        detail={'We provide Phone call and Video call Consultation on appointment for anyone living In or Outside Delhi and NCR region.'}
                    />
                </div>
                {/* Second Card */}
                <div
                    data-aos="flip-left"
                    style={{ margin: '1rem' }}>
                    <Card
                        cardimg={MedicineDelivery}
                        heading={'Medicine Delivery facility available'}
                        detail={'Delivery of medicine through courier services available all over the country.'}
                    />
                </div>
                {/* Third Card */}
                <div
                    data-aos="flip-left"
                    style={{ margin: '1rem' }}>
                    <Card
                        cardimg={OnlinePayment}
                        heading={'Online Payment Accepted '}
                        detail={'Paytm and all kinds of UPI payments such as GooglePay, PhonePe etc... avialable.'}
                    />
                </div>
            </Cards>
        </ServiceConatiner>
    )
}

export default Service