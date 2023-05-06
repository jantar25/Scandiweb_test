<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/ConnectDatabase.php';
include_once '../class/Items.php';

$database = new Connect_Database();
$database->setDBName("Scandiweb");
$db = $database->getConnection();

$items = new Items($db);
$items->setTableName("Products");

$items->ID = (isset($_GET['id']) && $_GET['id']) ? $_GET['id'] : '0';
echo $items->ID;

$result = $items->read();

if ($result->num_rows > 0) {
    $itemRecords = array();
    $itemRecords["items"] = array();
    while ($item = $result->fetch_assoc()) {
        extract($item);
        $itemDetails = array(
            "id" => $id,
            "names" => $names,
            "descriptions" => $descriptions,
            "amount" => $amount,
            "imageURL" => $imageURL,
            "postdate" => $postdate
        );
        array_push($itemRecords["items"], $itemDetails);
    }
    http_response_code(200);
    echo json_encode($itemRecords);
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No item found.")
    );
}
