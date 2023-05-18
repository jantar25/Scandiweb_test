<?php

class Connect_Database
{
    // private const SERVERNAME = "sql306.epizy.com";
    // private const USERNAME = "epiz_34170761";
    // private const PASSWORD = "NFgkgqGhEcu";
    // private const DB_NAME = "epiz_34170761_PetitPlatResto";
    private const SERVERNAME = "localhost";
    private const USERNAME = "root";
    private const PASSWORD = "";
    private const DB_NAME = "Scandiweb_test";

    // Data Source Network
    private $dsn = 'mysql:host=' . self::SERVERNAME . ';dbname=' . self::DB_NAME . '';

    // conn variable
    protected $conn = null;

    // Constructor Function
    public function __construct()
    {
        try {
            $this->conn = new PDO($this->dsn, self::USERNAME, self::PASSWORD);
            $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            die('Connectionn Failed : ' . $e->getMessage());
        }
        return $this->conn;
    }

    // Sanitize Inputs
    public function testInput($data)
    {
        $data = strip_tags($data);
        $data = htmlspecialchars($data);
        $data = stripslashes($data);
        $data = trim($data);
        return $data;
    }

    // JSON Format Converter Function
    public function message($content, $status)
    {
        return json_encode(['message' => $content, 'error' => $status]);
    }
}
