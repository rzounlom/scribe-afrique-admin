import { PostButtons, PostsContainer } from './styles';
import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../card/mediaCard';
import PropTypes from 'prop-types';
import { USER_POSTS_QUERY } from '../../../graphql/queries/post/postQueries';
import { useQuery } from '@apollo/client';

const Posts = () => {
  const [type, setType] = useState('all');
  const { loading, error, data } = useQuery(USER_POSTS_QUERY, {
    variables: { type },
  });
  console.log('userPosts', data);
  return (
    <PostsContainer>
      <Grid container spacing={2}>
        <PostButtons>
          <Button>All</Button>
          <Button>Published</Button>
          <Button>Unpublished</Button>
        </PostButtons>
        <Grid item xs={12} md={6} lg={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MediaCard />
        </Grid>
      </Grid>
    </PostsContainer>
  );
};

Posts.propTypes = {};

export default Posts;
