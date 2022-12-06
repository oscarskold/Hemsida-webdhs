<?php
//connection to shooping_cart
class database{

    private $host = 'localhost';
    private $db_name = 'shooping_cart';
    private $username = 'root';
    private $password = 'Admin';
    public $con;

    //connecting
    public function getconnection(){

        $this->con = null;

        try{
            $this->con = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
        }catch(PDOException $exception){
            echo 'connection error: ' . $exception->getMessage();
        }
        return $this->con;
    }
}
