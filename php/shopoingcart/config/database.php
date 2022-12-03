<?php
class Database{
    private $host = 'localhost';
    private $db_name = 'shopping_cart';
    private $username = 'root';
    private $password = 'Admin';
    public $conn;

    public function getConnection(){

        $this->conn = null;

        try{
            $this->conn = new("mysql:host=" . $this->host . ";dbname=" . $this->db_name. $this->username. $this->password);
        }catch(PDOException $exception){
            echo "connection error: " . $exception->getMessage();
        }

        return $this->conn;

    }


}
