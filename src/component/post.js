import React, { Component } from "react";
import $ from 'jquery';
import jwt_decode from 'jwt-decode';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import './../public/assets/css/react-draft-wysiwyg.css';

class Post extends Component {
  componentDidMount(){
    $('input[name="jenisPostingan"]').change(function(){
      $('input[name="inputharga"]').prop('disabled',this.value !== 'Berbayar' ? true:false);
    });
    fetch('http://localhost:3000/user/token',
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials:'include'
    })
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      this.setState({
        token: data.accessToken
      });
      const decoded = jwt_decode(this.state.token);
      this.setState({
        memberID: decoded.memberID,
        expire:decoded.exp
      })
    })
    .catch((error)=>{
      this.props.history.push('/login')
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      token:'',
      editorState: EditorState.createEmpty(),
      memberID:'',
      judul:'',
      deskripsi:'',
      linkvideo:'',
      jenispostingan:false,
      price:''
    };
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
      deskripsi: draftToHtml(convertToRaw(editorState.getCurrentContent()))
    });
  };

  submitpost(){
    var data = {
      judul:this.state.judul,
      deskripsi:this.state.deskripsi,
      linkvideo:this.state.linkvideo,
      jenispostingan:this.state.jenispostingan,
      harga:this.state.harga,
      memberID:this.state.memberID
    }
    fetch('http://localhost:3000/user/submitpost',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
  ).then(res => res.json())
  .then(alert('Postingan berhasil ditayangkan!'))
  .then(this.props.history.push('/login'))
}

  render() {
    const { editorState } = this.state;
    return (
    <div class="m-4 col-9">
      <div class="row">
        <h2 class = "col-12 my-2">Buat Postingan</h2>
        <h3 class = "col-12 my-2">Judul</h3>
        <div class="col-12 my-2">
          <input class="form-control" type="text" placeholder="Judul Postingan" aria-label="post-title" onChange={ev => this.setState({ judul: ev.target.value })}/>
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
            <input class="form-control" type="text" placeholder="Link Video" aria-label="post-title" onChange={ev => this.setState({ linkvideo: ev.target.value })}/>
          </div>
          <h3 class = "col-12 my-2">Jenis Postingan</h3>
          <div class="col-12 my-2">
            <div class="form-check form-check-inline">
              <input class="d-inline form-check-input" type="radio" name="jenisPostingan" id="opsiGratis" value="Gratis" onChange={ev => this.setState({ jenispostingan: ev.target.value })}/>
              <label class="form-check-label" for="opsiGratis">Gratis</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="d-inline form-check-input" type="radio" name="jenisPostingan" id="opsiBerbayar" value="Berbayar" onChange={ev => this.setState({ jenispostingan: ev.target.value })}/>
              <label class="form-check-label" for="opsiBerbayar">Berbayar</label>
              <input class="d-inline form-control ml-2" name="inputharga" type="number" placeholder="Harga" aria-label="post-title" disabled onChange={ev => this.setState({ harga: ev.target.value })}/>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary my-2" onClick={() => this.submitpost()}>Tayangkan</button>
      </div>
      );
    }
  }

  export default Post;
