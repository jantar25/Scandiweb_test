<?php

include_once './Config/CreateDBandTable.php';

$DB = new CreateDBandTable();

$DB->setDBAndTableName("Scandiweb_test", "Products");
echo $DB->getDBAndTableName();
$DB->createDB();
$DB->createTable();
