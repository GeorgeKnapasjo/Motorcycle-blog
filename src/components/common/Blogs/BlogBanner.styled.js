import styled from 'styled-components/macro';

export const SortByContainer = styled.div`
    display:flex;
    margin: auto 1.5rem auto auto;
`;

export const SearchContainer = styled.div`
    display:flex;
    margin-left:1.5rem;
`;

export const SearchBar = styled.div`
    display:flex;
    height:50px;
    border:1px solid #dee3e5;
    margin-top:2rem;
    input{
        height:30px;
        margin:auto 0.5rem auto 0.5rem;
        border:1px solid #dee3e5;
    }
    select{
        height:35px;
        margin:auto 0.5rem auto 0.5rem;
        border-color:#dee3e5;
        background-color:white;
    }
`;