import React from 'react'
import { CardConatiner, CardDetail, CardHeading, CardImg } from './CardElements'

const Card = ({ cardimg, heading, detail }) => {
    return (
        <CardConatiner>
            <CardImg src={cardimg} alt='' />
            <CardHeading>{heading}</CardHeading>
            <CardDetail>{detail}</CardDetail>
        </CardConatiner>
    )
}

export default Card