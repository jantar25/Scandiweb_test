<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');

// Include action.php file
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

// Add a new user into database
if ($api == 'POST') {
    $names = $product->test_input($data->name);
    $imageURL = $product->test_input($data->imageURL);
    $descriptions = $product->test_input($data->description);
    $amount = $product->test_input($data->price);

    if ($product->insert($names, $imageURL, $amount, $descriptions)) {
        echo $product->message('Product added successfully!', false);
    } else {
        echo $product->message('Failed to add an Product!', true);
    }
}

// Update an user in database
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

// Delete an user from database
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
