<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true ");
header('Content-Type: application/json; charset=UTF-8');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin,Depth, User-Agent, X-File-Size, If-Modified-Since, X-File-Name, Cache-Control, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");

$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header("HTTP/1.1 200 OK");
    die();
}



include_once './database.php';

// Create object of Products class
$product = new Database();

// create a api variable to get HTTP method dynamically
$api = $_SERVER['REQUEST_METHOD'];

// get body data from request
$data = json_decode(file_get_contents("php://input"));

// Get all or a single Product from database
if ($api == 'GET') {
    $response = $product->fetch();
    echo json_encode($response);
}

// Add new product into database
if ($api == 'POST') {
    //cleanning data
    $sku = $product->testInput($data->sku);
    $name = $product->testInput($data->name);
    $productType = $product->testInput($data->productType);
    $price = $product->testInput($data->price);
    $size = $product->testInput(!empty($data->size) ? $data->size : 0);
    $weight = $product->testInput(!empty($data->weight) ? $data->weight : 0);
    $dimensions = $product->testInput(!empty($data->dimensions) ? $data->dimensions : '');

    $response = $product->insert($sku, $name, $productType, $price, $size, $weight, $dimensions);
    if ($response) {
        echo $product->message('Product added successfully!', false);
    } else {
        echo $product->message('Failed,to add product!', true);
    }
}

// Mass delete products from database
if ($api == 'PATCH') {
    $checkboxes = $data;
    for ($i = 0; $i < sizeof($checkboxes); $i++) {
        $skuToDelete = $checkboxes[$i];

        if ($skuToDelete != null) {
            if ($product->delete($skuToDelete)) {
                echo $product->message('Product deleted successfully!', false);
            } else {
                echo $product->message('Failed to delete an product!', true);
            }
        } else {
            echo $product->message('Product not found!', true);
        }
    }
}
