import React, { Component } from "react";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import './../public/assets/css/react-draft-wysiwyg.css';

class Saldo extends Component {
  constructor(props) {
   super(props);
   this.state = {
     editorState: EditorState.createEmpty(),
   };
 }

 onEditorStateChange: Function = (editorState) => {
   this.setState({
     editorState,
   });
 };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <h2 class="m-3">Create Post</h2>
        <h3 class="m-3">Title</h3>
        <div class="m-3">
          <input class="form-control" type="text" placeholder="Judul Post" aria-label="post-title" />
        </div>
        <h3 class="m-3">Description</h3>
        <div class="m-3 border">
          <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          />
        </div>
        <button type="button" class="m-3 btn btn-primary">Create Post</button>
      </div>
    );
  }
}

export default Saldo;
