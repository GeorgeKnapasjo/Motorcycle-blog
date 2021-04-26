import React from 'react';
import { BlogPostContainer } from './BlogpostSmall.styled'
import Test2 from '../../../images/Test2.jpg'

const BlogpostSmall = ({ imageSource = Test2, title = "cornering tips?", description }) => {
    return (
        <BlogPostContainer>
            <img src={imageSource} style={{ width: '350px', height: 'auto' }} alt={title}/>
            <h3>{title}</h3>
            {description && <p>
                {description}
            </p>}
        </BlogPostContainer>
    )
}

export default BlogpostSmall