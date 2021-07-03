import React from 'react';
import { FullPageWrapper } from '../common/StyledComponents/FullPageWrappers';
import { FormWrapper } from './AddBlog.styled';

export const AddBlog = () => {
    return(<>
        <FullPageWrapper>
            <FormWrapper>
                <label>Title</label>
                <input/>
                <label>Content</label>
                <textarea/>
            </FormWrapper>
        </FullPageWrapper>
    </>)
}