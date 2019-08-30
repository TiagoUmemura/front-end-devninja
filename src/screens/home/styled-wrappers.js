import styled from 'styled-components';
import BgHome from '../../assets/img/bg-home.png'

export const Container = styled.div`
    height: 90vh;
    width:100%;
    background: #00A1EF url(${BgHome}) no-repeat center center;
    background-size: cover;
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
`;