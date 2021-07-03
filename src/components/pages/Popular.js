import React, {useEffect, useState} from 'react';
import {  getRequest } from '../common/ApiCalls/blogApi';
import BlogpostWide from '../common/Blogpost/BlogpostWide';
import { PageWrapper } from '../common/StyledComponents/FullPageWrappers.styled';
import { TestContainer } from './Popular.styled';


const Popular = () => {
    const [data, setData] = useState()

    useEffect(() => {
        getRequest('Blogs').then(it => setData(it))
    },[])
    return(<>
        <PageWrapper>
            <TestContainer>
            {data && 
            data.map((blog, index) => 
                <BlogpostWide right={index%2 === 0} title={blog.title} description={blog.content} id={blog.id}/>
            )}
            </TestContainer>
        </PageWrapper>
    </>)
}

export default Popular