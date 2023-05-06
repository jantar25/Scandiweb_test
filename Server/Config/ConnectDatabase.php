<?php

class Connect_Database
{
    private $SERVERNAME = "localhost";
    private $USERNAME = "root";
    private $PASSWORD = "";
    private $DB_NAME;

    public function setDBName($dbName)
    {
        $this->DB_NAME = $dbName;
    }

    //connection to Database
    public function getConnection()
    {
        $CONN = new mysqli($this->SERVERNAME, $this->USERNAME, $this->PASSWORD, $this->DB_NAME);
        // Check connection
        if ($CONN->connect_error) {
            die("Connection failed: " . $CONN->connect_error);
        }
        return $CONN;
    }
}
