import { EditPostContainer } from './styles';
import PropTypes from 'prop-types';
import React from 'react';

const EditPost = ({ post }) => {
  return <EditPostContainer>EditPost</EditPostContainer>;
};

EditPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default EditPost;
