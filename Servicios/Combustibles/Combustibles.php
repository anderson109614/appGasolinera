<?php
ob_start();
include("../coneccion.php");
$dbConn =  connect($db);
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
      
            $sql = $dbConn->prepare(" SELECT
            Id,
            Nombre,
            Precio,
            Cant_Disponible as Cantidad
        FROM
            combustibles
        WHERE
             Estado=1");

           
            
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
        
    } catch (Exception $e) {
        echo 'Excepción capturada: ',  $e->getMessage(), "\n";
    }
}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    try {
        //$input = $_POST;
        $input = (array) json_decode(file_get_contents('php://input'), TRUE);
        $sql = "INSERT INTO combustibles(
            Nombre,
            Precio,
            Cant_Disponible,
            Estado
        )
        VALUES(
            :Nombre,
            :Precio,
            :Cantidad,
            1)";
        $statement = $dbConn->prepare($sql);
        $statement->bindValue(':Nombre', $input['Nombre']);
        $statement->bindValue(':Precio', $input['Precio']);
        $statement->bindValue(':Cantidad', $input['Cantidad']); 
        // bindAllValues($statement, $input,-1);
        $statement->execute();
        $postId = $dbConn->lastInsertId();
        if ($postId) {
            $input['id'] = $postId;
            header("HTTP/1.1 200 OK");
            echo json_encode($input);
        }
    } catch (Exception $e) {
        echo 'Excepción capturada: ',  $e->getMessage(), "\n";
    }
    
}
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    
    try {
        $idpre = $_GET['id'];
        
        $statement = $dbConn->prepare("UPDATE
        combustibles
    SET
        
        Estado = 0
    WHERE
         Id=:id");
        $statement->bindValue(':id', $idpre);
        
        $statement->execute();
        $object3 = (object) [
            'id' => $idpre,
            'msj' => 'OK'
                        
          ];
        header("HTTP/1.1 200 OK");
        echo json_encode($object3);
    } catch (Exception $e) {
        echo 'Excepción capturada: ',  $e->getMessage(), "\n";
    }
    
}

if ($_SERVER['REQUEST_METHOD'] == 'PUT')
{
    try{
    //$input = $_GET;
    $input = (array) json_decode(file_get_contents('php://input'), TRUE);
   
   
    $sql = "UPDATE
    combustibles
SET
    Nombre =:Nombre,
    Precio =:Precio ,
    Cant_Disponible = :Cantidad
WHERE
    Id=:Id";

    $statement = $dbConn->prepare($sql);
    

        $statement->bindValue(':Nombre', $input['Nombre'] );
        $statement->bindValue(':Precio', $input['Precio'] );
        $statement->bindValue(':Cantidad', $input['Cantidad'] );
        $statement->bindValue(':Id', $input['Id'] );
      
  
    $statement->execute();
  
    header("HTTP/1.1 200 OK");
    echo json_encode($input);
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