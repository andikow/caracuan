import React, { Component } from "react";
import $ from 'jquery';
import jwt_decode from 'jwt-decode';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import './../public/assets/css/react-draft-wysiwyg.css';

class UbahMateri extends Component {
  async componentDidMount(){

    $('input[name="jenisPostingan"]').change(function(){
      $('input[name="inputharga"]').prop('disabled',this.value !== 'Berbayar' ? true:false);
    });
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

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/kelas/${this.state.memberID}`,
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
            dataKelas: data
          });
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
      price:'',
      dataKelas:[],
      namaTopik:'',
      kelasID:'',
      dataTopik:[],
      topikID:'',
    };
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
      deskripsi: draftToHtml(convertToRaw(editorState.getCurrentContent()))
    });
  };

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
                  <input class="form-control" type="text" placeholder="Judul Postingan" aria-label="post-title" onChange={ev => this.setState({ judul: ev.target.value })}/>
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
                    <input class="form-control" type="text" placeholder="Link Video" aria-label="post-title" onChange={ev => this.setState({ linkvideo: ev.target.value })}/>
                  </div>
                  <div class="col-12 my-2">
                    <button type="button" class="btn btn-primary my-2 d-block" onClick={() => this.submitmateri()}>Tayangkan</button>
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
