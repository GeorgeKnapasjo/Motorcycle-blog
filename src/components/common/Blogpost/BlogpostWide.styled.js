import styled from 'styled-components/macro';

export const BlogPostContainer = styled.div`
    display:flex;
    padding:2.5rem;
    flex-direction:row;
    width:fit-content;
    @media(max-width:768px){
        img{
            max-width:50%;
            object-fit:cover;
        }
        span{
            font-size:14px;
        }
    }
    @media(max-width:600px){
        span{
            font-size:10px
        }
    }

    @media(max-width:440px){
        span{
            font-size:8px
        }
    }
    span{
        margin:0 1rem 0 1rem;
        max-width:300px;
        max-height:300px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    img{
        margin:0 1rem 0 1rem;
        width:300px;
        height:auto;
        object-fit:cover;
    }
    :hover{
        box-shadow: 0 0 4px 2px #dee3e5;
    }
`;