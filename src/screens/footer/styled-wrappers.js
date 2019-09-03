import styled from 'styled-components';

export const Container = styled.div`
    height: 40vh;
    width:100%;
    background-color: white;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContainerImg = styled.div`
    display: flex;
    flex: 1;
    width: 7%;
    height: 50%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const ContainerRow = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const ContainerText = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Icon = styled.img`
    width: 100%;
    height: 100%;
`;

export const Text = styled.p`
    font-size: 2vh;
    color: #00A1EF;
    margin-bottom: 1px;
`;