<?php

class cart_items{

    private $con;
    private $table_name = 'cart_items';

    public $id;
    public $pruduct_id;
    public $quntity;
    public $user_id;
    public $creatwed;
    public $modified;

    public function __construct($db){
        $this->con = $db;   
    }
}