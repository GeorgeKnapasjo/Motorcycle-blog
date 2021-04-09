import styled from 'styled-components/macro';

export const AboutWrapper = styled.div`
    background-color:black;
    color:white;
    display:flex;


`; 

export const AboutContainer = styled.div`
    flex-direction:row;
    display:flex;
    max-width:1500px;
    margin:2rem auto 2rem auto;
    p{
        max-width:30%;
        margin:1rem auto 1rem auto;
        padding:0 2rem 0 2rem;
        line-height:1.5;
    }
    img{
        min-width:200px;
        max-width:30%;
        margin:1rem auto 1rem auto;
        padding:0 2rem 0 2rem;
        height:auto;
        object-fit:cover;
    }
`;