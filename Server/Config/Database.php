<?php


class Database
{
    private $SERVERNAME = "localhost";
    private $USERNAME = "root";
    private $PASSWORD = "";
    private $BD_NAME = "petitplat";
    private $TABLE_NAME = "menu";

    public function createDB()
    {
        // Create connection
        $CONN = new mysqli($this->SERVERNAME, $this->USERNAME, $this->PASSWORD);

        // Check connection
        if ($CONN->connect_error) {
            die("Connection failed: " . $CONN->connect_error);
        }
        echo "Connection established successfully";


        //sql query to create a database named petit-plat
        $query = "CREATE DATABASE {$this->BD_NAME}";
        if ($CONN->query($query)) {
            echo "Database created successfully";
        } else {
            echo "Error creating database: " . $CONN->error;
        }
        $CONN->close();
    }


    // sql to create table
    public function createTable()
    {
        $CONN = new mysqli($this->SERVERNAME, $this->USERNAME, $this->PASSWORD, $this->BD_NAME);
        $sqlTable = "CREATE TABLE {$this->TABLE_NAME} (
            id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            names VARCHAR(30) NOT NULL,
            imageURL VARCHAR(300) NOT NULL,
            descriptions VARCHAR(200) NOT NULL,
            amount INT(10),
            postdate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )";

        if ($CONN->query($sqlTable)) {
            echo "Table menu created successfully";
        } else {
            echo "Error creating table: " . $CONN->error;
        }

        $CONN->close();
    }
}

$connection = new Database();

echo $connection->createDB();
echo $connection->createTable();
