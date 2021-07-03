import React from 'react';
import {PageContainer, PageWrapper} from './FullPageWrappers.styled';

export const FullPageWrapper = ({children, isBlog=false}) => {
    return(
    <PageWrapper>
        <PageContainer isBlog={isBlog}>
            {children}
        </PageContainer>
    </PageWrapper>
    )
}