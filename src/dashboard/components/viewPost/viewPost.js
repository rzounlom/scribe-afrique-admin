import {
  ViewPostContainer,
  ViewPostDescription,
  ViewPostImageContainer,
  ViewPostTitle,
} from './styles';

import Button from '@material-ui/core/Button';
import { PostButtons } from '../posts/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

const ViewPost = ({ setRenderContentVal }) => {
  const post = useSelector((state) => state.post.currentPost);
  console.log('post: ', post);
  return (
    <ViewPostContainer>
      <PostButtons>
        <Button onClick={() => setRenderContentVal(0)}>All Posts</Button>
      </PostButtons>
      <ViewPostTitle>{post.title}</ViewPostTitle>
      <ViewPostImageContainer>
        <img
          src={post.image}
          alt='post'
          style={{ height: '100%', width: '100%' }}
        />
      </ViewPostImageContainer>
      <ViewPostDescription>{post.description}</ViewPostDescription>
    </ViewPostContainer>
  );
};

ViewPost.propTypes = {
  post: PropTypes.object.isRequired,
  setRenderContentVal: PropTypes.func.isRequired,
};

export default ViewPost;
