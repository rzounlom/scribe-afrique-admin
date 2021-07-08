import { PostButtons, PostsContainer } from './styles';
import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import EditPost from '../editPost/editPost';
import Grid from '@material-ui/core/Grid';
import Loader from '../../../common/components/loader/loader';
import MediaCard from '../card/mediaCard';
import { USER_POSTS_QUERY } from '../../../graphql/queries/post/postQueries';
import ViewPost from '../viewPost/viewPost';
import { useQuery } from '@apollo/client';

const Posts = () => {
  const [type, setType] = useState('all');
  const [renderContentVal, setRenderContentVal] = useState(0);
  const { loading, data, refetch } = useQuery(USER_POSTS_QUERY, {
    variables: { type },
  });
  const refetchPosts = async (type) => {
    await setType(type);
    await refetch();
  };

  const renderContent = (val) => {
    switch (val) {
      case 0:
        return (
          <Grid container spacing={2}>
            <PostButtons>
              <Button onClick={() => refetchPosts('all')}>All</Button>
              <Button onClick={() => refetchPosts('published')}>
                Published
              </Button>
              <Button onClick={() => refetchPosts('unpublished')}>
                Unpublished
              </Button>
            </PostButtons>
            {renderPosts()}
          </Grid>
        );
      case 1:
        return <ViewPost setRenderContentVal={setRenderContentVal} />;
      case 2:
        return <EditPost setRenderContentVal={setRenderContentVal} />;

      default:
        return (
          <Grid container spacing={2}>
            <PostButtons>
              <Button onClick={() => refetchPosts('all')}>All</Button>
              <Button onClick={() => refetchPosts('published')}>
                Published
              </Button>
              <Button onClick={() => refetchPosts('unpublished')}>
                Unpublished
              </Button>
            </PostButtons>
            {renderPosts()}
          </Grid>
        );
    }
  };

  const renderPosts = () => {
    return data ? (
      data.userPosts.map((post) => (
        <Grid key={post.id} item xs={12} md={6} lg={4}>
          <MediaCard
            post={post}
            type='post'
            setRenderContentVal={setRenderContentVal}
          />
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
      {/* <Grid container spacing={2}>
        <PostButtons>
          <Button onClick={() => refetchPosts('all')}>All</Button>
          <Button onClick={() => refetchPosts('published')}>Published</Button>
          <Button onClick={() => refetchPosts('unpublished')}>
            Unpublished
          </Button>
        </PostButtons>
        {renderPosts()}
      </Grid> */}
      {renderContent(renderContentVal)}
    </PostsContainer>
  );
};

export default Posts;
