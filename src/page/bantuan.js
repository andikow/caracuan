import React from 'react';
import { withRouter } from 'react-router-dom'
import Header from './../component/header.js'
import Footer from './../component/footer.js';

class Bantuan extends React.Component{

  render(){

    return(
    <>
    <Header/>
    <div class="row">
      <div class="col-lg-2">

      </div>
      <div class="col-lg-8">
        <div class="justify-content-center">
          <h2 className="text-primary font-weight-bold py-4">Pertanyaan Umum</h2>
          <div class="bg-white px-2 py-2">
            <h5 className="text-primary">Kemana masuknya uang dukungan?</h5>
          </div>
          <div class="bg-light px-2 py-2 mb-4">
            <h6 className="text-primary">Dana dukungan akan masuk ke [Saldo] di akun Cara Cuan milik kamu, yang bisa kamu cairkan kapan pun ke rekening bank pilihan kamu. </h6>
          </div>

          <div class="bg-white px-2 py-2">
            <h5 className="text-primary">Bagaimana caranya mencairkan dana?</h5>
          </div>
          <div class="bg-light px-2 py-2 mb-4">
            <h6 className="text-primary">Sebelum melakukan pencairan, kamu perlu [Menambah Rekening Bank] untuk diverifikasi. Selanjutnya, kamu dapat melakukan [Permintaan Pencairan] dengan memasukan nominal dana yang ingin dicairkan dan menunggu proses pencairan selesai.  </h6>
          </div>

          <div class="bg-white px-2 py-2">
            <h5 className="text-primary">Berapa lama proses pencairan?</h5>
          </div>
          <div class="bg-light px-2 py-2 mb-4">
            <h6 className="text-primary">Maksimal 5 hari kerja, namun biasanya dana sudah sampai sekitar 2-3 hari jika tidak terjadi kendala dari sisi bank. </h6>
          </div>

          <div class="bg-white px-2 py-2">
            <h5 className="text-primary">Berapa banyak penghasilan yang bisa didapat dari Cara Cuan?</h5>
          </div>
          <div class="bg-light px-2 py-2 mb-4">
            <h6 className="text-primary">Kamu bisa mulai dapat dukungan di Cara Cuan, tidak peduli berapapun banyaknya jumlah followers kamu. Tidak sedikit Analis yang dapat gaji pertama dalam hidup mereka di Cara Cuan. Bahkan, beberapa Analis bisa dapet puluhan hingga ratusan juta rupiah dalam satu bulan!  </h6>
          </div>

          <div class="bg-white px-2 py-2">
            <h5 className="text-primary">Bagaimana cara mendaftar sebagai Analis?</h5>
          </div>
          <div class="bg-light px-2 py-2 mb-4">
            <h6 className="text-primary"> 1. Login ke akun Cara Cuan<br /> 2. Di dashboard member, klik bagian "Masuk Sebagai Analis". <br /> 3. Mengisi uji kompetensi Analis.<br /> 4. Setelah mengirim jawaban uji kompetensi, nilai akan ditampilkan. Sebagai syarat mendaftar sebagai Analis, pengguna wajib mendapatkan nilai minimal 70. </h6>
          </div>

          <div class="bg-white px-2 py-2">
            <h5 className="text-primary">Mau tanya-tanya lebih lanjut, tanya ke mana ya?</h5>
          </div>
          <div class="bg-light px-2 py-2 mb-4">
            <h6 className="text-primary">Kamu bisa hubungi kami lewat email, ke alamat [help@support.caracuan.id] </h6>
          </div>

        </div>
      </div>
      <div class="col-lg-2">

      </div>
    </div>



    <Footer/>
    </>
    )
  }
}

export default withRouter(Bantuan);
