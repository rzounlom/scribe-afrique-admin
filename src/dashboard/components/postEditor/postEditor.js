import 'draft-js/dist/Draft.css';

import { Editor, EditorState } from 'draft-js';

import { PostEditorContainer } from './styles';
import React from 'react';

const PostEditor = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  return (
    <PostEditorContainer>
      <Editor editorState={editorState} onChange={setEditorState} />
    </PostEditorContainer>
  );
};

export default PostEditor;
