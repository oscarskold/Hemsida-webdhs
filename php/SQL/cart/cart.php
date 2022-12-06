<?php
//conecting to databas
include '../config/databas.php';

// include object
include_once 'objects/produkt.php';
include_once 'objects/cart_items.php';

$database = new database();
$db = $database->getconnection();

$produkt = new produkt($db);
$cart_item = new cart_items($db);

$action = isset($_GET['action']) ? $_GET['action'] : '';

$page = isset($_GET['page']) ? $_GET['page'] : 1;
$records_per_page = 6;
$from_records_num = ($records_per_page * $page) - $records_per_page;



$page_tile = 'produkts';

include '../../../template/php/header.php';


$stat = $produkt->read($from_records_num, $records_per_page);

$num = $stmt->rowCount();

if($sum>0){
    $page_url = 'cart.php';
    $total_rows = $produkt->count();

    include_once 'read_produkts_template.php';
}
else{
    echo '<div>
        <div>No products found</div>
    </div>';
}


include '../../../template/php/footer.php';



