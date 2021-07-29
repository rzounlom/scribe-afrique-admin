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

import Alert from '../../../common/components/alert/alert';
import Button from '../../../common/components/button/button';
import { CREATE_POST_MUTATION } from '../../../graphql/mutations/post/createPost';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import PostEditor from '../postEditor/postEditor';
import TextField from '@material-ui/core/TextField';
import { useMutation } from '@apollo/client';

const CreatePost = () => {
  const [alert, setAlert] = useState(true);
  const [createPostMutation] = useMutation(CREATE_POST_MUTATION);
  const publishOptions = [
    { value: 'false', label: 'Unpublished' },
    { value: 'true', label: 'Published' },
  ];
  const [formInputs, setFormInputs] = useState({
    title: '',
    published: false,
    image: '',
    description: '',
  });

  const handleAlert = () => {
    setAlert(!alert);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
    console.log(formInputs);
  };

  const { title, image, published, description } = formInputs;
  const formValidation =
    published && image && title && description && description;

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!formValidation) {
      handleAlert();
      return;
    }
    try {
      const {
        data: {
          createPost: { message },
        },
      } = createPostMutation({
        variables: formInputs,
      });
      console.log('createPostSubmit: ', formInputs);
      console.log('message: ', message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreatePostContainer>
      <Alert
        severity='error'
        open={alert}
        handleAlert={handleAlert}
        message='This is a test'
      />
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

CreatePost.propTypes = {};

export default CreatePost;
