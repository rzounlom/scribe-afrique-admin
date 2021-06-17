import './buttons.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ text, submit }) => {
  return (
    <button className='general-button' onClick={submit}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
