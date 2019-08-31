import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${props => props.width ? props.width : '90%'};
    height: ${props => props.height ? props.height : '90%'};
    background-color: white;
    position:relative;
    border-radius: 10px;
    margin: 0 2%;
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex:1;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;  
    padding: 20% 0 0 16%;
`;

export const ContainerText = styled.div`
    display: flex;
    flex:4;
    width: 85%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
`;

export const ContainerIcon = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: -10%;
    top: -11%;
`;

export const Title = styled.span`
    font-size: 2.5vh;
    color: ${props => props.color ? props.color : 'black'};
    word-spacing: 10px;
    font-weight: bold;
`;

export const Img = styled.img`
    width: 40%;
    height: 40%;
`;

export const Text = styled.span`
    font-size: 1.9vh;
    color: ${props => props.color ? props.color : '#a6a8ab'};
    line-height: 130%;
`;

export const Hr = styled.div`
    height: 10%;
    width: 22%;
    margin-top: 5%;
    background-color: ${props => props.color ? props.color : 'black'};;
`;