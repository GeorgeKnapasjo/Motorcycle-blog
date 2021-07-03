import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogPost } from '../common/ApiCalls/blogApi';
import { FullPageWrapper } from '../common/StyledComponents/FullPageWrappers';

export const Blog = () => {
    const [data,setData] = useState();
    let {id} = useParams()

    useEffect(() => {
        getBlogPost(id).then(it => setData(it))
    },[id]);

    return(
        <FullPageWrapper isBlog={true}>
            {data && <div>
                <h3>{data.title}</h3>
                <div>{data.content}</div>
            </div>}
        </FullPageWrapper>
    )
}