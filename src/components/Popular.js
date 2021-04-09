import React from 'react';
import BlogpostWide from './common/Blogpost/BlogpostWide';
import { PopularWrapper, TestContainer } from './Popular.styled';

const Popular = () => {
    const description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    return(
        <PopularWrapper>
            <TestContainer>
            <BlogpostWide description={description}/>
            <BlogpostWide right description={description}/>
            <BlogpostWide description={description}/>
            <BlogpostWide right description={description}/>
            <BlogpostWide description={description}/>
            <BlogpostWide right description={description}/>
            </TestContainer>
        </PopularWrapper>
    )
}

export default Popular