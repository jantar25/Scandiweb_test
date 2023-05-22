<?php
// Include config.php file
include_once './Config/ConnectDatabase.php';

// Create a class Products
class Database extends Connect_Database
{
    private $table = 'products';

    // Fetch all or a single Product from database
    public function fetch()
    {
        $sql = 'SELECT * FROM ' . $this->table;
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $rows = $stmt->fetchAll();
        return $rows;
    }

    // Insert an Product in the database
    public function insert($sku, $name, $productType, $price, $size, $weight, $dimensions)
    {
        $sql = 'INSERT INTO ' . $this->table . '(SKU,name,productType,price,size,weight,dimensions) VALUES (:sku,:name,:productType,:price,:size,:weight,:dimensions)';
        $stmt = $this->conn->prepare($sql);

        // Bind data
        $stmt->bindParam(':sku', $sku);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':productType', $productType);
        $stmt->bindParam(':price', $price);
        $stmt->bindParam(':size', $size);
        $stmt->bindParam(':weight', $weight);
        $stmt->bindParam(':dimensions', $dimensions);

        // Execute query
        if ($stmt->execute()) {
            return true;
        }

        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);
        return false;
    }

    // Delete an Product from database
    public function delete($skuToDelete)
    {
        $sql = 'DELETE FROM ' . $this->table . ' WHERE SKU = :sku';
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(['sku' => $skuToDelete]);
        return true;
    }
}
