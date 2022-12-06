<?php

class cart_items{

    private $con;
    private $table_name = 'cart_items';

    public $id;
    public $pruduct_id;
    // public $qun;
    // public $description;
    // public $catagory_id;
    // public $catagory_name;
    // public $timestamp;

    public function __construct($db){
        $this->con = $db;   
    }
}