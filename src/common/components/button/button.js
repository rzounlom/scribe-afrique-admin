import { MainBtn } from './styles';
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ text, submit }) => {
  return <MainBtn onClick={submit}>{text}</MainBtn>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
