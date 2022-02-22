-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2022 at 03:37 PM
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
(1, 33);

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
  `isCreator` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`memberID`, `Name`, `BirthDate`, `Phone`, `Email`, `Password`, `refresh_token`, `isCreator`) VALUES
(41, 'Andikatama', '2001-01-01', '087868407686', 'andykatama@gmail.comm', '$2b$10$61FnpDEi1I9HTinujKnaV.lJAyknvCSjd19xciJ3OeBLjBZJhevuS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxLCJuYW1lIjoiQW5kaWthdGFtYSIsImVtYWlsIjoiYW5keWthdGFtYUBnbWFpbC5jb21tIiwiaWF0IjoxNjQ1NDUyNTE5LCJleHAiOjE2NDU1Mzg5MTl9.1bqJ1JZr1WEFJYVDu_wzLOhRvt24I4b4ii65Wa1khWE', 0),
(47, 'Andikatama', '2001-01-01', '087868407686', 'andykatama@gmail.coma', '$2b$10$gNKotvu7xymVm5XEQZ21EeKQs3Nfmv6Dx7svd3omy22.lM/7fofvC', '${refreshToken}', 0);

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
  `memberID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `postsdetail`
--

INSERT INTO `postsdetail` (`postID`, `judul`, `deskripsi`, `linkvideo`, `jenispostingan`, `hargapostingan`, `memberID`) VALUES
(1, 'Tes', 'Halo', 'google.com', '0', 0, 41),
(2, 'a', '<p><strong>dsadasdasd</strong></p>\n', '', '0', 0, 41),
(3, 'TesFront', '<p><strong>Halo</strong></p>\n', '', '0', 0, 41),
(4, 'Testing', '<p><strong>Halo😗</strong></p>\n', 'goooogle.com', 'Berbayar', 2000, 41),
(5, '', '', '', 'false', 0, 41),
(6, 'a', '', '', 'false', 0, 41),
(7, '', '', '', 'false', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `postsheader`
--

CREATE TABLE `postsheader` (
  `postID` int(11) NOT NULL,
  `memberID` int(11) NOT NULL,
  `title` int(11) NOT NULL,
  `description` int(11) NOT NULL,
  `isPaid` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `memberID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `postsdetail`
--
ALTER TABLE `postsdetail`
  MODIFY `postID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
