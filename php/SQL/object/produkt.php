<?php

class produkt{

    private $con;
    private $table_name = 'produkt';

    public $id;
    public $name;
    public $price;
    public $description;
    public $catagory_id;
    public $catagory_name;
    public $timestamp;

    public function __construct($db){
        $this->con = $db;   
    }
}