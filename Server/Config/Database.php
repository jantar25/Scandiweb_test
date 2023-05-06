<?php


class Database
{
    private $SERVERNAME = "localhost";
    private $USERNAME = "root";
    private $PASSWORD = "";
    private $DB_NAME;
    private $TABLE_NAME;

    // getters
    public function getDBAndTableName()
    {
        return "$this->DB_NAME $this->TABLE_NAME";
    }

    // setters

    public function setDBAndTableName($dbName, $tableName)
    {
        $this->DB_NAME = $dbName;
        $this->TABLE_NAME = $tableName;
    }

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
        $query = "CREATE DATABASE {$this->DB_NAME}";
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
        $CONN = new mysqli($this->SERVERNAME, $this->USERNAME, $this->PASSWORD, $this->DB_NAME);
        $sqlTable = "CREATE TABLE {$this->TABLE_NAME} (
            id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            names VARCHAR(30) NOT NULL,
            imageURL VARCHAR(300) NOT NULL,
            descriptions VARCHAR(200) NOT NULL,
            amount INT(10),
            postdate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )";

        if ($CONN->query($sqlTable)) {
            echo "Table created successfully";
        } else {
            echo "Error creating table: " . $CONN->error;
        }

        $CONN->close();
    }
}

$DB = new Database();
$DB->setDBAndTableName("Scandiweb", "Products");
echo $DB->getDBAndTableName();
$DB->createDB();
$DB->createTable();
