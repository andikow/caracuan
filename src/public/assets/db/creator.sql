-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2022 at 02:42 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

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
-- Table structure for table `creator`
--

CREATE TABLE `creator` (
  `memberID` int(11) NOT NULL,
  `username` varchar(60) NOT NULL,
  `shortbio` varchar(250) NOT NULL,
  `instagram` varchar(50) NOT NULL,
  `twitter` varchar(50) NOT NULL,
  `youtube` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `creator`
--

INSERT INTO `creator` (`memberID`, `username`, `shortbio`, `instagram`, `twitter`, `youtube`) VALUES
(41, 'andy_katama', 'Ex pro-trader & financial analyst. Foreign bankers veteran (MUFG , Allianz, and BNP Paribas). Just the old man with craving passion in stock market and teaching. Lonewolf investor who are secluded from the crowd.', 'andi_kow', 'andi_kow', 'andi_kow'),
(47, 'capt.saham707', 'Investor saham yang menganalisis kinerja dan keuangan perusahaan', 'kaptensaham707', 'kaptencrypto707', 'Saham707'),
(48, 'vandarina.risca', 'Cheap stocks, conviction, and tailwinds are the perfect combination to compound wealth.', 'vandarina.risca', 'vandarina.risca', 'vandarina.risca'),
(49, 'lylia88', 'Penguji Conviction Anda. Tangan Kiri Bandar.', 'lylia88', 'lylia88', 'lylia88'),
(50, 'kagura.mlbb', 'Knowledge philanthropy, stockthusiasm', 'kagura.mlbb', 'kagura.mlbb', 'kagura.mlbb'),
(51, 'gatotkaca_', 'Independent Value Investor. 3 hal terpenting di Investasi: Akal sehat, Mindset dan Keberanian.', 'gatotkaca_', 'gatotkaca_', 'gatotkaca_'),
(52, 'na__than21', 'Do best analysis for your best stocks', 'na__than21', 'na__than21', 'na__than21'),
(53, 'hana.bee', 'Formula Investasi Sederhana, Analyze, Buy, Watch the Grow and Sell, Tidak ada analisis yang 100% benar tetapi buatlah itu menjadi 99% benar', 'hana.bee', 'hana.bee', 'hana.bee'),
(54, 'julian78', 'Seorang \"Sentimentalist\" yang mengambil faedah dari segala macam bentuk analisa: Fundamental, Technical, Bandarmology sampai Tape Reading, termasuk menganalisa Rumor, News & Corporate Action yang menghasilkan saham Trending Topic.', 'julian78', 'julian78', 'julian78'),
(55, 'maia.flwr', '-Analisa dari Teknikal-\r\n-Trend Follower-', 'maia.flwr', 'maia.flwr', 'maia.flwr'),
(57, 'es_teler', 'Do your own research. ', 'es_teler', 'es_teler', 'es_teler');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `creator`
--
ALTER TABLE `creator`
  ADD PRIMARY KEY (`memberID`),
  ADD UNIQUE KEY `username` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
