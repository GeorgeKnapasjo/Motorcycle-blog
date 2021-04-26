import React from 'react';
import BlogpostWide from './common/Blogpost/BlogpostWide';
import { PageWrapper } from './common/StyledComponents/FullPageWrappers.styled';
import { TestContainer } from './Popular.styled';

const Popular = () => {
    const description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    return(
        <PageWrapper>
            <TestContainer>
            <BlogpostWide description={description}/>
            <BlogpostWide right description={description}/>
            <BlogpostWide description={description}/>
            <BlogpostWide right description={description}/>
            <BlogpostWide description={description}/>
            <BlogpostWide right description={description}/>
            </TestContainer>
        </PageWrapper>
    )
}

export default Popular