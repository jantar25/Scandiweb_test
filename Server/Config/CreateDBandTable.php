<?php

class CreateDBandTable
{
    private const SERVERNAME = "localhost";
    private const USERNAME = "root";
    private const PASSWORD = "";
    private $DB_NAME;
    private $TABLE_NAME;

    // getter
    public function getDBAndTableName()
    {
        return "$this->DB_NAME $this->TABLE_NAME";
    }

    // setter
    public function setDBAndTableName($dbName, $tableName)
    {
        $this->DB_NAME = $dbName;
        $this->TABLE_NAME = $tableName;
    }

    public function createDB()
    {
        // Create connection
        $conn = new mysqli(self::SERVERNAME, self::USERNAME, self::PASSWORD);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        echo "Connection established successfully";


        //sql query to create a database
        $query = "CREATE DATABASE {$this->DB_NAME}";
        if ($conn->query($query)) {
            echo "Database created successfully";
        } else {
            echo "Error creating database: " . $conn->error;
        }
        $conn->close();
    }


    // sql to create table
    public function createTable()
    {
        $conn = new mysqli(self::SERVERNAME, self::USERNAME, self::PASSWORD, $this->DB_NAME);
        $sqlTable = "CREATE TABLE {$this->TABLE_NAME} (
            id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            SKU VARCHAR(30) NOT NULL UNIQUE,
            name VARCHAR(300) NOT NULL,
            price  DECIMAL (10,2) NOT NULL,
            productType VARCHAR(30) NOT NULL,
            size INT(10),
            weight INT(10),
            dimensions VARCHAR(100),
            postdate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )";

        if ($conn->query($sqlTable)) {
            echo "Table created successfully";
        } else {
            echo "Error creating table: " . $conn->error;
        }

        $conn->close();
    }
}
