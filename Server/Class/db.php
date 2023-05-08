<?php
// Include config.php file
include_once '../Config/ConnectDatabase.php';

// Create a class Products
class Database extends Connect_Database
{
    // Fetch all or a single Product from database
    public function fetch($id = 0)
    {
        $sql = 'SELECT * FROM products';
        if ($id != 0) {
            $sql .= ' WHERE id = :id';
            $stmt = $this->CONN->prepare($sql);
            $stmt->execute(['id' => $id]);
            $rows = $stmt->fetchAll();
            return $rows;
        }
        $stmt = $this->CONN->prepare($sql);
        $stmt->execute();
        $rows = $stmt->fetchAll();
        return $rows;
    }

    // Insert an Product in the database
    public function insert($name, $imageURL, $amount, $description)
    {
        $sql = 'INSERT INTO Products (names, imageURL, descriptions,amount) VALUES (:name, :imageURL, :description, :amount)';
        $stmt = $this->CONN->prepare($sql);
        $stmt->execute(['name' => $name, 'imageURL' => $imageURL, 'description' => $description, 'amount' => $amount]);
        return true;
    }

    // Update an Product in the database
    public function update($name, $imageURL, $amount, $description, $id)
    {
        $sql = 'UPDATE Products SET names = :name, imageURL = :imageURL, descriptions = :description,amount = :amount WHERE id = :id';
        $stmt = $this->CONN->prepare($sql);
        $stmt->execute(['name' => $name, 'imageURL' => $imageURL, 'description' => $description, 'amount' => $amount, 'id' => $id]);
        return true;
    }

    // Delete an Product from database
    public function delete($id)
    {
        $sql = 'DELETE FROM Products WHERE id = :id';
        $stmt = $this->CONN->prepare($sql);
        $stmt->execute(['id' => $id]);
        return true;
    }
}
