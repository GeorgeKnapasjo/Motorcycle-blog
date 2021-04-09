import React from 'react';
import { BannerImageContainer, BannerWrapper } from './Banner.styled';
import Test1 from '../../../images/Test1.jpg'

const Banner = () => {
    return(
        <BannerWrapper>
            <BannerImageContainer>
                <img src={Test1} alt='Motorcycle riding'/>
            </BannerImageContainer>
        </BannerWrapper>
    )
}

export default Banner