import React from 'react';
import { Link } from 'react-router-dom';
import Blogs from '../../pages/Blogs/Blogs';
import { NavbarWrapper, NavbarContainer } from './Navbar.styled';
import {BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
    return (<>
        <NavbarWrapper>
            Untrained mechanic
        </NavbarWrapper>
        <NavbarContainer>
            <Router>
            <Link to='/Blogs'>Blog posts</Link>
            <a>Contact us</a>
            <a>Shop</a>
            </Router>
        </NavbarContainer>
        </>
)
}

export default Navbar;