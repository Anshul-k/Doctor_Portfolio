import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

import Quote1 from '../../Images/ImageSlider/Quote1.jpg';
import Quote2 from '../../Images/ImageSlider/Quote2.jpg';
import Quote3 from '../../Images/ImageSlider/Quote3.jpg';
import Quote4 from '../../Images/ImageSlider/Quote4.jpg';


const SilderImg = styled.img`
    width: 100%;
    height: auto;
    max-height: 88vh;
`

const ImageSlider = () => {
    return (
        <Carousel fade={true} pause={false}>
            <Carousel.Item interval={8000}>
                <SilderImg
                    className="d-block w-100"
                    src={Quote1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={8000}>
                <SilderImg
                    className="d-block w-100"
                    src={Quote2}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={8000}>
                <SilderImg
                    className="d-block w-100"
                    src={Quote3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={8000}>
                <SilderImg
                    className="d-block w-100"
                    src={Quote4}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageSlider;