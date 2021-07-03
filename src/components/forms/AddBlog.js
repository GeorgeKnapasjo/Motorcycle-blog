import React from 'react';
import { FullPageWrapper } from '../common/StyledComponents/FullPageWrappers';
import { FormWrapper } from './AddBlog.styled';

export const AddBlog = () => {

    // const data  = {
    //     "id":"test",
    //     "title":"test",
    //     "content":"test"
    // }

    // useEffect(()=> {
    //     fetch("http://localhost:8080/Blogs", {
    //         method:"POST",
    //         mode: 'cors',
    //         headedrs:{
    //             "Content-type":"application/json"
    //         },
    //         body:{
    //             "id":"test",
    //             "title":"test",
    //             "content":"test"
    //         }
    //     }).then(res => console.log(res))
    // })

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