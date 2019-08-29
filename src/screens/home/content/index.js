import React from 'react';

import { Container, ImgHomeContainer, Img, TextHomeContainer, HomeText } from './styled-wrappers';
import ImgHome from '../../../assets/img/img-home.png';

function Content() {
    return (
      <Container>
        <TextHomeContainer>
            <HomeText>Sua empresa focada no negócio</HomeText>
            <HomeText>A devninjas focada no</HomeText>
            <HomeText>desenvolvimento do aplicativo</HomeText>
        </TextHomeContainer>
        <ImgHomeContainer>
            <Img src={ImgHome} alt='img_home'/>
        </ImgHomeContainer>
      </Container>
    );
}

export default Content;