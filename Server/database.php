<?php
// Include config.php file
include_once './Config/ConnectDatabase.php';

// Create a class Products
class Database extends Connect_Database
{
    // Fetch all or a single Product from database
    public function fetch()
    {
        $sql = 'SELECT * FROM products';
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $rows = $stmt->fetchAll();
        return $rows;
    }

    // Insert an Product in the database
    public function insert($sku, $name, $productType, $price, $size, $weight, $dimensions)
    {
        $sql = 'INSERT INTO products (SKU, name,productType, price,size, weight,dimensions) VALUES (:sku, :name,:productType, :price, :size ,:weight,:dimensions)';
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(['sku' => $sku, 'name' => $name, 'productType' => $productType, 'price' => $price, 'size' => $size, 'weight' => $weight, 'dimensions' => $dimensions]);
        return true;
    }

    // Delete an Product from database
    public function delete($skuToDelete)
    {
        $sql = 'DELETE FROM products WHERE SKU = :sku';
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(['sku' => $skuToDelete]);
        return true;
    }
}
