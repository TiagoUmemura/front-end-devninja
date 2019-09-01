import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from './styled-wrappers';

function InputText({ nameInput }) {
    return (
      <TextField type="text" name={nameInput} placeholder={nameInput}/>
    );
}

InputText.propTypes = {
    nameInput: PropTypes.string.isRequired,
};

export default InputText;