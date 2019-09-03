import styled from 'styled-components';
import BgBreatheInverted from '../../assets/img/breathe-bg-inverted.png';

export const Container = styled.div`
    height: 100vh;
    width:100%;
    background: white url(${BgBreatheInverted}) no-repeat center center;
    background-size: cover;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3%;
`;

export const ContainerDetailText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 1%;
    width: 35%;
`;

export const Title = styled.span`
    font-size: 4vh;
    color: white;
    font-weight: bold;
    word-spacing: 10px;
`;

export const Text = styled.span`
    font-size: 3vh;
    color: white;
    font-weight: bold;
    word-spacing: 10px;
`;

export const DetailText = styled.span`
    font-size: 2vh;
    color: white;
    word-spacing: 10px;
`;