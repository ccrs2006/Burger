-- DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id INT(30) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured tinyint(1) NOT NULL DEFAULT "0",
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM burgers;