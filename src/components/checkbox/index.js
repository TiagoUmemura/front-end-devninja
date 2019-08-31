import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styled-wrappers';

function Checkbox({text, onClickHandler}) {
    return (
      <Container>
          <input type="checkbox" name={text} value={text}></input>
          <Text>{text}</Text>
      </Container>
    );
}

Checkbox.propTypes = {
  text: PropTypes.string,
  onClickHandler: PropTypes.func
};

export default Checkbox;