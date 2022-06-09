import React, { Component } from "react";

import Soal9 from './../public/assets/img/soal no 9.png';
import Soal10 from './../public/assets/img/soal no 10.png';
import Soal11 from './../public/assets/img/soal no 11.png';
import Soal12 from './../public/assets/img/soal no 12.png';
import Soal13 from './../public/assets/img/soal no 13.jpg';
import Soalsaham from './../public/assets/img/soal saham.png';

import Header from './../component/header.js';
import Footer from './../component/footer.js';

class Soal extends Component {
  render() {
    return (
    <>
    <Header/>
    <div class="row">
      <div class="col-lg-2">
        <img src={Soalsaham} alt="Soal" />
      </div>
      <div class="col-lg-8 bg-light">
        <div class="d-flex bg-light justify-content-center">
          <h1 class="text-primary font-weight-bold ">UJI KOMPETENSI ANALIS</h1>
        </div>
        {/*Soal 1*/}
        <div class=" my-2 bg-white">
          <div class="form-check px-4">
            <p>1.	Jenis saham berdasarkan cara pengalihannya:</p>
            <input class="form-check-input" type="checkbox" id="soal1cek1"/>
            <label class="form-check-label" for="soal1cek1">Bearer Stocks </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox" id="soal1cek2"/>
            <label class="form-check-label" for="soal1cek2">Registered Stocks </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Common Stocks </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Preffered Stocks </label>
          </div>
        </div>
        {/*Soal 2*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <p>2.	Jenis saham berdasarkan kepemilikan:</p>
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckDefault">Bearer Stocks </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Registered Stocks </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Common Stocks </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Preffered Stocks </label>
          </div>
        </div>
        {/*Soal 3*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <p>3. Jenis saham berdasarkan kinerja perdagangan:</p>
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckDefault">Blue Chip Stocks </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Income Stocks </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Growth Stocks </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Speculative Stocks </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Counter Cyclical Stocks </label>
          </div>
        </div>
        {/*Soal 4*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <p>4.	Bursa efek dibuka pada pagi hari dan akan ditutup pada sore hari pukul 17.00 WIB, maka harga yang tertera saat pukul 17.00 WIB adalah</p>
            <input class="d-inline form-check-input" type="radio" name="soal4" id="soal4opsi1" value="1"/>
            <label class="form-check-label" for="soal4opsi1">Closing Price </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio" name="soal4" id="soal4opsi2" value="0"/>
            <label class="form-check-label" for="soal4opsi2">Market Price </label>
          </div>
        </div>
        {/*Soal 5*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <p>5.	Apabila perusahaan mengalami kebangkrutan maka pemilik saham hanya akan memperoleh prioritas paling akhir dalam hal pembagian keuntungan perusahaan. Tetapi jumlah kerugian maksimum yang ditanggungnya sesuai besaran dana yang diinvestasikan merupkan jenis saham</p>
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Preferred Stocks </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Common Stocks </label>
          </div>
        </div>
        {/*Soal 6*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <p>6.	Saham unggulan yang selalu membayar dividen atau laba lebih besar dari rata-rata dividen yang dibayarkan periode sebelumnya merupakan</p>
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Blue Chip Stocks </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Income Stocks </label>
          </div>
        </div>
        {/*Soal 7*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <p>7.	Bearer Stocks adalah kepemilikan saham terbukti pada nama yang tertulis di surat berharga. Sehingga cara pengalihannya harus melalui prosedur hukum untuk melakukan balik nama saham.</p>
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Benar </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Salah </label>
          </div>
        </div>
        {/*Soal 8*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <p>8.	Growth Stocks adalah saham dengan pertumbuhan pemasukan perusahaan selalu tinggi, walaupun perusahaan tersebut tidak selalu dari perusahaan petinggi di industri tersebut.</p>
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Benar </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Salah </label>
          </div>
        </div>
        {/*Soal 9*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <img src={Soal9} alt="Soal" height="200px" />
            <p>9. Candlestick ini mengindikasikan:</p>
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Trader penjual memegang kendali penuh </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Trader pembeli memegang kendali penuh </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Trader pembeli maupun trader penjual tidak dapat menggerakan harga terlalu jauh dan harga dekat pada posisi pembukaan </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Trader pembeli melakukan perlawanan besar </label>
          </div>
        </div>
        {/*Soal 10*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <img src={Soal10} alt="Soal" height="200px" />
            <p>10. Candlestick ini mengindikasikan:</p>
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Trader penjual memegang kendali penuh </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Trader pembeli memegang kendali penuh </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Trader pembeli maupun trader penjual tidak dapat menggerakan harga terlalu jauh dan harga dekat pada posisi pembukaan </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Trader pembeli melakukan perlawanan besar </label>
          </div>
        </div>
        {/*Soal 11*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <img src={Soal11} alt="Soal" height="200px" />
            <p>11. Pernyataan berikut yang benar adalah</p>
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Harga dibuka di titik 1, kemudian para trader pembeli (buyer) mengangkat harga tinggi dengan melakukan aksi beli yang masif hingga ke titik 2. </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Di titik 2 trader pembeli mulai melakukan perlawanan besar dengan mengangkat harga sampai ke titik 3. </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Di titik 3 trader penjual menekan harga sedikit hingga ke titik 4. </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Dari titik 3 trader pembeli melakukan sedikit perlawanan dan mengangkat harga ke titik 4. </label>
          </div>
        </div>
        {/*Soal 12*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <img src={Soal12} alt="Soal" height="200px" />
            <p>12. Berikut adalah pola candlestick :</p>
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Two Black Gapping </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Three Line Strike</label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Abandoned Baby </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Evening Stars</label>
          </div>
        </div>
        {/*Soal 13*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <img src={Soal13} alt="Soal" height="200px" />
            <p>13. Berikut adalah pola candlestick :</p>
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Two Black Gapping </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Three Line Strike</label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Abandoned Baby </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Evening Stars</label>
          </div>
        </div>
        {/*Soal 14*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <p>14. Pola yang muncul ketika ada bullish pada titik terendah dari turunnya ren, sesudah serangkaian candle hitam menghasilkan titik terendah paling rendah adalah</p>
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Two Black Gapping </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Three Line Strike</label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Abandoned Baby </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Evening Stars</label>
          </div>
        </div>
        {/*Soal 15*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <p>15. Berikut adalah saham yang tergabung dalam IDX30 pada periode periode Februari-Juli 2022:</p>
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">BMRI </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">CPIN</label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">SMGR </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">TINS</label>
          </div>
        </div>
        {/*Soal 16*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <p>16. Berikut adalah saham yang bergerak dalam sektor transportasi dan logistik:</p>
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">GIAA </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">BLTA</label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">ASSA </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">AKRA</label>
          </div>
        </div>
        {/*Soal 17*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <p>17. Berikut pernyataan yang benar mengenai sifat Moving Average :</p>
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Moving Average adalah indikator teknikal yang menghaluskan gerakan harga saham yang berfluktuasi. </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Moving Average merupakan indikator trend–following, indikator ini akan mengidentifikasi tren harga sesuai periodenya.</label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Indikator Moving Average didasarkan pada informasi harga sebelumnya maka sinyal yang diberikan lagging (terlambat). </label>
          </div>
          <div class="form-check  px-4">
            <input class="form-check-input" type="checkbox"  />
            <label class="form-check-label" for="flexCheckChecked">Moving Average adalah indikator dalam analisa teknikal saham yang digunakan investor untuk menentukan kecenderungan arah dari sebuah tren.</label>
          </div>
        </div>
        {/*Soal 18*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <p>18. Salah satu indikator analisis teknikal saham yang digunakan untuk menunjukkan kekuatan tren serta keakuratan titik masuk ataupun mengidentifikasi tren baru yang akan dimulai adalah</p>
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">On-Balance Volume </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Accumulation atau Distribution Line</label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Average Directional Index (ADX) </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Aroon Indicator</label>
          </div>
        </div>
        {/*Soal 19*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <p>19. OBV biasanya digunakan untuk mengkonfirmasi pergerakan harga saham pada saat itu. Jadi, saat OBV naik, maka volume pembelian melebihi volume penjualan yang dapat menyebabkan mendorong harga saham menjadi lebih tinggi. Begitu pula sebaliknya, jika OBV turun, berarti penjualan melebihi volume pembelian dan berdampak pada penurunan harga.</p>
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Benar </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Salah</label>
          </div>
        </div>
        {/*Soal 20*/}
        <div class=" my-3 bg-white">
          <div class="form-check pt-0 px-4">
            <p>20. Saat Aroon-down berada di angka nol dan bersimpangan dengan Aroon-up, berarti terdapat kemungkinan perubahan tren. Apabila garis Aroon-up memotong di atas garis Aroon-down atau sebaliknya, berarti hal tersebut menunjukkan titik masuk dan kecenderungan tren akan naik.</p>
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Benar </label>
          </div>
          <div class="form-check  px-4">
            <input class="d-inline form-check-input" type="radio"  />
            <label class="form-check-label" for="flexRadioDefault1">Salah</label>
          </div>
        </div>

        <button className="btn btn-primary text-center mx-auto text-white font-weight-bold mt-4" href="#" style={{width:"300px"}}>Kirim</button>

      </div>
    </div>



    <Footer/>
    </>
    );
  }
}

export default Soal;
