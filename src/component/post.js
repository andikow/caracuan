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

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/topik/${this.state.memberID}`,
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
            datatopik: data
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
      datatopik:[],
      namaBagian:'',
      topikID:'',
      dataBagian:[],
      bagianID:'',
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
      memberID:this.state.memberID,
      bagianID:this.state.bagianID,
      topikID:this.state.topikID,
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
  }
  simpanbagian(){
    var data = {
      topikID:this.state.topikID,
      namaBagian:this.state.namaBagian,
    }
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/simpanbagian`,
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
    .then(this.tampilkanBagian(this.state.topikID))
  }
  tampilkanBagian(ev){
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/tampilkanBagianKelas/${ev}`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(data => {this.setState({ dataBagian:data })})
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
                        {ev => {this.setState({ topikID: ev.target.value });this.tampilkanBagian(ev.target.value)}}>
                        <option selected>Pilih Kelas...</option>
                        {
                          this.state.datatopik.map(data=>
                            <>
                            <option value={data.topikID}>
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
                    <div id ="tambahbagian" class="col-9 my-2 d-none">
                      <input class="form-control" type="text" placeholder="Nama Bagian" aria-label="post-title" onChange={ev => this.setState({ namaBagian: ev.target.value })}/>
                    </div>
                    <div id ="tambahbagian" class="col-1 my-2 d-none">
                      <button type="button" class="d-inline btn btn-block btn-primary" onClick={() => this.simpanbagian()}><i class="fal fa-save"></i></button>
                    </div>
                    <div class="col-12 my-2">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text" for="inputGroupSelect01">Topik</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01" onChange=
                        {ev => {this.setState({ bagianID: ev.target.value })}}>
                          <option selected>Pilih Topik...</option>
                          {
                            this.state.dataBagian.map(data=>
                              <>
                              <option value={data.bagianID}>
                              {data.namaBagian}
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
                  <h5 class = "col-12 my-2">Jenis Materi</h5>
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
                    <button type="button" class="btn btn-primary my-2 d-block" onClick={() => this.submitpost()}>Tayangkan</button>
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
