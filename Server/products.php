<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');



include_once './db.php';

// Create object of Products class
$product = new Database();

// create a api variable to get HTTP method dynamically
$api = $_SERVER['REQUEST_METHOD'];

// get id from url
$id = intval($_GET['id'] ?? '');

// get body data from request
$data = json_decode(file_get_contents("php://input"));

// Get all or a single Product from database
if ($api == 'GET') {
    if ($id != 0) {
        $response = $product->fetch($id);
    } else {
        $response = $product->fetch();
    }
    echo json_encode($response);
}

// Add new product into database
if ($api == 'POST') {
    $sku = $product->test_input($data->sku);
    $name = $product->test_input($data->name);
    $productType = $product->test_input($data->productType);
    $price = $product->test_input($data->price);
    $size = $product->test_input($data->size);
    $weight = $product->test_input($data->weight);
    $dimensions = $product->test_input($data->dimensions);

    if ($product->insert($sku, $name, $productType, $price, $size, $weight, $dimensions)) {
        echo $product->message('Product added successfully!', false);
    } else {
        echo $product->message('Failed to add an Product!', true);
    }
}

// Update products in database
if ($api == 'PUT') {
    $names = $product->test_input($data->name);
    $imageURL = $product->test_input($data->imageURL);
    $descriptions = $product->test_input($data->description);
    $amount = $product->test_input($data->price);

    if ($id != null) {
        if ($product->update($names, $imageURL, $amount, $descriptions, $id)) {
            echo $product->message('Product updated successfully!', false);
        } else {
            echo $product->message('Failed to update an product!', true);
        }
    } else {
        echo $product->message('Product not found!', true);
    }
}

// Delete products from database
if ($api == 'DELETE') {
    if ($id != null) {
        if ($product->delete($id)) {
            echo $product->message('Product deleted successfully!', false);
        } else {
            echo $product->message('Failed to delete an product!', true);
        }
    } else {
        echo $product->message('Product not found!', true);
    }
}
