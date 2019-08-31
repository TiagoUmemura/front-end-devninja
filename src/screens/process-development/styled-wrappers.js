import styled from 'styled-components';

export const Container = styled.div`
    height: 70vh;
    width:100%;
    background-color: #edecdd;
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
`;

export const ContainerCards = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 2%;
`;

export const Title = styled.span`
    font-size: 3vh;
    color: #00A1EF;
    font-weight: bold;
`;