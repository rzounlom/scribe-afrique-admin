import {
  CreatePostButtonContainer,
  CreatePostContainer,
  CreatePostEditorContainer,
  CreatePostForm,
  CreatePostInputContainer,
  CreatePostInputGroup,
} from './styles';
import React, { useState } from 'react';

import Button from '../../../common/components/button/button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import PostEditor from '../postEditor/postEditor';
import TextField from '@material-ui/core/TextField';

const CreatePost = () => {
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

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
    console.log(formInputs);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('createPostSubmit: ', formInputs);
  };
  const { title, image, published, description } = formInputs;
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
          <PostEditor />
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
