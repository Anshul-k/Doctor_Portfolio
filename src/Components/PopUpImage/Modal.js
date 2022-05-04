import { Overlay, OverlayArrowsLeft, OverlayArrowsRight, OverlayImg, OverlaySpan } from './PopUpElements';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'

const Modal = ({
    clickedImg,
    setClickedImg,
    handelRotationRight,
    handelRotationLeft
}) => {
    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
        }
    };

    return (
        <>
            <Overlay className="dismiss" onClick={handleClick}>
                <OverlayImg src={clickedImg} alt="bigger pic" />
                <OverlaySpan className="dismiss" onClick={handleClick}>
                    X
                </OverlaySpan>
                <OverlayArrowsLeft onClick={handelRotationLeft}>
                    <FaLessThan style={{ color: '#f9f9f9', height: '3rem', width: '3rem' }} />
                </OverlayArrowsLeft>
                <OverlayArrowsRight onClick={handelRotationRight}>
                    <FaGreaterThan style={{ color: '#f9f9f9', height: '3rem', width: '3rem' }} />
                </OverlayArrowsRight>
            </Overlay>
        </>
    );
};

export default Modal;