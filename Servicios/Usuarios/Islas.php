<?php
ob_start();
include("../coneccion.php");
$dbConn =  connect($db);
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
        if (isset($_GET['id'])) {
            $sql = $dbConn->prepare(" SELECT Id,Descripcion FROM `islas` WHERE Id_Usuario=:id AND Estado=1");
            $sql->bindValue(':id', $_GET['id']);
            
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
        }else{
            
            $sql = $dbConn->prepare("SELECT
            isl.Id,
            isl.Descripcion,
            isl.Id_Usuario,
            CONCAT(usr.Nombre , ' ', usr.Apellido) as Nombre
           
       FROM
           islas isl,
           usuarios usr
       WHERE
           isl.Id_Usuario=usr.Id
          AND isl.Estado=1");
                       
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
        $sql = "INSERT INTO islas(
            Descripcion,
            Id_Usuario,
            Estado
        )
        VALUES(
            :Descripcion,
            :Id_Usuario,
            1
        )";
        $statement = $dbConn->prepare($sql);
        $statement->bindValue(':Descripcion', $input['Descripcion']);
        $statement->bindValue(':Id_Usuario', $input['Id_Usuario']);
     
        
        
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
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    
    try {
        $idpre = $_GET['id'];
        
        $statement = $dbConn->prepare("UPDATE
        islas
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
    islas
SET
   Descripcion = :Descripcion,
   Id_Usuario = :Id_Usuario
WHERE
    Id=:Id";

    $statement = $dbConn->prepare($sql);
    

        $statement->bindValue(':Descripcion', $input['Descripcion'] );
        $statement->bindValue(':Id_Usuario', $input['Id_Usuario'] );
     
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