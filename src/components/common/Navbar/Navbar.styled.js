import styled from 'styled-components/macro';

export const NavbarWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:120px;
    color:black;
    background-color:black;
    color:white;

`;

export const NavbarContainer = styled.div`
    display:flex;
    background-color:black;
    height:80px;
    position: sticky;
    top: 0;
    justify-content:center;
    align-items:center;
    z-index:300;
    a{
        margin: 0 1rem 0 1rem;
        text-align:center;
        color:white;
        text-decoration:none;
    }
`;
