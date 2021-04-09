import styled from 'styled-components/macro';

export const BannerWrapper = styled.div`
    display:flex;
    margin:auto;
`;

export const BannerImageContainer = styled.div`
    width:100vw;
    height:500px;
    margin:auto;
    img{
        height:inherit;
        width:inherit;
        object-fit:cover;
        filter: grayscale(65%);
    }
`;