import React from 'react';
import { PageContainer, PageWrapper } from '../StyledComponents/FullPageWrappers.styled';
import { SearchBar, SearchContainer, SortByContainer } from './BlogBanner.styled';

const Blogs = () => {
    return (
        <PageWrapper>
            <PageContainer>
                <SearchBar>
                    <SearchContainer>
                    <p>Search: </p>
                    <input type='text'></input>
                    </SearchContainer>
                    <SortByContainer>
                    <p>Sort by: </p>
                    <select>
                        <option>Select</option>
                        <option value='Popular'>Popular</option>
                        <option value='Alphabetical'>Alphabetical</option>
                    </select>
                    </SortByContainer>
                </SearchBar>
            </PageContainer>
        </PageWrapper>
    )
}

export default Blogs