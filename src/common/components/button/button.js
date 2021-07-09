import { CreatePostButton, MainBtn } from './styles';

import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ text, clickEvent, disabled, type }) => {
  switch (type) {
    case 'login':
      return (
        <MainBtn onClick={clickEvent} disabled={disabled}>
          {text}
        </MainBtn>
      );
    case 'createPost':
      return (
        <CreatePostButton onClick={clickEvent} disabled={disabled}>
          {text}
        </CreatePostButton>
      );
    default:
      <MainBtn onClick={clickEvent} disabled={disabled}>
        {text}
      </MainBtn>;
  }
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
