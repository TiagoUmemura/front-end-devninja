import styled from 'styled-components';
import BgBreathe from '../../assets/img/breathe-bg.png';

export const Container = styled.div`
    height: 100vh;
    width:100%;
    background: #edecdd url(${BgBreathe}) no-repeat center center;
    background-size: cover;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Text = styled.span`
    font-size: 4vh;
    color: white;
    font-weight: bold;
    word-spacing: 10px;
`;

export const TextDevNinja = styled.span`
    font-size: 4vh;
    color:  #f5aa42;
    font-weight: bold;
`;