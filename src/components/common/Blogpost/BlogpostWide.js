import React from 'react';
import Test2 from '../../../images/Test2.jpg'
import { BlogPostContainer } from './BlogpostWide.styled';

const BlogpostWide = ({ imageSource = Test2, title = "cornering tips?", description, left, right }) => {
    return (
        <BlogPostContainer style={{justifyContent: right ? 'flex-end' : 'flex-start'}}>
            {right ? <>
                <span>
                    <h3>{title}</h3>
                    {description && <p>
                        {description}
                    </p>}
                </span>
                <img alt={title} src={imageSource}   />
            </> : <>
                    <img alt={title} src={imageSource}  />
                    <span>
                        <h3>{title}</h3>
                        {description && <p>
                            {description}
                        </p>}
                    </span>

                </>}
        </BlogPostContainer>
    )
}

export default BlogpostWide