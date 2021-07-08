import React, { useState } from 'react';

import CreatePost from '../createPost/createPost';
import EditPost from '../editPost/editPost';
import Loader from '../../../common/components/loader/loader';
import PostList from '../postList/postList';
import { PostsContainer } from './styles';
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
          <PostList
            data={data}
            refetchPosts={refetchPosts}
            setRenderContentVal={setRenderContentVal}
          />
        );
      case 1:
        return <ViewPost setRenderContentVal={setRenderContentVal} />;
      case 2:
        return <EditPost setRenderContentVal={setRenderContentVal} />;
      case 3:
        return <CreatePost setRenderContentVal={setRenderContentVal} />;
      default:
        return (
          <PostList
            data={data}
            refetchPosts={refetchPosts}
            setRenderContentVal={setRenderContentVal}
          />
        );
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <PostsContainer>{renderContent(renderContentVal)}</PostsContainer>
  );
};

export default Posts;
