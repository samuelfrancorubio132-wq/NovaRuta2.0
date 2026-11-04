CREATE DATABASE NovaRuta_Manizales(
 CREATE TABLE Administrador (
        id_administrador INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        Llave_acceso VARCHAR(12) NOT NULL,
        Contraseña VARCHAR(33) NOT NULL,
        Correo TEXT(100) NOT NULL
    

    );

    CREATE TABLE Busetas (
        id_busetas INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        Marca VARCHAR(20) NOT NULL,
        Carroceria TEXT(100) NOT NULL,
        Modelo TEXT(100) NOT NULL

    );

    CREATE TABLE Rutas (
        id_ruta INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        Numero_Ruta INT(3) NOT NULL,
        paradero TEXT(200) NOT NULL,
        Destino_inicial TEXT(200) NOT NULL,
        Destino_final TEXT(200) NOT NULL
    );


    CREATE TABLE Novedades (
        id_novedades INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        Procedimiento TEXT(1000) NOT NULL,
        Revision TEXT(1000) NOT NULL,
        Costo FLOAT(11) NOT NULL,

        id_busetas INT,

        FOREIGN KEY (id_busetas)
            REFERENCES Rutas(id_rutas)
    );


CREATE TABLE Conductor (
    id_conductor INT AUTO_INCREMENT PRIMARY KEY,
    Cedula_conductor VARCHAR(20) NOT NULL UNIQUE,
    Placa VARCHAR(20) NOT NULL,
    Contraseña VARCHAR(100) NOT NULL UNIQUE,

    id_ruta INT,
    id_busetas INT,

    FOREIGN KEY (id_ruta)
        REFERENCES Rutas(id_ruta),

    FOREIGN KEY (id_busetas)
        REFERENCES Busetas(id_busetas)
) ENGINE=InnoDB;
)
    