import { MainBtn } from './styles';
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ text, clickEvent }) => {
  return <MainBtn onClick={clickEvent}>{text}</MainBtn>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
};

export default Button;
