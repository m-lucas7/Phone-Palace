-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 18 mars 2024 à 09:35
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `phonepalace`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `mail` text NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `telephones`
--

CREATE TABLE `telephones` (
  `id` int(11) NOT NULL,
  `name` varchar(35) NOT NULL,
  `descr` text NOT NULL,
  `price` decimal(16,0) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `telephones`
--

INSERT INTO `telephones` (`id`, `name`, `descr`, `price`, `image`) VALUES
(2, 'iPhone 13 Pro Max', 'L\'iPhone 13 Pro Max est le modèle phare d\'Apple, doté d\'un grand écran Super Retina XDR de 6,7 pouces, du puissant processeur A15 Bionic, d\'un système de caméra avancé avec trois objectifs et de fonctionnalités de pointe telles que la 5G, la photographie ProRAW et la vidéo Dolby Vision HDR.', 1259, 'iphone_13_pro_max.jpeg'),
(3, 'iPhone 13', 'L\'iPhone 13 présente un écran Super Retina XDR de 6,1 pouces, un processeur A15 Bionic rapide, un double système de caméra avec mode nuit amélioré et une batterie longue durée. Il est également compatible avec la 5G pour des performances réseau rapides.', 909, 'iphone_13.jpg'),
(4, 'iPhone SE (2020)', 'L\'iPhone SE (2020) offre des performances impressionnantes à un prix abordable. Avec son design compact, il intègre le processeur A13 Bionic pour des performances rapides, un appareil photo 12 MP et la prise en charge de Touch ID. Idéal pour ceux qui recherchent la puissance d\'un iPhone à un prix plus accessible.', 489, 'iphone_se_2020.jpg'),
(5, 'iPhone 12 Mini', 'L\'iPhone 12 Mini est un concentré de puissance dans un format compact. Avec son écran Super Retina XDR de 5,4 pouces, son processeur A14 Bionic et son système de double caméra avancé, il offre des performances dignes des plus grands iPhones, le tout dans une taille facile à manipuler.', 809, 'iphone_12_mini.jpg'),
(6, 'iPhone 11 Pro', 'L\'iPhone 11 Pro est équipé d\'un écran Super Retina XDR de 5,8 pouces, du processeur A13 Bionic, d\'un système de triple caméra offrant des capacités photographiques avancées et d\'une batterie longue durée. C\'est un choix idéal pour les utilisateurs exigeants en matière de photographie et de performances.', 1159, 'iphone_11_pro.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `telephones`
--
ALTER TABLE `telephones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `telephones`
--
ALTER TABLE `telephones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
