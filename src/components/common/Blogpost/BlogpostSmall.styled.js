import styled from 'styled-components/macro';

export const BlogPostContainer = styled.div`
    display:flex;
    padding:2.5rem;
    flex-direction:column;
    max-width:350px;
    :hover{
        box-shadow: 0 0 4px 2px #dee3e5;
    }
    h3{
        margin-bottom:0;
    }
`;