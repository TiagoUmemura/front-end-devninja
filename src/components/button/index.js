import React from 'react';
import PropTypes from 'prop-types';

import { Container,Text } from './styled-wrappers';

function Button({width, height, text}) {
    return (
      <Container width={width} height={height}>
          <Text>{text}</Text>
      </Container>
    );
}

Button.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    text: PropTypes.string
  };

export default Button;