import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Text, ContainerIcon, Img,ContainerTitle } from './styled-wrappers';

function CardText({width, height, title, text, icon, color}) {
    return (
      <Container width={width} height={height}>
          <ContainerIcon><Img src={icon}/></ContainerIcon>
          <ContainerTitle>
            <Title color={color}>{title}</Title>
          </ContainerTitle>
          <Text>{text}</Text>
      </Container>
    );
}

CardText.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    text: PropTypes.string.isRequired,
    title: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.any
  };

export default CardText;