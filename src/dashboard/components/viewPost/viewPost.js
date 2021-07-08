import MediaCard from '../card/mediaCard';
import PropTypes from 'prop-types';
import React from 'react';
import { ViewPostContainer } from './styles';

const ViewPost = ({ post }) => {
  return <ViewPostContainer>Single Post View</ViewPostContainer>;
};

ViewPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default ViewPost;
