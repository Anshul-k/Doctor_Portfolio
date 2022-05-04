import React, { useState } from 'react'
import Modal from './Modal'
import { PopImage, PopWrapper, PopWrapperImages } from './PopUpElements'
import image1 from '../../Images/PopUpImage/MaskImage.jpg'
import image2 from '../../Images/PopUpImage/ShelfBannerImage.jpg'
import image3 from '../../Images/PopUpImage/Opd1.jpg'
import image4 from '../../Images/PopUpImage/RamBabu.jpg'
import image5 from '../../Images/PopUpImage/Opd2.jpg'


const images = [image1, image2, image3, image4, image5];

const PopUpImage = () => {

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item);
    };

    // for rotation to the right 
    const handelRotationRight = () => {
        const totalLength = images.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = images[0];
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = images.filter((item) => {
            return images.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0];
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    // for rotation to the left 
    const handelRotationLeft = () => {
        const totalLength = images.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = images[totalLength - 1];
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = images.filter((item) => {
            return images.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0];
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    return (
        <PopWrapper>
            {
                images.map((item, index) => (
                    <PopWrapperImages key={index}>
                        <PopImage
                            src={item}
                            alt=''
                            onClick={() => handleClick(item, index)}
                        />
                    </PopWrapperImages>
                ))
            }
            <div>
                {clickedImg && (
                    <Modal
                        clickedImg={clickedImg}
                        handelRotationRight={handelRotationRight}
                        setClickedImg={setClickedImg}
                        handelRotationLeft={handelRotationLeft}
                    />
                )}
            </div>
        </PopWrapper>
    )
}

export default PopUpImage