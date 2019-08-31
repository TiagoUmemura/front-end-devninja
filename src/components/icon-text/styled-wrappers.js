import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
`;

export const Img = styled.img`
    width: ${props => props.width ? props.width : '40%'};;
    height: ${props => props.width ? props.width : '40%'};;
`;

export const Title = styled.span`
    color: #00A1EF;
    font-size: 1.2vw;
    font-weight: bold;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex: 1;
    padding: 10% 13% 8% 13%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex: 1;
    padding: 0 7%;
`;

export const Text = styled.span`
    color: grey;
    font-size: 1vw;
`;