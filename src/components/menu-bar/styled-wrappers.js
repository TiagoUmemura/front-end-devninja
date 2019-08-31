import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 17%;
    padding-top: 2%;
    align-items: center;
    background-color: #00A1EF;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 5%;
`;

export const Logo = styled.img`
    width: 30%;
    height: 60%;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: 0% 5%;
`;

export const MenuTitle = styled.span`
    color: white;
    font-size: 1vw;
`;