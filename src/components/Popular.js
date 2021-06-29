import React, {useEffect, useState} from 'react';
import { blogApi, getRequest } from './common/ApiCalls/blogApi';
import BlogpostWide from './common/Blogpost/BlogpostWide';
import { PageWrapper } from './common/StyledComponents/FullPageWrappers.styled';
import { TestContainer } from './Popular.styled';


const Popular = () => {
    const [data, setData] = useState()

    useEffect(() => {
        getRequest('Blogs').then(it => setData(it))
    },[])
    const description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    return(<>
        <PageWrapper>
            <TestContainer>
                {console.log(data)}
            {data && 
            data.map((blog, index) => 
                <BlogpostWide right={index%2 == 0}title={blog.title} description={blog.content}/>
            )}
            </TestContainer>
        </PageWrapper>
    </>)
}

export default Popular