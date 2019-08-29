import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    height: 80%
    align-items: center;
    justify-content: center;
`;

export const TextHomeContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content:center
`;

export const HomeText = styled.span`
    color: white;
    font-size: 1vw;
    text-align: left;
`;

export const ImgHomeContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const Img = styled.img`
    width: 50%;
    height: 50%;
`;