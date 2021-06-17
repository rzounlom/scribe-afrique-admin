import './buttons.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ text }) => {
  return <button className='general-button'>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
