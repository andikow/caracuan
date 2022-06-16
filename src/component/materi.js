import React, { Component } from "react";
import $ from 'jquery';
import jwt_decode from 'jwt-decode';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import './../public/assets/css/react-draft-wysiwyg.css';

class Post extends Component {
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
  show(){
  $('div[id="tambahtopik"]').toggleClass("d-inline")
  }
  submitmateri(){
    var data = {
      topikID:this.state.topikID,
      judul:this.state.judul,
      deskripsi:this.state.deskripsi,
      linkvideo:this.state.linkvideo,
    }
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/submitmateri`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(alert('Materi berhasil ditayangkan!'))

  }
  simpanTopik(){
    var data = {
      kelasID:this.state.kelasID,
      namaTopik:this.state.namaTopik,
    }
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/simpantopik`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(alert('Topik Kelas berhasil disimpan!'))
    .then(this.tampilkanTopik(this.state.kelasID))
  }

  tampilkanTopik(ev){
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/tampilkanTopikKelas/${ev}`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(data => {this.setState({ dataTopik:data })})
  }

  render() {
    const { editorState } = this.state;
    return (
    <div class="container">
      <div class="row">
        <h2 class = "col-12 my-2">Buat Materi</h2>
        {/*Kelas*/}
        <div class="col-12">
          <div class="card pt-0">
                <div class="card-header">Kelas</div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 my-2">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text" for="inputGroupSelect01">Kelas</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01"
                        onChange=
                        {ev => {this.setState({ kelasID: ev.target.value });this.tampilkanTopik(ev.target.value)}}>
                        <option selected>Pilih Kelas...</option>
                        {
                          this.state.dataKelas.map(data=>
                            <>
                            <option value={data.kelasID}>
                            {data.judul}
                            </option>
                            </>
                        )}
                        </select>
                      </div>
                    </div>

                  </div>

                </div>

          </div>
        </div>
        {/*Topik*/}
        <div class="col-12">
          <div class="card pt-0">
                <div class="card-header">Topik</div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-2 my-2 d-inline">
                      <button type="button" class="btn btn-link" onClick={() => this.show()}>+ Topik</button>
                    </div>
                    <div id ="tambahtopik" class="col-9 my-2 d-none">
                      <input class="form-control" type="text" placeholder="Nama Topik" aria-label="post-title" onChange={ev => this.setState({ namaTopik: ev.target.value })}/>
                    </div>
                    <div id ="tambahtopik" class="col-1 my-2 d-none">
                      <button type="button" class="d-inline btn btn-block btn-primary" onClick={() => this.simpanTopik()}><i class="fal fa-save"></i></button>
                    </div>
                    <div class="col-12 my-2">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text" for="inputGroupSelect01">Topik</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01" onChange=
                        {ev => {this.setState({ topikID: ev.target.value })}}>
                          <option selected>Pilih Topik...</option>
                          {
                            this.state.dataTopik.map(data=>
                              <>
                              <option value={data.topikID}>
                              {data.namaTopik}
                              </option>
                              </>
                          )}
                        </select>
                      </div>
                    </div>

                  </div>

                </div>

          </div>
        </div>
        {/*Materi*/}
        <div class="col-12">
          <div class="card pt-0">
            <div class="card-header">Materi</div>
            <div class="card-body">
              <div class="row">
                <h5 class="col-12 my-2">Judul</h5>
                <div class="col-12 my-2">
                  <input class="form-control" type="text" placeholder="Judul Materi" aria-label="post-title" onChange={ev => this.setState({ judul: ev.target.value })}/>
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

  export default Post;
