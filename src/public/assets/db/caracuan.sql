-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2022 at 09:18 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `caracuan`
--

-- --------------------------------------------------------

--
-- Table structure for table `analysis`
--

CREATE TABLE `analysis` (
  `analysisID` int(11) NOT NULL,
  `memberID` int(11) NOT NULL,
  `date` int(11) NOT NULL,
  `description` varchar(250) NOT NULL,
  `stockCode` varchar(4) NOT NULL,
  `targetPrice` int(11) NOT NULL,
  `stopPrice` int(11) NOT NULL,
  `agreed` int(11) NOT NULL,
  `disagreed` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `creator`
--

CREATE TABLE `creator` (
  `memberID` int(11) NOT NULL,
  `username` varchar(60) NOT NULL,
  `shortbio` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `following`
--

CREATE TABLE `following` (
  `memberID` int(11) NOT NULL,
  `followingID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `following`
--

INSERT INTO `following` (`memberID`, `followingID`) VALUES
(1, 1),
(1, 33),
(52, 41),
(52, 47),
(52, 49),
(52, 51);

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `memberID` int(11) NOT NULL,
  `Name` varchar(60) NOT NULL,
  `BirthDate` date NOT NULL,
  `Phone` varchar(15) NOT NULL,
  `Email` varchar(60) NOT NULL,
  `Password` varchar(60) NOT NULL,
  `refresh_token` text DEFAULT NULL,
  `isCreator` tinyint(1) NOT NULL DEFAULT 0,
  `profilephoto` varchar(50) NOT NULL,
  `coverphoto` varchar(59) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`memberID`, `Name`, `BirthDate`, `Phone`, `Email`, `Password`, `refresh_token`, `isCreator`, `profilephoto`, `coverphoto`) VALUES
(41, 'Andikatama', '2001-01-01', '087868407686', 'andykatama@gmail.comm', '$2b$10$61FnpDEi1I9HTinujKnaV.lJAyknvCSjd19xciJ3OeBLjBZJhevuS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxLCJuYW1lIjoiQW5kaWthdGFtYSIsImVtYWlsIjoiYW5keWthdGFtYUBnbWFpbC5jb21tIiwiaWF0IjoxNjQ2OTI0OTMzLCJleHAiOjE2NDcwMTEzMzN9.W1B0eCfZuxZnm0AA0hRNqtR9BwlSudJqHyzTRSDluug', 0, '1646925168301.png', '1646925168277.png'),
(47, 'Kapten Saham', '2001-01-01', '087868407686', 'andykatama@gmail.coma', '$2b$10$gNKotvu7xymVm5XEQZ21EeKQs3Nfmv6Dx7svd3omy22.lM/7fofvC', '${refreshToken}', 0, '1646927882914.png', '1646927882809.png'),
(48, 'Vandarina', '1999-01-12', '085621112472', 'vandarinaa@gmail.com', '$2b$10$DNIRnIRLwR3.dgR3aZkv6esG.g.9mVy3JToPbc8uCDMzvZPGWRmz.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ4LCJuYW1lIjoiVmFuZGFyaW5hIiwiZW1haWwiOiJ2YW5kYXJpbmFhQGdtYWlsLmNvbSIsImlhdCI6MTY0NTY5NzI5NiwiZXhwIjoxNjQ1NzgzNjk2fQ.yV2Iq7Op-x_fnws65IPnfg3R1LB35sUvHkzL8nXzEOI', 0, '', ''),
(49, 'Lylia', '2000-12-12', '085678789869', 'lylia88@gmail.com', '$2b$10$kAGyBBZB8Qx/p0O1Fnew3uJC4mk/KdzhzNjhcOyXCMyJ0Ora6Z/Fa', '', 0, '', ''),
(50, 'Balmond', '1945-08-17', '081266577899', 'balmond@gmail.com', '$2b$10$c92lts7Vtor8zZECGsqIJu.sCt8PKw4HXICqrM8H1ahTB3eKPywPa', '', 0, '', ''),
(51, 'Gatot', '1977-08-08', '082154468791', 'gatotkaca@gmail.com', '$2b$10$6M9e/FTvq8RX1glSri01FerOwOLuvNFdPqvgGUaDovzhkJh/4Ddsi', '', 0, '', ''),
(52, 'Vandarina', '1999-02-24', '085624742052', 'vandarina@gmail.com', '$2b$10$C6E5sB665YnTtPPw8P0n0.sammWBZGORLR6nuXtMrJLI59DzYgSzq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUyLCJuYW1lIjoiVmFuZGFyaW5hIiwiZW1haWwiOiJ2YW5kYXJpbmFAZ21haWwuY29tIiwiaWF0IjoxNjQ2OTIxMzIzLCJleHAiOjE2NDcwMDc3MjN9.GHPBE7QdKgxG2FGP0XaqL8HWU5_dvFt78QDKxVa60Tc', 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `postsdetail`
--

CREATE TABLE `postsdetail` (
  `postID` int(11) NOT NULL,
  `judul` text NOT NULL,
  `deskripsi` longtext NOT NULL,
  `linkvideo` text NOT NULL,
  `jenispostingan` varchar(8) NOT NULL,
  `hargapostingan` int(11) NOT NULL,
  `memberID` int(11) NOT NULL,
  `topikID` int(11) NOT NULL,
  `bagianID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `postsdetail`
--

INSERT INTO `postsdetail` (`postID`, `judul`, `deskripsi`, `linkvideo`, `jenispostingan`, `hargapostingan`, `memberID`, `topikID`, `bagianID`) VALUES
(11, 'Belajar Saham untuk Pemula', '<p>Menurut Bursa Efek Indonesia (BEI), saham adalah tanda penyertaan modal dalam suatu perusahaan atau perseroan terbatas. Orang yang menanamkan modal di sebuah perusahaan disebut pemegang saham dan memiliki klaim atas pendapatan perusahaan, aset perusahaan, dan berhak mengikuti Rapat Umum Pemegang Saham (RUPS).&nbsp;</p>\n<p>Dari hal di atas, saham merupakan bukti kepemilikan seseorang atas sebuah perusahaan/badan usaha. Kalau punya saham, kamu menjadi<br>bagian dari pemilik sebuah perusahaan. Itu sebabnya saham tergolong suratberharga karena menjadi bukti sah kepemilikan seseorang atas sebuah perusahaan. Semakin besar saham yang dimiliki, maka semakin besar kekuasaan seseorang di perusahaan itu.&nbsp;</p>\n<p>Untuk pemula yang masih belajar saham tentu harus mengetahui berbagai jenis saham. Saham memiliki berbagai jenis dilihat dari segi kemampuan dalam hak tagih atau klaim, cara peralihannya, dan kinerja perdagangan.&nbsp;</p>\n<p>Jenis Saham dari Segi Kemampuan dalam Hak Tagih atau Klaim&nbsp;</p>\n<p>1. Saham biasa&nbsp;</p>\n<p>Saham biasa merupakan surat berharga yang berguna sebagai bukti kepemilikan suatu perusahaan. Pemilik saham akan menerima sebagian<br>pendapatan (dividen) dari perusahaan dan bersedia menanggung risiko kerugian yang diderita perusahaan. Pemilik modal yang memiliki saham perusahaan berhak ambil bagian terhadap pengelolaan perusahaan. Besarnya porsi hak pengelolaan tergantung dari jumlah saham yang dimiliki. Semakin besar saham yang dimiliki semak besar wewenang terhadap pengelolaan perusahaan itu. Saat perusahaan untung, pihak yang memiliki persentase saham besar akan menerima porsi keuntungan yang besar. Sebaliknya, mereka harus bersiap menderita kerugian bila perusahaan itu gagal memperoleh pendapatan.&nbsp;</p>\n<p>2. Saham preferen&nbsp;</p>\n<p>Saham preferen merupakan surat berharga yang merupakan gabungan antara obligasi dan saham biasa. Banyak investor yang menyukai jenis<br>saham ini karena bisa menghasilkan pendapatan tetap (seperti bunga obligasi). Karakteristik saham preferen sama seperti saham biasa yang bisa mewakili kepemilikan ekuitas dan diterbitkan tanpa tanggal jatuh tempo yang tertulis di atas lembaran saham tersebut, dan membayar dividen.&nbsp;</p>\n<p>Jenis Saham dari Segi Cara Peralihannya&nbsp;</p>\n<p>1. Saham Atas Unjuk (Bearer Stocks)&nbsp;</p>\n<p>Pada saham jenis ini tidak tertulis nama pemiliknya secara fisik. Tujuannya agar mudah dipindahtangankan dari satu investor satu ke<br>investor lainnya. Pasalnya, banyak investor yang memiliki saham ini dengan tujuan untuk diperjualbelikan. Jadi, investor tidak perlu khawatir karena secara hukum siapapun yang memegang saham itu, maka dialah diakui sebagai pemiliknya dan berhak untuk ikut hadir dalam Rapat Umum Pemegang Saham (RUPS).&nbsp;</p>\n<p>2. Saham Atas Nama (Registered Stocks)&nbsp;</p>\n<p>Saham ini merupakan kebalikan dari saham unjuk karena memiliki nama pemegang saham dan tertulis jelas namanya di dalam kertas saham. Cara peralihannya juga harus melalui prosedur tertentu.&nbsp;</p>\n<p>Jenis Saham dari Segi Kinerja Perdagangan&nbsp;</p>\n<p>1. Blue Chip Stocks&nbsp;</p>\n<p>Blue Chip Stocks banyak diburu investor karena berasal dari perusahaan besar, pemimpin perusahaan bereputasi tinggi, dan memiliki<br>pendapatan yang stabil dan konsisten dalam membayar dividen. Contohnya PT Bank Mandiri Tbk. (BMRI), PT Indofood Sukses Makmur Tbk. (INDF), PT Astra International,Tbk. (ASII), dan PT Unilever, Tbk. (UNVR).&nbsp;</p>\n<p>2. Income Stocks&nbsp;</p>\n<p>Income Stocks memiliki keunggulan dalam kemampuan membayar dividen lebih tinggi dari rata-rata dividen yang dibayarkan pada tahun<br>sebelumnya. Kemampuan menciptakan pendapatan yang lebih tinggi dan secara teratur membagikan dividen tunai menjadi daya tarik tersendiri bagi investor.&nbsp;</p>\n<p>3. Growth Stocks&nbsp;</p>\n<p>Growth Stocks hampir mirip dengan blue chip karena memiliki pertumbuhan pendapatan yang tinggi. Selain itu saham ini berada di jajaran<br>depan dalam industri yang digelutinya dan dikenal sebagai perusahaan yang mempunyai reputasi tinggi.&nbsp;</p>\n<p>4. Lesser-Known&nbsp;</p>\n<p>Saham ini berasal dari perusahaan yang tetap memiliki ciri growth stock, walau bukan berada dalam garde depan dalam sebuah industri. Saham<br>ini biasanya berasal dari perusahaan daerah dan kurang populer di kalangan emiten.&nbsp;</p>\n<p>5. Speculative Stocks&nbsp;</p>\n<p>Investor yang menyukai investasi saham dengan resiko tinggi tentu bisa mencoba saham jenis ini. Saham ini berpotensi menghasilkan laba<br>tinggi di masa depan, tapi tidak bisa secara konsisten memperoleh penghasilan dari tahun ke tahun.&nbsp;</p>\n<p>6. Counter Cyclical Stocks&nbsp;</p>\n<p>Jenis saham terakhir, ada Counter Cyclical Stocks yang paling stabil saat kondisi ekonomi bergejolak karena tidak terpengaruh oleh<br>kondisi ekonomi makro maupun situasi bisnis secara umum. Ilustrasinya bila terjadi resesi ekonomi, maka harga saham ini tetap tinggi dan emitennya mampu memberikan dividen yang tinggi. Hal ini mungkin terjadi karena kemampuan emiten dalam memperoleh penghasilan yang tinggi pada masa resesi.&nbsp;</p>\n<p>Berikut cara belajar saham untuk pemula secara mudah.&nbsp;</p>\n<p>1. Mulai dari nominal kecil&nbsp;</p>\n<p>Walau trading saham merupakan salah satu investasi berisiko tinggi, kamu tetap bisa menggunakan modal kecil untuk menghindari kerugian besar. Kamu bisa mencoba apakah investasi melalui saham cocok untuk kamu atau tidak. Bila merasa cocok dan bisa mendapatkan keuntungan di tahap awal, kamu bisa melanjutkan dengan membeli lebih banyak saham. Tapi jika mengalami kerugian, tak ada salahnya mencoba terlebih dengan modal kecil.&nbsp;</p>\n<p>2. Pengetahuan adalah modal utama&nbsp;</p>\n<p>Untuk bisa mendapatkan keuntungan dalam investasi saham dibutuhkan kemampuan membaca simbol chart dan membaca tren. akan lebih bagus jika kamu bisa mengetahui nilai intrinsik atau analisis fundamental perusahaan.&nbsp;</p>\n<p>3. Memilih perusahaan sekuritas&nbsp;</p>\n<p>Setelah memiliki uang, kamu bisa mempelajari analisis buat trading. Kamu bisa cari perusahaan sekuritas tempat menanamkan uang. Memilih<br>broker saham kadang tricky supaya kamu gak merasa dirugikan. Terlebih jika kamu termasuk orang yang sering melakukan transaksi.&nbsp;</p>\n<p>4. Menghindari saham gorengan&nbsp;</p>\n<p>Saham gorengan kurang cocok dimainkan pleh para pemula karena sangat susah dibaca dari sisi analisis teknikal, apalagi fundamental. Pasalnya pergerakannya tak bisa diprediksi dan sentimen serta pompomers menjadi faktor paling dominan dalam menggerakkan harga saham ini.  Selain itu, gerakan yang amat random tak cocok sebagai media pembelajaran bagi trader pemula. Akan lebih mudah jika kamu belajar dari saham yang gerakannya cenderung normal, blue chip, atau second liner.&nbsp;</p>\n<p>5. Ketimpangan order jual dan beli&nbsp;</p>\n<p>Sebelum membeli saham, kamu harus memperhatikan saham-saham yang ketimpangannya sangat tinggi, yang mana order beli jauh lebih banyak daripada yang jual. Selanjutnya kamu bisa mulai belajar di titik kritis yakni saat awal dan akhir perdagangan, serta menjelang istirahat (jam 11-12).  Mengapa harus memperhatikan order beli yang jauh lebih banyak? Karena itu merupakan tanda indikasi kenaikan kuat saham alias ada “sesuatu” yang membuat saham itu menarik.&nbsp;</p>\n<p>6. Pemula jangan gunakan semua modal ke satu transaksi&nbsp;</p>\n<p>Pemula tidak disarankan menggunakan seluruh modal hanya untuk satu transaksi. Kamu bisa membeli beberapa saham potensial dengan nilai<br>yang sedikit dibanding membeli satu saham dengan seluruh modal. Hal ini untuk menghindari kerugian di satu titik sehingga kamu bisa memberdayakan modal lainnya pada saham yang berbeda&nbsp;&nbsp;</p>\n', 'DBgDj3tEDNg', 'Gratis', 0, 41, 18, 9),
(12, 'Cara Trading di Saham Sideways', '<p>Musim window dressing menjelang akhir tahun menjadi moment istimewa bagi pelaku pasar saham melakukan trading. Trading adalah jual-beli saham untuk mendapatkan keuntungan atau cuan saham dalam waktu singkat.&nbsp;</p>\n<p>Window dressing menjadi menarik untuk trading karena ada kecenderungan saham-saham menggeliat naik menjelang akhir tahun karena langkah Manajer Investasi yang mempercantik diri dengan meramu portofolio baru biar keliatan kece dan menarik di mata investor.&nbsp;</p>\n<p>MI membuang saham-saham yang merugi dan memborong saham-saham yang sedang memberikan keuntungan. Hal ini dilakukan agar portofolio akhir tahunnya terlihat elok. Hal lain yang dilakukan MI yakni mempercantik laporan keuangannya agar makin memikat investor. Pasar saham pun menjadi semarak.&nbsp;</p>\n<p>Namun tengah kondisi apa pun tetap ada saham yang kondisinya sedang sidesways. Sideways adalah kondisi saham yang berada dalam kegalauan karena pergerakannya tanpa arah atau choppy.&nbsp;</p>\n<p>Sideways adalah kondisi ketika harga saham yang diperdagangkan di pasar bergerak relatif horizontal alias datar-satar saja akibat penawaran dan permintaan yang sama-sama kuat dalam periode waktu tertentu.&nbsp;</p>\n<p>Kondisi ini biasanya terjadi selama tahap konsolidasi, sebelum harga melanjutkan tren sebelumnya atau justru berbalik ke tren yang baru. Nah, dihadapkan pada saham-saham yang sedang sideways, apa yang sebaiknya dilakukan investor atau trader? Berikut ini 3 tip menghadapi saham-saham yang dalam kondisi sideways:&nbsp;</p>\n<p>1. Analisis Mendalam&nbsp;</p>\n<p>Langkah pertama yang wajib dilakukan yakni melakukan analisis secara komprehensif saham sideways sebelum mentradingkannya. Analisis dilakukan untuk melihat time frame pergerakan harganya apakah valuasinya benar-benar sudah murah atau belum, lalu perhatikan trend sektornya dan cermati berbagai sentimen positif yang berpotensi menggerakkan saham tersebut sehingga bisa buy dan sentimen negatif yang berpotensi menumbangkan saham sehingga bisa sell.&nbsp;</p>\n<p>2. Cermati Arah Market&nbsp;</p>\n<p>Pergerakan market wajib dipantau, khususnya dengan berpatokan pada IHSG. Jika market sedang lesu sehingga IHSG cenderung flat karena tidak ada sentimen positif maka saham ada kemungkinan sulit untuk bangkit, tetapi jika IHSG sedang bullist maka ada peluang ikut terkerek apalagi ada sentimen positifnya. Toh, investasi saham saat ini sudah sangat mudah berbasis aplikasi, semisal dengan aplikasi IPOT besutan Indo Premier Sekuritas. Buy atau sell bisa dilakukan dengan mudah dan cepat dengan semartphone di genggaman tangan.&nbsp;</p>\n<p>3. Analisis dengan Price Action&nbsp;</p>\n<p>Analisis price action merujuk pada analisa teknikal berdasarkan pergerakan harga di masa lampau. Dalam hal ini trader bisa melihat pola tertentu pergerakan harga di masa lampau. Kendati ada pola tertentu, tetap harus dilakukan analisis fundamental dan teknikal, jadi bukan sekadar percaya dengan pola yang ditemukan. Jika hanya percaya begitu saja dengan pola yang ditemukan dan meyakini itu maka jatuh-jatuhnya menjadi spekulasi. So, analisis fundamental dan teknikal wajib dilakukan.&nbsp;&nbsp;</p>\n', 'b7c0IEWQfuo', 'Berbayar', 20000, 41, 16, 7),
(13, 'Rumus Average Down Saham', '<p>Average down adalah strategi averaging yang diberlakukan dengan membeli sebuah saham secara bertahap ketika harga saham tersebut turun.<br>Sebaliknya, average up adalah strategi pembelian saham ketika harga saham tersebut perlahan-lahan naik.&nbsp;&nbsp;</p>\r\n<p>Seperti yang telah tertulis di atas, secara umum strategi ini diterapkan untuk menghasilkan keuntungan maksimal dengan biaya minimal.<br>Selain itu, strategi ini diberlakukan untuk memudahkan investor dalam menghitung keuntungan.&nbsp;</p>\r\n<p>Selain pada saham, Anda juga bisa menerapkan strategi ini pada instrumen lain yang tentunya pergerakan harganya fluktuatif dan bisa Anda amati seperti, reksa dana, ETF dan lain sebagainya.&nbsp;</p>\r\n<p>Rumus average down saham adalah:&nbsp;</p>\r\n<p>Average down = ((harga1 x lot1)+(harga2 x lot2)+ (harga3 x lot3)+…. (hargaN x lot N)) : Total lot Dimana nilai harga1 lebih tinggi daripada harga2 dan seterusnya.&nbsp;&nbsp;</p>', 'O44OrMitps0', 'Berbayar', 20000, 41, 19, 10),
(14, 'Cara Menerapkan Strategi Average Down', '<p>Strategi average down tidak bisa diterapkan sembarangan. Untuk menerapkan strategi ini, Anda harus melakukan empat hal yaitu:&nbsp;</p>\n<p>1. Mengamati pergerakan harga saham selama beberapa waktu&nbsp;</p>\n<p>Tujuannya adalah supaya Anda memiliki gambaran umum kira-kira saham yang Anda incar bisa naik atau turun berapa persen. Dengan<br>melakukan hal ini, Anda bisa menetapkan kira-kira Anda akan membeli sebuah saham ketika harganya turun berapa persen dan akan tahu apakah harga saham tersebut berpotensi untuk naik kembali atau tidak dan kalaupun naik kira-kira sampai berapa. Tahap ini penting untuk dilakukan agar penerapan strategi ini bisa tepat sesuai keinginan Anda.&nbsp;&nbsp;</p>\n<p>2. Menerapkan strategi average down ketika harga tidak jatuh terlalu banyak&nbsp;</p>\n<p>Tujuannya adalah agar potensi keuntungan yang bisa dimaksimalkan semakin tinggi. Sebaliknya, jangan menerapkan strategi ini dengan<br>membeli saham yang selisih penurunan harganya rendah sebab itu artinya potensi keuntungan yang bisa Anda peroleh akan mengecil.&nbsp;&nbsp;</p>\n<p>3. Memastikan bahwa harga saham tersebut bisa kembali naik&nbsp;</p>\n<p>Tentu Anda akan merugi jika Anda terus membeli saham yang harganya terus menurun menggunakan sistem average down. Sebab ini justru akan membuat investasi Anda merugi.&nbsp;&nbsp;</p>\n<p>4. Tentukan jumlah lot maksimum dan harga minimum&nbsp;</p>\n<p>Ini bertujuan untuk membatasi pembelian saham Anda. Memang, jika harganya terus turun Anda bisa membeli saham dalam jumlah yang lebih<br>banyak. Namun Anda perlu ingat bahwa penurunan harga saham ini bisa terjadi cukup lama, sehingga alih-alih membeli Anda harus tahu kapan harus berhenti membeli.&nbsp;&nbsp;</p>\n<p>Singkatnya, penerapan strategi average down dan average up harus disiapkan secara matang dan tidak bisa simultan. Agar penghitungan average down atau average up yang Anda lakukan bisa lebih akurat, Anda bisa menggunakan aplikasi kalkulator saham yang saat ini banyak tersedia di internet.&nbsp;&nbsp;</p>\n<p>Setelah melakukan strategi ini dengan tepat, Anda bisa menentukan harga jual saham tersebut dan menunggu sampai akhirnya harga saham<br>tersebut naik ke level yang Anda inginkan.&nbsp;&nbsp;</p>\n', 'O44OrMitps0', 'Berbayar', 20000, 41, 19, 11),
(15, 'Contoh Perhitungan Average Down', '<p>&nbsp;&lt;p&gt;Perusahaan X memiliki saham dengan harga per lembar<br>sebagai&lt;br&gt;berikut:&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Harga1 = 500&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Harga2 = 450&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Harga3 = 400&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;M, adalah seorang investor yang percaya bahwa<br>permintaan saham perusahaan X akan naik lagi sehingga dia membeli saham<br>perusahaan&lt;br&gt;tersebut meskipun saat ini harga saham itu sedang mengalami<br>penurunan. Untuk mengatasinya, M memberlakukan strategi average down sebagai<br>berikut:&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Lot1 = 100 lembar&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Lot2 = 200 lembar&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Lot 3 = 300 lembar&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Dengan demikian, nilai average down yang diterapkan<br>x adalah:&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Average down = ((500 x 100)+ (450 x 200) + (400 x<br>300)): 100+200+300&amp;nbsp;&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;= (50.000+90.000+12.000) : 600&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;= 152.000 : 600&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;= 253.&amp;nbsp;&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Jadi, rata-rata biaya yang harus dikeluarkan oleh M<br>untuk membeli 1 lembar saham perusahaan X adalah sebesar 253 rupiah. Tentu<br>harga ini jauh lebih rendah daripada harga<br>aslinya.&amp;nbsp;&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Katakanlah, perkiraan M tentang kenaikan harga<br>saham X benar. Beberapa saat kemudian harga saham perusahaan tersebut naik<br>menjadi 600&lt;br&gt;rupiah per lembar. Maka, keuntungan yang diperoleh X<br>adalah:&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Keuntungan X = (600 x 600) – (253 x 600) = 360.000-<br>152.000= 208.000&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Bayangkan jika M telah membeli saham perusahaan ini<br>ketika harga 500 rupiah per lembar. Maka, keuntungan yang didapatkan<br>hanyalah:&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Keuntungan X = (600 x 600) – (500 x 600) = 360.000<br>-300.000 = 60.000&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Dari contoh di atas dapat disimpulkan bahwa, untuk<br>melakukan strategi average down, Anda harus mengamati dan mencatat setiap<br>pergerakan&lt;br&gt;harga dari saham yang Anda ingin beli. Untungnya saat ini<br>ada Microsoft Excel dan aplikasi spreadsheet yang lain yang bisa Anda gunakan<br>untuk menghitungnilai ini secara otomatis.&amp;nbsp;&lt;/p&gt;&nbsp;&nbsp;</p>\n', 'O44OrMitps0', 'Berbayar', 20000, 41, 19, 10),
(16, 'Kelebihan, Resiko, dan Kontrol', '<p>&nbsp;Kelebihan Trading Saat Sideways Pada Saham Struktur Market Jelas&nbsp;</p>\n<p>Pasar sideways biasanya memiliki level support dan resistance yang jelas, yang menghilangkan kebingungan pada saat menetapkan<br>entri dan menutup transaksi.&nbsp;&nbsp;</p>\n<p>Misalnya, seorang trader dapat membeli saham ketika harganya menguji support. Setelah itu, mereka menentukan target keuntungan pada<br>resistance terdekat.&nbsp;&nbsp;</p>\n<p>Letak stop-loss yang kalian tentukan, harus dibawah level support terdekat dan dilebihkan sedikit kebawah.&nbsp;</p>\n<p>&nbsp;&nbsp;</p>\n<p>Risiko dan Kontrol&nbsp;</p>\n<p>Pedagang bisa mengambil keuntungan pada saat sideways. Namun, keuntungan tersebut relatif kecil ketika kondisi tersebut.&nbsp;</p>\n<p>Oleh karena itu, setiap perdagangan biasanya tidak dibuka selama lebih dari beberapa hari atau minggu.&nbsp;&nbsp;</p>\n<p>Hal tersebut bermanfaat untuk mengurangi kemungkinan posisi terkena dampak negatif oleh trend bearish atau peristiwa berita yang tidak<br>terduga, seperti ekonomi yang buruk.&nbsp;&nbsp;</p>\n<p>Trading di pasar sideways memungkinkan trader untuk menutup posisi terbuka sebelum pengumuman perusahaan, seperti laporan pendapatan, dan masuk kembali saat harga saham kembali ke support.&nbsp;&nbsp;</p>\n', 'BULZxdPT0DY', 'Berbayar', 20000, 41, 16, 7),
(17, 'Apa itu Dividen?', '<p>Secara umum, dividen adalah pembagian laba atau hasil yang dibayarkan kepada pemegang saham berdasarkan jumlah saham yang dimiliki.<br>Biasanya, dividen yang dibagikan bisa dalam bentuk uang tunai atau saham. Menurut kamus besar bahasa Indonesia (KBBI), arti dividen adalah bagian laba atau pendapatan perusahaan yang besarnya ditetapkan oleh direksi serta disahkan oleh rapat pemegang saham untuk dibagikan kepada para pemegang saham.&nbsp;</p>\n<p>Semantara itu, dikutip dari laman sikapiuangmu.ojk.go.id, arti dividen adalah bagian keuntungan perusahaan yang dibagikan kepada pemegang<br>saham. Jumlah dividen yang akan dibagikan diusulkan oleh dewan direksi perusahaan dan disetujui di dalam rapat umum pemegang saham (RUPS). Sederhananya, dividen adalah hak atau jatah dari perusahaan yang mendapatkan keuntungan kepada pihak yang menjadi investor atau pemegang saham. Biasanya, dividen dibagikan oleh perusahaan selama setahun sekali atau dua kali. Namun, ada pula perusahaan yang tidak membagikan dividen lantaran dana yang berasal dari pendapatan perusahaan tersebut diinvestasikan untuk modal usaha. Kondisi tersebut disebut dengan laba ditahan. Di sisi lain, perusahaan yang mencatatkan rugi juga biasanya tidak membagikan dividen.&nbsp;&nbsp;</p>\n', 'xsQXz_glug4', 'Berbayar', 10000, 41, 18, 12),
(18, 'Perbedaan Dividen dan Capital Gain', '<p>Ada dua bentuk keuntungan atau return (imbal hasil) yang akan didapatkan investor ketika berinvestasi saham. Keuntungan atau imbal hasil<br>dari saham dapat berupa dividen dan capital gain. Dividen adalah bagian laba atau keuntungan perusahaan yang dibagikan kepada pemegang saham. Pembagian dividen ini ditetapkan oleh direksi perusahaan dan disahkan oleh rapat pemegang saham. Ketika perusahaan mencatatkan keuntungan atau laba besar, biasanya akan membagikan dividen kepada para investor di perusahaan tersebut. Pembayaran dividen diatur berdasarkan ketentuan yang berlaku pada jenis saham yang ada. Pemegang saham yang mendapatkan dividen adalah mereka yang memiliki saham dari perusahaan yang bersangkutan selama periode pembagian dividen. Besaran nilai dividen atau jumlah dividen yang diterima oleh pemegang saham tergantung pada jumlah saham yang ia miliki.&nbsp;</p>\n<p>Berbeda dengan dividen, capital gain adalah keuntungan ketika investor menjual saham dengan harga yang lebih tinggi dari harga<br>belinya. Dengan kata lain, capital gain adalah selisih harga jual dikurangi harga beli. Contoh, seorang investor membeli saham perusahaan A seharga Rp 4.000 per lembar saham. Lalu dia menjual saham tersebut di harga Rp 4.500. Maka capital gain yang diperoleh investor tersebut adalah Rp 500 per lembar saham.&nbsp;</p>\n<p>Artinya, investor yang mendapatkan capital gain adalah dia bisa menikmati keuntungan dari kenaikan harga atau nilai dari saham yang<br>dijualnya.&nbsp;&nbsp;</p>\n', 'KogejuJk6lY', 'Berbayar', 10000, 41, 18, 12),
(19, 'Jenis-Jenis Dividen ', '<p>Ada lima jenis dividen dalam perlu Anda ketahui. Berikut rinciannya:&nbsp;&nbsp;</p>\n<p>1. Dividen tunai&nbsp;</p>\n<p>Dividen tunai adalah dividen yang dibagikan oleh sebuah perusahaan kepada para pemegang sahamnya dalam bentuk uang tunai<br>atau cash. Dividen jenis ini bisa dikatakan merupakan pembagian dividen yang paling sering dilakukan.&nbsp;&nbsp;</p>\n<p>2. Dividen saham&nbsp;</p>\n<p>Dividen saham adalah pembagian dividen yang dilakukan dalam bentuk saham dari sebuah perusahaan untuk para investornya.<br>Sesuai namanya, investor tidak mendapatkan uang tunai dari pembagian dividen. Namun akan mendapatkan peningkatan pada jumlah sahamnya.&nbsp;</p>\n<p>3. Dividen properti&nbsp;</p>\n<p>Dividen properti adalah dividen yang<br>didistribusikan menjadi dalam bentuk aset. Dividen ini menjadi jenis dividen<br>yang cukup jarang dilakukan, biasanya dikarenakan proses pembagiannya yang<br>relatif tidak mudah.&nbsp;&nbsp;</p>\n<p>4. Dividen likuidasi&nbsp;</p>\n<p>Dividen likuidasi adalah dividen yang dibagikan kepada para pemegang saham yang berupa sebagian laba dan sebagian pengembalian modal. Perusahaan yang akan memberikan dividen likuidasi umumnya merupakan perusahaan yang memiliki rencana untuk menghentikan perusahaanya atau perusahaan sedang mengalami kebangkrutan&nbsp;&nbsp;</p>\n<p>5. Dividen janji hutang&nbsp;</p>\n<p>Dividen jani hutang adalah dividen yang dibagikan dari perusahaan kepada pemegang saham berupa surat janji hutang.<br>Dalam jenis dividen ini, perusahaan memberikan janji kepada para investornya bahwa akan membayarkan dividen tersebut pada waktu yang sudah ditentukan.&nbsp;&nbsp;</p>\n', 'KogejuJk6lY', 'Gratis', 0, 41, 18, 12);

-- --------------------------------------------------------

--
-- Table structure for table `postsheader`
--

CREATE TABLE `postsheader` (
  `postID` int(11) NOT NULL,
  `topikID` int(11) NOT NULL,
  `title` int(11) NOT NULL,
  `description` int(11) NOT NULL,
  `isPaid` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tblbagian`
--

CREATE TABLE `tblbagian` (
  `bagianID` int(11) NOT NULL,
  `topikID` int(11) NOT NULL,
  `namaBagian` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblbagian`
--

INSERT INTO `tblbagian` (`bagianID`, `topikID`, `namaBagian`) VALUES
(7, 16, 'Cara Memanfaatkan Pasar Sideways'),
(9, 18, 'Apa itu Saham?'),
(10, 19, 'Cara Menghitung Average Down Saham'),
(11, 19, 'Cara Menerapkan Strategi Average Down'),
(12, 18, 'Dividen Saham');

-- --------------------------------------------------------

--
-- Table structure for table `topikheader`
--

CREATE TABLE `topikheader` (
  `topikID` int(11) NOT NULL,
  `memberID` int(11) NOT NULL,
  `judul` varchar(600) NOT NULL,
  `thumbnail` varchar(600) NOT NULL,
  `jenistopik` varchar(9) NOT NULL,
  `harga` int(11) NOT NULL,
  `createdAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `topikheader`
--

INSERT INTO `topikheader` (`topikID`, `memberID`, `judul`, `thumbnail`, `jenistopik`, `harga`, `createdAt`) VALUES
(16, 41, 'Cara Trading di Saham Sideways', 'akademi2.jpg', 'Berbayar', 30500, '2022-02-02'),
(18, 41, 'Belajar Saham untuk Pemula', 'Belajar Saham untuk Pemula-1646840363536.jpg', 'Gratis', 0, '2022-03-09'),
(19, 41, 'Rumus Average Down Saham', 'Average Down-1646842892641.jpg', 'Berbayar', 20000, '2022-03-09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `creator`
--
ALTER TABLE `creator`
  ADD PRIMARY KEY (`memberID`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`memberID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `postsdetail`
--
ALTER TABLE `postsdetail`
  ADD PRIMARY KEY (`postID`);

--
-- Indexes for table `postsheader`
--
ALTER TABLE `postsheader`
  ADD PRIMARY KEY (`postID`);

--
-- Indexes for table `tblbagian`
--
ALTER TABLE `tblbagian`
  ADD PRIMARY KEY (`bagianID`);

--
-- Indexes for table `topikheader`
--
ALTER TABLE `topikheader`
  ADD PRIMARY KEY (`topikID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `memberID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `postsdetail`
--
ALTER TABLE `postsdetail`
  MODIFY `postID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `tblbagian`
--
ALTER TABLE `tblbagian`
  MODIFY `bagianID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `topikheader`
--
ALTER TABLE `topikheader`
  MODIFY `topikID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
