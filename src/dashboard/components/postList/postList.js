import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../card/mediaCard';
import { PostButtons } from '../posts/styles';
import PropTypes from 'prop-types';
import React from 'react';

const PostList = ({ setRenderContentVal, refetchPosts, data }) => {
  const renderPosts = () => {
    return data ? (
      data.userPosts.map((post) => (
        <Grid key={post.id} item xs={12} md={6} lg={6} xl={4}>
          <MediaCard
            post={post}
            type='postList'
            setRenderContentVal={setRenderContentVal}
          />
        </Grid>
      ))
    ) : (
      <div>No Posts</div>
    );
  };
  return (
    <Grid container spacing={2}>
      <PostButtons>
        <Button onClick={() => refetchPosts('all')}>All</Button>
        <Button onClick={() => refetchPosts('published')}>Published</Button>
        <Button onClick={() => refetchPosts('unpublished')}>Unpublished</Button>
        <Button onClick={() => setRenderContentVal(3)}>Create Post</Button>
      </PostButtons>
      {renderPosts()}
    </Grid>
  );
};

PostList.propTypes = {
  setRenderContentVal: PropTypes.func.isRequired,
  refetchPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default PostList;
