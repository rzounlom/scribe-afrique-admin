import {
  CreatePostButtonContainer,
  CreatePostContainer,
  CreatePostEditorContainer,
  CreatePostEditorLebel,
  CreatePostForm,
  CreatePostInputContainer,
  CreatePostInputGroup,
} from './styles';
import React, { useState } from 'react';

import Button from '../../../common/components/button/button';
import { CREATE_POST_MUTATION } from '../../../graphql/mutations/post/createPost';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import PostEditor from '../postEditor/postEditor';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { setMessage } from '../../../state/actions/dashboard/dashboardActions';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router';

const CreatePost = ({ setRenderContentVal, refetchPosts }) => {
  const dispatch = useDispatch();
  const [createPostMutation] = useMutation(CREATE_POST_MUTATION);
  const publishOptions = [
    { value: false, label: 'Unpublished' },
    { value: true, label: 'Published' },
  ];
  const [formInputs, setFormInputs] = useState({
    title: '',
    published: false,
    image: '',
    description: '',
  });

  const handleAlert = () => {
    dispatch(setMessage('error', 'All fields must be filled  out'));
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const { title, image, published, description } = formInputs;
  const formValidation = image && title && description;

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log('formValidation', formValidation);
    if (!formValidation) {
      handleAlert();
      return;
    }
    try {
      const {
        data: { createPost: message },
      } = await createPostMutation({
        variables: {
          title,
          image,
          description: JSON.stringify(description),
          published,
        },
      });
      await refetchPosts('all');
      await dispatch(setMessage('success', message.message));

      await setRenderContentVal(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreatePostContainer>
      <CreatePostForm>
        <CreatePostInputContainer>
          <Grid container>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <CreatePostInputGroup>
                <TextField
                  fullWidth
                  name='title'
                  label='Title'
                  value={title}
                  required
                  onChange={handleInputChange}
                />
              </CreatePostInputGroup>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <CreatePostInputGroup>
                <TextField
                  select
                  fullWidth
                  label='Published'
                  name='published'
                  value={published}
                  onChange={handleInputChange}
                >
                  {publishOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </CreatePostInputGroup>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextField
                fullWidth
                label='Image Url'
                name='image'
                value={image}
                required
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </CreatePostInputContainer>
        <CreatePostEditorContainer>
          <CreatePostEditorLebel>Description</CreatePostEditorLebel>
          <PostEditor handleInputChange={handleInputChange} />
        </CreatePostEditorContainer>
        <CreatePostButtonContainer>
          <Button text='Create Post' type='createPost' clickEvent={onSubmit} />
        </CreatePostButtonContainer>
      </CreatePostForm>
    </CreatePostContainer>
  );
};

CreatePost.propTypes = {
  setRenderContentVal: PropTypes.func,
};

export default withRouter(CreatePost);
