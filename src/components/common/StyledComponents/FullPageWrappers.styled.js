import styled from 'styled-components';

export const PageWrapper = styled.div`
    display:flex;
`;

export const PageContainer = styled.div`
    width: ${props => props.isBlog ? "1200px" : "1500px"};
    margin:auto;
`;

