import { MainBtn } from './styles';
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ text, clickEvent, disabled }) => {
  return (
    <MainBtn onClick={clickEvent} disabled={disabled}>
      {text}
    </MainBtn>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
