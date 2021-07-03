import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarWrapper, NavbarContainer } from './Navbar.styled';

const Navbar = () => {
    return (<>
        <NavbarWrapper>
            Untrained mechanic
        </NavbarWrapper>
        <NavbarContainer>
            <Link to='/Blogs'>Blog posts</Link>
            <Link to='/'>Contact us</Link>
            {/* <a>Shop</a> */}
        </NavbarContainer>
        </>
)
}

export default Navbar;