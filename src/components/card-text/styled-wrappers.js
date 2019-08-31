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
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;  
    padding: 20% 0 0 20%;
`;

export const Title = styled.span`
    font-size: 2.5vh;
    color: ${props => props.color ? props.color : 'black'};
    word-spacing: 10px;
    font-weight: bold;
`;

export const Text = styled.span`
    font-size: 1vh;
    color: ${props => props.color ? props.color : 'black'};
`;

export const ContainerIcon = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: -10%;
    top: -9%;
`;

export const Img = styled.img`
    width: 40%;
    height: 40%;
`;