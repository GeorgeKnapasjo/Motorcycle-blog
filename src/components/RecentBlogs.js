import React from 'react';
import BlogpostSmall from './common/Blogpost/BlogpostSmall';
import BlogpostWide from './common/Blogpost/BlogpostWide';
import { RecentBlogWrapper, StyledTitle, Flex } from './RecentBlogs.styled';
import Test3 from '../images/Test3.jpg'

const RecentBlogs = () => {
    const description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    return (<>
    <Flex>
        <StyledTitle>Recent posts</StyledTitle>
        </Flex>
        <RecentBlogWrapper>
            <BlogpostSmall description={description}/>
            <BlogpostSmall description={description}/>
            <BlogpostSmall description={description}/>
            <BlogpostSmall description={description}/>
            <BlogpostSmall description={description}/>
            <BlogpostSmall description={description}/>

        </RecentBlogWrapper>
    </>)
}

export default RecentBlogs