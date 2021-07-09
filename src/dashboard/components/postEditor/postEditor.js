import { Editor, EditorState, RichUtils } from 'draft-js';
import React, { useState } from 'react';

const PostEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleChange = (editorState) => setEditorState(editorState);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  return (
    <Editor
      editorState={editorState}
      handleKeyCommand={handleKeyCommand}
      onChange={handleChange}
    />
  );
};

export default PostEditor;
