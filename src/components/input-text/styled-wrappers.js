import styled from 'styled-components';

export const TextField = styled.input.attrs({type:'text'})`
    border-radius: 20px;
    margin: 1.5%;
    padding: 2%;
    border-style: none;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #00A1EF;
        padding-left: 5%;
    }
`;