import React, { Component } from "react";
import Poto from './../public/assets/img/mainpost-img.jpg';

import Header from './../component/header.js';
import Footer from './../component/footer.js';

import VideoContent from './../component/video-content.js';

class MainPost extends Component {
  render() {
    return (
    <>
    <Header/>

    <div class="container">
      <div class="row">
        {/*Left Content*/}
        <div class="col-5 m-0 p-1 border">
          <div class="row m-0 pt-5 mb-5 bg-white">
            <div class="col-12">
              <h2 class="text-center">Daftar Materi</h2>
            </div>
            <div class="col-12">
              <div id="accordion" >
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Mengenal TrendLine
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">

                    <div class="list-group">
                      <a href="/#/andika/1" class="list-group-item list-group-item-action border">
                        <div class="row justify-content-between">
                          <div class="col-11">
                            1. Apa itu Trendline
                          </div>
                          <div class="col-1 p-0">
                            <i class="fas fa-check fa-fw mr-2"></i>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="list-group-item list-group-item-action border">
                        <div class="row justify-content-between">
                          <div class="col-11">
                            2. Cara Menggambar Trendline
                          </div>
                          <div class="col-1 p-0">
                            <i class="fas fa-check fa-fw mr-2"></i>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="list-group-item list-group-item-action border">
                        <div class="row justify-content-between">
                          <div class="col-11">
                            3. Merevisi Trendline
                          </div>
                          <div class="col-1 p-0">
                            <i class="fas fa-times fa-fw mr-2"></i>
                          </div>
                        </div>
                      </a>
                    </div>

                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Cara Entry yang Benar
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">

                    <div class="list-group">
                      <a href="#" class="list-group-item list-group-item-action border">
                        <div class="row justify-content-between">
                          <div class="col-11">
                            1. Apa itu Entry
                          </div>
                          <div class="col-1 p-0">
                            <i class="fas fa-times fa-fw mr-2"></i>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="list-group-item list-group-item-action border">
                        <div class="row justify-content-between">
                          <div class="col-11">
                            2. Entri Pasar dan Antri Pasar
                          </div>
                          <div class="col-1 p-0">
                            <i class="fas fa-times fa-fw mr-2"></i>
                          </div>
                        </div>
                      </a>
                    </div>

                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Menggunakan Fibonacci
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">

                    <div class="list-group">
                      <a href="#" class="list-group-item list-group-item-action border">
                        <div class="row justify-content-between">
                          <div class="col-11">
                            1. Sejarah Fibonacci
                          </div>
                          <div class="col-1 p-0">
                            <i class="fas fa-times fa-fw mr-2"></i>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="list-group-item list-group-item-action border">
                        <div class="row justify-content-between">
                          <div class="col-11">
                            2. Cara Menggambar Fibonacci
                          </div>
                          <div class="col-1 p-0">
                            <i class="fas fa-times fa-fw mr-2"></i>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="list-group-item list-group-item-action border">
                        <div class="row justify-content-between">
                          <div class="col-11">
                            3. Memanfaatkan Fibonacci Untuk Entry dan Exit
                          </div>
                          <div class="col-1 p-0">
                            <i class="fas fa-times fa-fw mr-2"></i>
                          </div>
                        </div>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Left Content*/}

        {/*Right Content*/}
        <div class="col-7 m-0 p-1 border">
          <div class="row m-0 pt-5 bg-white">
            <div class="col-12">
              <h2 class="text-center">Belajar Saham dari awal untuk pemula</h2>
            </div>
            <div class="col-12">
              <VideoContent/>
            </div>
            <div class="col-12 mx-auto px-5 text-dark">
              <p>Saham tidaklah mudah, butuh pengalaman minimal
                3 tahun untuk bisa beradaptasi di bursa saham yakni melewati periode bullish,
                bearish, dan sideways.</p>

                <div class="block-content paragraph">
                  <p>Saham tidaklah mudah, butuh pengalaman minimal
                    3 tahun untuk bisa beradaptasi di bursa saham yakni melewati periode bullish,
                    bearish, dan sideways.</p>
                  </div>
                  <div class="block-content-image loaded">

                  </div>


                  <noscript class="block-image-fallback">
                    <div class="block-content-image noscript">
                      <img src="https://trakteer.id/files/lv7xp94wy93z8dg6/6l8b75dgrw5qkv9z/ja6z74qnqb4mlqyk/1592323247_74VFtxP0" alt=""/>
                    </div>
                  </noscript>

                  <div class="block-content paragraph">
                    <p>Ketika awal masuk bursa saham tidak usah
                      kepikiran mau cepat kaya, anda bisa tidak rugi modal saja itu sudah bagus!</p>
                    </div>
                    <div class="block-content paragraph">
                      <p><b>Dua tahun pertama di
                        saham </b>adalah untuk
                        pencarian jati diri, menemukan style dan sistem yang pas bagi diri anda, apakah
                        anda mau jadi trader, investor, scalper, teknikalis, fundamentalis, semua itu
                        akan terungkap di dua tahun pertama di saham.</p>
                      </div>
                      <div class="block-content paragraph">
                        <p><b>Di tahun ketiga dan
                          seterusnya</b> barulah
                          mayoritas orang menemukan sistem yang pas bagi dirinya yang bakal diasah terus
                          sampai seumur hidup.</p>
                        </div>
                        <div class="block-content paragraph">
                          <p>Biasanya orang yang gagal di tahun pertama itu karena mau cepat kaya di saham.</p>
                        </div>
                        <div class="block-content paragraph">
                          <p>Pengen untung besar tanpa memikirkan resikonya,
                            melihat saham bisa naik 20% sehari langsung dihantam pakai modal besar, dan
                            akhirnya berakhir tragis.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Sebelum anda mulai belajar saham ada bagusnya baca artikel saya yang ini dulu:&nbsp;<a href="https://trakteer.id/saham707/showcase/saran-untuk-pemula-saham-eO0zz" target="_blank" rel="noreferrer noopener">https://trakteer.id/saham707/showcase/saran-untuk-pemula-saham-eO0zz</a></p>
                          </div>
                          <div class="block-content paragraph">
                            <p>.</p>
                          </div>
                          <div class="block-content">
                            <h3>Apa itu Saham?</h3>
                          </div>
                          <div class="block-content paragraph">
                            <p>Menurut KBBI, Saham adalah surat bukti kepemilikan bagian modal perseroan terbatas yang memberi hak atas dividen dan lain-lain menurut besar kecilnya modal yang disetor.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Pada intinya membeli saham adalah membeli bisnis perusahaan yakni secara tidak langsung anda menjadi pemilik perusahaan tersebut.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Dalam saham ada 2 cara mendapatkan keuntungan yakni <b>Capital Gain</b> &amp; <b>Dividen</b>.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p><b>Capital gain</b> adalah keuntungan yang didapatkan jika harga sahamnya naik, misal anda beli saham BBRI di harga 3000 terus seminggu kemudian dia naik ke 3300 jadinya untung +10%.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Jika anda beli saham BBRI di harga 3000 trus ternyata sahamnya turun ke 2700 maka anda rugi -10%, tapi anda tidak akan rugi beneran selama anda belum jual.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Jika anda belum jual saham yang harganya turun maka anda tidak akan rugi beneran, hal ini disebut dengan <b>FLOATING LOSS</b>.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Jika harga saham sudah naik +10% tapi anda belum jual maka anda belum untung beneran, hal ini disebut dengan <b>FLOATING GAIN</b>.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Jika anda sudah jual ntah itu jual rugi atau untung, maka itu disebut sebagai <b>REALIZED PROFIT</b> / <b>REALIZED LOSS</b>.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Lama-lama anda akan mengerti istilah-istilah di saham, saya awalnya juga tidak mengerti tapi akhirnya seiring waktu mengerti juga.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Kalau <b>Dividen</b> adalah bagi hasil perusahaan atas laba yang diperolehnya.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Konsep membeli saham berarti anda membeli bisnis perusahaan tersebut.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Ketika perusahaan itu untung, anggaplah di tahun 2019 dia untung 100 juta.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Setelahnya bakal ada rapat umum pemegang saham setiap tahunnya untuk memutuskan mau diapakan laba bersih 100 juta itu?</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Jika misalnya perusahaan memutuskan 50% dari laba yakni 50 juta dibagikan sebagai dividen, maka anda akan menerima dividen.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Hal ini dikenal dengan istilah <i>Dividen Payout Ratio</i> (DPR) yakni berapa persen laba perusahaan yang dibagikan buat dividen.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Dividen tidak wajib dibagikan oleh perusahaan, jadi bisa saja perusahaan tidak bagi dividen. Kalau perusahaan rugi tentunya tidak akan bagi dividen, karena pembagian dividen berdasarkan dari laba bersih.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Bagusnya sih perusahaan hanya bagi 50% laba perusahaan untuk dividen, sehingga sisa 50%-nya bisa digunakan untuk pengembangan perusahaan.</p>
                          </div>
                          <div class="block-content paragraph">
                            <p>Tapi ada juga perusahaan yang bagi dividen lebih dari 100% dividen, biasanya ini karena perusahaan punya cash berlimpah sehingga tidak butuh uang tambahan, jadi semua labanya dibagi buat dividen.</p>
                          </div>
            </div>

          </div>
        </div>
        {/*End Right Content*/}
      </div>
    </div>

    <Footer/>
                </>
                );
              }
            }

            export default MainPost;
