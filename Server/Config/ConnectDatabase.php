<?php

class Connect_Database
{
    private $SERVERNAME = "localhost";
    private $USERNAME = "root";
    private $PASSWORD = "";
    private $BD_NAME = "petitplat";

    //connection to Database
    public function getConnection()
    {
        $CONN = new mysqli($this->SERVERNAME, $this->USERNAME, $this->PASSWORD, $this->BD_NAME);
        // Check connection
        if ($CONN->connect_error) {
            die("Connection failed: " . $CONN->connect_error);
        }
        return $CONN;
    }
}
