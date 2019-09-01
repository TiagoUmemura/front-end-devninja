import styled from 'styled-components';

export const TextField = styled.textarea`
    border-radius: 20px;
    margin: 1.5%;
    width: ${props => props.width ? props.width : '82%'};
    border-style: none;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #00A1EF;
        padding-left: 2%;
        padding-top: 1%;
    }
`;