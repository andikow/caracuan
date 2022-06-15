import React, { Component } from "react";
import './../public/assets/css/quizlib.min.css';
import './../public/assets/css/stylesheet.css';
import InnerHTML from 'dangerously-set-html-content'

import Header from './../component/header.js';
import Footer from './../component/footer.js';

class Soal extends Component {

  render() {
    const html = `

 <!DOCTYPE html>
 <html>
     <head>
         <meta charset='utf-8'>
         <script type="text/javascript" src="scripts/quizlib.1.0.1.min.js"></script>
         <script type="text/javascript" src="scripts/main.js"></script>
     </head>

     <body>
         <!-- Quiz Results -->
         <!-- For this multi quiz, we'll use the same result element and move it to active quiz when the answer buttontesttest is pressed. -->
         <div class="test">

         <div id="quiz-result" class="cardtest">
             You Scored <span id="quiz-percent"></span>% - <span id="quiz-score"></span>/<span id="quiz-max-score"></span><br/>
         </div>


         <div id="quiz-1">
             <h2>UJI KOMPETENSI ANALIS</h2>
             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">1.	Jenis saham berdasarkan cara pengalihannya:</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="checkbox" name="q1" value="a"> Bearer Stocks</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q1" value="b"> Registered Stocks</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q1" value="c"> Common Stocks</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q1" value="d"> Preferred Stocks</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">2.	Jenis saham berdasarkan kepemilikan:</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="checkbox" name="q2" value="a"> Bearer Stocks</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q2" value="b"> Registered Stocks</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q2" value="c"> Common Stocks</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q2" value="d"> Preferred Stocks</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">3.	Jenis saham berdasarkan kinerja perdagangan:</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="checkbox" name="q3" value="a"> Blue Chip Stocks</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q3" value="b"> Income Stocks</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q3" value="c"> Growth Stocks</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q3" value="d"> Speculative Stocks</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">4.	Bursa efek dibuka pada pagi hari dan akan ditutup pada sore hari pukul 17.00 WIB, maka harga yang tertera saat pukul 17.00 WIB adalah</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="radio" name="q4" value="a" style="display:inline"> Closing Price</label></li>
                         <li><label><input class="inputtest" type="radio" name="q4" value="b" style="display:inline"> Market Price</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">5.	Apabila perusahaan mengalami kebangkrutan maka pemilik saham hanya akan memperoleh prioritas paling akhir dalam hal pembagian keuntungan perusahaan. Tetapi jumlah kerugian maksimum yang ditanggungnya sesuai besaran dana yang diinvestasikan merupkan jenis saham </div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="radio" name="q5" value="a" style="display:inline"> Preferred Stocks</label></li>
                         <li><label><input class="inputtest" type="radio" name="q5" value="b" style="display:inline"> Common Stocks</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">6.	Saham unggulan yang selalu membayar dividen atau laba lebih besar dari rata-rata dividen yang dibayarkan periode sebelumnya merupakan  </div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="radio" name="q6" value="a" style="display:inline"> Blue Chip Stocks</label></li>
                         <li><label><input class="inputtest" type="radio" name="q6" value="b" style="display:inline"> Income Stocks</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">7.	Bearer Stocks adalah kepemilikan saham terbukti pada nama yang tertulis di surat berharga. Sehingga cara pengalihannya harus melalui prosedur hukum untuk melakukan balik nama saham. </div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="radio" name="q7" value="a" style="display:inline"> Benar</label></li>
                         <li><label><input class="inputtest" type="radio" name="q7" value="b" style="display:inline"> Salah</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">8.	Growth Stocks adalah saham dengan pertumbuhan pemasukan perusahaan selalu tinggi, walaupun perusahaan tersebut tidak selalu dari perusahaan petinggi di industri tersebut. </div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="radio" name="q8" value="a" style="display:inline"> Benar</label></li>
                         <li><label><input class="inputtest" type="radio" name="q8" value="b" style="display:inline"> Salah</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
               <div>
                 <img src='soalsaham/soalno9.png'>
               </div>
                 <div class="quizlib-question-title">9. Candlestick ini mengindikasikan:</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="radio" name="q9" value="a" style="display:inline"> Trader penjual memegang kendali penuh</label></li>
                         <li><label><input class="inputtest" type="radio" name="q9" value="b" style="display:inline"> Trader pembeli memegang kendali penuh</label></li>
                         <li><label><input class="inputtest" type="radio" name="q9" value="c" style="display:inline"> Trader pembeli maupun trader penjual tidak dapat menggerakan harga terlalu jauh dan harga dekat pada posisi pembukaan</label></li>
                         <li><label><input class="inputtest" type="radio" name="q9" value="d" style="display:inline"> Trader pembeli melakukan perlawanan besar</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
               <div>
                 <img src='soalsaham/soalno10.png'>
               </div>
                 <div class="quizlib-question-title">10. Candlestick ini mengindikasikan:</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="radio" name="q10" value="a" style="display:inline"> Trader penjual memegang kendali penuh</label></li>
                         <li><label><input class="inputtest" type="radio" name="q10" value="b" style="display:inline"> Trader pembeli memegang kendali penuh</label></li>
                         <li><label><input class="inputtest" type="radio" name="q10" value="c" style="display:inline"> Trader pembeli maupun trader penjual tidak dapat menggerakan harga terlalu jauh dan harga dekat pada posisi pembukaan</label></li>
                         <li><label><input class="inputtest" type="radio" name="q10" value="d" style="display:inline"> Trader pembeli melakukan perlawanan besar</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
               <div>
                 <img src='soalsaham/soalno11.png'>
               </div>
                 <div class="quizlib-question-title">11.	Pernyataan berikut yang benar adalah</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="checkbox" name="q11" value="a"> Harga dibuka di titik 1, kemudian para trader pembeli (buyer) mengangkat harga tinggi dengan melakukan aksi beli yang masif hingga ke titik 2.</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q11" value="b"> Di titik 2 trader pembeli mulai melakukan perlawanan besar dengan mengangkat harga sampai ke titik 3.</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q11" value="c"> Di titik 3 trader penjual menekan harga sedikit hingga ke titik 4.</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q11" value="d"> Dari titik 3 trader pembeli melakukan sedikit perlawanan dan mengangkat harga ke titik 4.</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
               <div>
                 <img src='soalsaham/soalno12.png'>
               </div>
                 <div class="quizlib-question-title">12. Berikut adalah pola candlestick :</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="radio" name="q12" value="a" style="display:inline"> Two Black Gapping</label></li>
                         <li><label><input class="inputtest" type="radio" name="q12" value="b" style="display:inline"> Three Line Strike</label></li>
                         <li><label><input class="inputtest" type="radio" name="q12" value="c" style="display:inline"> Abandoned Baby</label></li>
                         <li><label><input class="inputtest" type="radio" name="q12" value="d" style="display:inline"> Evening Stars</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
               <div>
                 <img src='soalsaham/soalno13.jpg'>
               </div>
                 <div class="quizlib-question-title">13. Berikut adalah pola candlestick :</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="radio" name="q13" value="a" style="display:inline"> Two Black Gapping</label></li>
                         <li><label><input class="inputtest" type="radio" name="q13" value="b" style="display:inline"> Three Line Strike</label></li>
                         <li><label><input class="inputtest" type="radio" name="q13" value="c" style="display:inline"> Abandoned Baby</label></li>
                         <li><label><input class="inputtest" type="radio" name="q13" value="d" style="display:inline"> Evening Stars</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">14.	Pola yang muncul ketika ada bullish pada titik terendah dari turunnya ren, sesudah serangkaian candle hitam menghasilkan titik terendah paling rendah adalah</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="radio" name="q14" value="a" style="display:inline"> Two Black Gapping</label></li>
                         <li><label><input class="inputtest" type="radio" name="q14" value="b" style="display:inline"> Three Line Strike</label></li>
                         <li><label><input class="inputtest" type="radio" name="q14" value="c" style="display:inline"> Abandoned Baby</label></li>
                         <li><label><input class="inputtest" type="radio" name="q14" value="d" style="display:inline"> Evening Stars</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">15.	Berikut adalah saham yang tergabung dalam IDX30 pada periode periode Februari-Juli 2022:</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="checkbox" name="q15" value="a"> BMRI</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q15" value="b"> CPIN</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q15" value="c"> SMGR</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q15" value="d"> TINS</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">16.	Berikut adalah saham yang bergerak dalam sektor transportasi dan logistik:</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="checkbox" name="q16" value="a"> GIAA</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q16" value="b"> BLTA</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q16" value="c"> ASSA</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q16" value="d"> AKRA</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">17.	Berikut pernyataan yang benar mengenai sifat Moving Average</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="checkbox" name="q17" value="a"> Moving Average adalah indikator teknikal yang menghaluskan gerakan harga saham yang berfluktuasi.</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q17" value="b"> Moving Average merupakan indikator trend–following, indikator ini akan mengidentifikasi tren harga sesuai periodenya. </label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q17" value="c"> Indikator Moving Average didasarkan pada informasi harga sebelumnya maka sinyal yang diberikan lagging (terlambat).</label></li>
                         <li><label><input class="inputtest" type="checkbox" name="q17" value="d"> Moving Average adalah indikator dalam analisa teknikal saham yang digunakan investor untuk menentukan kecenderungan arah dari sebuah tren.</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">18.	Salah satu indikator analisis teknikal saham yang digunakan untuk menunjukkan kekuatan tren serta keakuratan titik masuk ataupun mengidentifikasi tren baru yang akan dimulai adalah</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="radio" name="q18" value="a" style="display:inline"> On-Balance Volume</label></li>
                         <li><label><input class="inputtest" type="radio" name="q18" value="b" style="display:inline"> Accumulation atau Distribution Line</label></li>
                         <li><label><input class="inputtest" type="radio" name="q18" value="c" style="display:inline"> Average Directional Index (ADX)</label></li>
                         <li><label><input class="inputtest" type="radio" name="q18" value="d" style="display:inline"> Aroon Indicator</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">19.	OBV biasanya digunakan untuk mengkonfirmasi pergerakan harga saham pada saat itu. Jadi, saat OBV naik, maka volume pembelian melebihi volume penjualan yang dapat menyebabkan mendorong harga saham menjadi lebih tinggi. Begitu pula sebaliknya, jika OBV turun, berarti penjualan melebihi volume pembelian dan berdampak pada penurunan harga.</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="radio" name="q19" value="a" style="display:inline"> Benar</label></li>
                         <li><label><input class="inputtest" type="radio" name="q19" value="b" style="display:inline"> Salah</label></li>
                     </ul>
                 </div>
             </div>

             <div class="cardtest quizlib-question">
                 <div class="quizlib-question-title">20.	Saat Aroon-down berada di angka nol dan bersimpangan dengan Aroon-up, berarti terdapat kemungkinan perubahan tren. Apabila garis Aroon-up memotong di atas garis Aroon-down atau sebaliknya, berarti hal tersebut menunjukkan titik masuk dan kecenderungan tren akan naik.</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input class="inputtest" type="radio" name="q20" value="a" style="display:inline"> Benar</label></li>
                         <li><label><input class="inputtest" type="radio" name="q20" value="b" style="display:inline"> Salah</label></li>
                     </ul>
                 </div>
             </div>
             <!-- Answer buttontesttest. Here, we pass the ID of the quiz element (the parent of this buttontesttest) to the showResults function.  -->
             <button class="buttontest" onclick="showResults(this.parentNode.id);">Kirim Jawaban</button>


             <button class="buttontest modal-button" data-toggle="modal" data-target="#myModal">Open Modal</button>
             <div class="modal fade" id="myModal" role="dialog">
      				 <div class="modal-dialog">
      					 <div class="cardmodal">
      							<div class="cardmodal-img">
                      <img class ="img-fluid" src='soalsaham/modal.png'>
      							</div>
      							<div class="cardmodal-title">
      								<p>Nilai Anda : 100</p>
      							</div>
      							<div class="cardmodal-text">
      								<p>Selamat! <br>Anda berhasil mendaftar sebagai Analis!</p>
      							</div>
      							<button class="btnmodal">Masuk</button>
      						</div>
      				 </div>
      			 </div>

         </div>

       </div>
     </body>

 </html>

   `
    return(
      <>
        <Header/>
        <InnerHTML html={html} />
        <Footer/>
      </>
    )
  }
}

export default Soal;
