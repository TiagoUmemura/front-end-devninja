import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from './styled-wrappers';

function TextArea({ nameInput, width }) {
    return (
      <TextField name={nameInput} placeholder={nameInput} width={width} rows='4'/>
    );
}

TextArea.propTypes = {
    nameInput: PropTypes.string.isRequired,
};

export default TextArea;