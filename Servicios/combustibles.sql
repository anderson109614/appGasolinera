-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-01-2020 a las 05:52:13
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_gasolinera`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `combustibles`
--

CREATE TABLE `combustibles` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Precio` double NOT NULL,
  `Cant_Disponible` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `combustibles`
--

INSERT INTO `combustibles` (`Id`, `Nombre`, `Precio`, `Cant_Disponible`) VALUES
(3, 'Extra', 1.2, 10),
(4, 'Super', 1.8, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `combustibles`
--
ALTER TABLE `combustibles`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `combustibles`
--
ALTER TABLE `combustibles`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
