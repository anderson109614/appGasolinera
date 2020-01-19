<?php
ob_start();
include("../coneccion.php");
$dbConn =  connect($db);
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
        if (isset($_GET['id'])) {
            $sql = $dbConn->prepare(" SELECT
            Id,
    Cedula,
    Nombre,
    Apellido,
    Telefono,
    Direccion
        FROM
            `clientes`
        WHERE
            Id = :id
            AND Estado=1");
            $sql->bindValue(':id', $_GET['id']);
            
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
        }else{
            $sql = $dbConn->prepare(" SELECT
            Id,
    Cedula,
    Nombre,
    Apellido,
    Telefono,
    Direccion
        FROM
            `clientes`
        WHERE Estado=1");
                       
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
        }  
    } catch (Exception $e) {
        echo 'Excepción capturada: ',  $e->getMessage(), "\n";
    }
}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    try {
        //$input = $_POST;
        $input = (array) json_decode(file_get_contents('php://input'), TRUE);
        $sql = "INSERT INTO clientes(
            
            Cedula,
            Nombre,
            Apellido,
            Telefono,
            Direccion
        )
        VALUES(
            
            :Cedula,
            :Nombre,
            :Apellido,
            :Telefono,
            :Direccion
        )";
        $statement = $dbConn->prepare($sql);
        $statement->bindValue(':Cedula', $input['Cedula']);
        $statement->bindValue(':Nombre', $input['Nombre']);
        $statement->bindValue(':Apellido', $input['Apellido']);
        $statement->bindValue(':Telefono', $input['Telefono']);
        $statement->bindValue(':Direccion', $input['Direccion']);
        
        // bindAllValues($statement, $input,-1);
        $statement->execute();
        $postId = $dbConn->lastInsertId();
        if ($postId) {
            $input['Id'] = $postId;
            header("HTTP/1.1 200 OK");
            echo json_encode($input);
        }
    } catch (Exception $e) {
        echo 'Excepción capturada: ',  $e->getMessage(), "\n";
    }
   

}
//Actualizar
if ($_SERVER['REQUEST_METHOD'] == 'PUT')
{
    try{
    //$input = $_GET;
    $input = (array) json_decode(file_get_contents('php://input'), TRUE);
   
   
    $sql = "
    UPDATE
    clientes
SET
    Cedula = :cedula,
    Nombre =:nombre,
    Apellido =:apellido ,
    Telefono =:telefono ,
    Direccion = :direccion
WHERE
     Id = :id
    
    ";

    $statement = $dbConn->prepare($sql);
    

    $statement->bindValue(':cedula',   $input['Cedula']);
    $statement->bindValue(':nombre',   $input['Nombre']);
    $statement->bindValue(':apellido',   $input['Apellido']);
    $statement->bindValue(':telefono',   $input['Telefono']);
    $statement->bindValue(':direccion',   $input['Direccion']);
    
  
  
    $statement->bindValue(':id',   $input['Id']);

    $statement->execute();
  
    header("HTTP/1.1 200 OK");
    echo json_encode($input);
    } catch (Exception $e) {
        echo 'Excepción capturada: ',  $e->getMessage(), "\n";
    }
}
if ($_SERVER['REQUEST_METHOD'] == 'DELETE')
{
    try{
        
        //$input = (array) json_decode(file_get_contents('php://input'), TRUE);
        // $postId = $input['id'];
         $id = $_GET['id'];
        $statement = $dbConn->prepare("UPDATE clientes SET Estado=0 WHERE Id=:id"); 
        $statement->bindValue(':id', $id);
        $statement->execute();
        $object3 = (object) [
            'id' => $id,
            'msj' => 'OK'
                        
          ];
        header("HTTP/1.1 200 OK");
        echo json_encode($object3);
    } catch (Exception $e) {
        echo 'Excepción capturada: ',  $e->getMessage(), "\n";
    }
}
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
ob_end_flush();
?>