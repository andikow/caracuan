import React, { Component } from "react";
import $ from 'jquery';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import './../public/assets/css/react-draft-wysiwyg.css';

class Post extends Component {
  componentDidMount(){
    $('input[name="jenisPostingan"]').change(function(){
 $('input[name="inputharga"]').prop('disabled',this.value !== 'Berbayar' ?true:false);
});
  }
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
    <div class="m-4 col-9">
      <div class="row">
        <h2 class = "col-12 my-2">Buat Postingan</h2>
        <h3 class = "col-12 my-2">Judul</h3>
        <div class="col-12 my-2">
          <input class="form-control" type="text" placeholder="Judul Postingan" aria-label="post-title" />
        </div>
        <h3 class="col-12 my-2">Deskripsi</h3>
        <div class="col-12 my-2">
          <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper border"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          />
        </div>
        {/*<textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          />*/}
          <h3 class = "col-12 my-2">Link Video</h3>
          <div class="col-12 my-2">
            <input class="form-control" type="text" placeholder="Link Video" aria-label="post-title" />
          </div>
          <h3 class = "col-12 my-2">Jenis Postingan</h3>
          <div class="col-12 my-2">
            <div class="form-check form-check-inline">
              <input class="d-inline form-check-input" type="radio" name="jenisPostingan" id="opsiGratis" value="Gratis"/>
              <label class="form-check-label" for="opsiGratis">Gratis</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="d-inline form-check-input" type="radio" name="jenisPostingan" id="opsiBerbayar" value="Berbayar"/>
              <label class="form-check-label" for="opsiBerbayar">Berbayar</label>
              <input class="d-inline form-control ml-2" name="inputharga" type="number" placeholder="Harga" aria-label="post-title" disabled/>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary my-2">Tayangkan</button>
      </div>
      );
    }
  }

  export default Post;
