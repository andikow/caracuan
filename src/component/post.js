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
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/token`,
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
  show(){
  $('div[id="tambahbagian"]').toggleClass("d-inline")
  }
  submitpost(){
    var data = {
      judul:this.state.judul,
      deskripsi:this.state.deskripsi,
      linkvideo:this.state.linkvideo,
      jenispostingan:this.state.jenispostingan,
      harga:this.state.harga,
      memberID:this.state.memberID
    }
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/submitpost`,
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
      <div class="container-fluid">

          <h2 class = "col-12 my-2">Buat Akademi</h2>
          <div class="card">
            <h3 class = "col-12 my-2">Bagian</h3>
            <div class="row">
              <div class="col-2 my-2">
                <button type="button" class="btn btn-link" onClick={() => this.show()}>+ Bagian</button>
              </div>
              <div id ="tambahbagian" class="col-9 my-2 tambahbagian d-none">
                <input class="form-control" type="text" placeholder="Nama Bagian" aria-label="post-title" onChange={ev => this.setState({ judul: ev.target.value })}/>
              </div>
              <div id ="tambahbagian" class="col-1 my-2 tambahbagian d-none">
                <button type="button" class="d-inline btn btn-block btn-primary" onClick={() => this.simpanbagian()}><i class="fal fa-save"></i></button>
              </div>
            </div>
            <div class="col-12 my-2">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Bagian</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>Pilih Bagian...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
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
            <h3 class = "col-12 my-2">Jenis Akademi</h3>
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
        <button type="button" class="btn btn-primary my-2" onClick={() => this.submitpost()}>Tayangkan</button>
      </div>
      </div>
      );
    }
  }

  export default Post;
