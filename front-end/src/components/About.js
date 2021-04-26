import React from 'react';
import { AboutContainer, AboutWrapper } from './About.styled';
import Test3 from '../images/Test3.jpg'
const About = () => {
    return(
        <AboutWrapper>
            <AboutContainer>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse 
             dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
              non proident, sunt in culpa qui officia deserunt mollit anim id
               est laborum.
            </p>
            <img src={Test3} alt=''/>
            </AboutContainer>
        </AboutWrapper>
    )
}

export default About