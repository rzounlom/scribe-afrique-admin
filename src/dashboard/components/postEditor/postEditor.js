import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './styles.scss';

import React, { useState } from 'react';

import DOMPurify from 'dompurify';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { convertToHTML } from 'draft-convert';

const PostEditor = ({ handleInputChange }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
    handleInputChange({
      target: { name: 'description', value: createMarkup(convertedContent) },
    });
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  const handleSubmit = () => {
    console.log(createMarkup(convertedContent));
  };
  return (
    <div style={{ height: '100%' }}>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName='wrapper-class'
        editorClassName='editor-class'
        toolbarClassName='toolbar-class'
      />
    </div>
  );
};
export default PostEditor;
