import React from 'react';
import {PageContainer, PageWrapper} from './FullPageWrappers.styled';

export const FullPageWrapper = ({children}) => {
    return(
    <PageWrapper>
        <PageContainer>
            {children}
        </PageContainer>
    </PageWrapper>
    )
}