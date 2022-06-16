import React, { Component } from "react";
import $ from 'jquery';
import jwt_decode from 'jwt-decode';
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import './../public/assets/css/react-draft-wysiwyg.css';

class UbahMateri extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token:'',
      editorState: EditorState.createEmpty(),
      memberID:'',
      materiID : this.props.location.pathname.split("/")[3],
      dataMateri:{},
      judul:'',
      deskripsi:'',
      linkvideo:'',
    };
  }

  async componentDidMount(){
    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/token`,
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

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/materi/id/${this.state.materiID}`,
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
            dataMateri: data[0],
            editorState: EditorState.createWithContent(
              ContentState.createFromBlockArray(
                convertFromHTML(data[0].deskripsi)
              )
            ),

          });
      })
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
      deskripsi: draftToHtml(convertToRaw(editorState.getCurrentContent()))
    });
  };

  ubahmateri(){
    var data = {
      materiID:this.state.materiID,
      judul:this.state.judul,
      deskripsi:this.state.deskripsi,
      linkvideo:this.state.linkvideo,
    }
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/ubahmateri`,
    {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(alert('Materi berhasil diubah!'))

  }

  hapusMateri(){
    var data = {
      materiID:this.props.location.pathname.split("/")[3],
    }
      fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/hapusmateri`,
        {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(alert('Materi berhasil dihapus!'))
        .then(window.location.reload())
      }


  render() {
    const { editorState } = this.state;
    return (
    <div class="container">
      <div class="row">
        <h2 class = "col-12 my-2">Ubah Materi</h2>
        {/*Materi*/}
        <div class="col-12">
          <div class="card pt-0">
            <div class="card-header">Materi</div>
            <div class="card-body">
              <div class="row">
                <h5 class="col-12 my-2">Judul</h5>
                <div class="col-12 my-2">
                  <input class="form-control" type="text" placeholder="Judul Materi" aria-label="post-title" onChange={ev => this.setState({ judul: ev.target.value })} value={this.state.dataMateri.judul}/>
                </div>
                <h5 class="col-12 my-2">Deskripsi</h5>
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
                  <h5 class = "col-12 my-2">Link Video</h5>
                  <div class="col-12 my-2">
                    <input class="form-control" type="text" placeholder="Link Video" aria-label="post-title" onChange={ev => this.setState({ linkvideo: ev.target.value })} value={this.state.dataMateri.linkvideo}/>
                  </div>
                  <div class="col-12 my-2">
                    <button type="button" class="btn btn-primary my-2 d-inline" onClick={() => this.ubahmateri()}>Simpan Perubahan</button>
                    <button type="button" class="btn btn-danger d-inline float-right" onClick={() => this.hapusMateri()}>Hapus</button>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
      );
    }
  }

  export default UbahMateri;
