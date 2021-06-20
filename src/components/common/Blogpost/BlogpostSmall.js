import React from 'react';
import { BlogPostContainer } from './BlogpostSmall.styled'
import Test2 from '../../../images/Test2.jpg'

const BlogpostSmall = ({ imageSource = Test2, title = "cornering tips?", content }) => {
    return (
        <BlogPostContainer>

            <img src={imageSource} style={{ width: '350px', height: 'auto' }} alt={title}/>
            <h3>{title}</h3>
            {content && <p>
                {content} 
            </p>}
        </BlogPostContainer>
    )
}

export default BlogpostSmall