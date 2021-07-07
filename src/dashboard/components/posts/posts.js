import { PostButtons, PostsContainer } from './styles';
import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Loader from '../../../common/components/loader/loader';
import MediaCard from '../card/mediaCard';
import PropTypes from 'prop-types';
import { USER_POSTS_QUERY } from '../../../graphql/queries/post/postQueries';
import { useQuery } from '@apollo/client';

const Posts = () => {
  const [type, setType] = useState('all');
  const { loading, error, data, refetch } = useQuery(USER_POSTS_QUERY, {
    variables: { type },
  });
  console.log('userPosts', data);
  const refetchPosts = async (type) => {
    await setType(type);
    await refetch();
    console.log('type: ', type);
    console.log('refetching new posts: ', data);
  };

  const renderPosts = () => {
    return data ? (
      data.userPosts.map((post) => (
        <Grid key={post.id} item xs={12} md={6} lg={4}>
          <MediaCard post={post} />
        </Grid>
      ))
    ) : (
      <div>No Posts</div>
    );
  };
  return loading ? (
    <Loader />
  ) : (
    <PostsContainer>
      <Grid container spacing={2}>
        <PostButtons>
          <Button onClick={() => refetchPosts('all')}>All</Button>
          <Button onClick={() => refetchPosts('published')}>Published</Button>
          <Button onClick={() => refetchPosts('unpublished')}>
            Unpublished
          </Button>
        </PostButtons>
        {renderPosts()}
      </Grid>
    </PostsContainer>
  );
};

Posts.propTypes = {};

export default Posts;
