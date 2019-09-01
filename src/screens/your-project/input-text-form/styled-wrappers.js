import styled from 'styled-components';

export const Container = styled.div`
    height: 40%;
    width: 60%;
    background-color: #00A1EF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 13px;
    margin: 1% 0;
`;

export const ContainerInputLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
`;

export const Title = styled.span`
    font-size: 2.5vh;
    color: white;
    font-weight: bold;
`;