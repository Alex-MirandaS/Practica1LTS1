/*INICAR BASE DE DATOS*/
CREATE DATABASE corn_wars;

USE corn_wars;

CREATE TABLE Puntajes(
    id INT auto_increment,
    nombre VARCHAR (50) NOT NULL,
    puntaje INT NOT NULL,
    PRIMARY KEY (id)
);

