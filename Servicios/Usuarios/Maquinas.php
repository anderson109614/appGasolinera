<?php
ob_start();
include("../coneccion.php");
$dbConn =  connect($db);
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
        if (isset($_GET['id'])) {
            $sql = $dbConn->prepare("SELECT Id,Descripcion FROM `maquias` WHERE Id_Isla=:id");
            $sql->bindValue(':id', $_GET['id']);
            
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
        }else{
            
            $sql = $dbConn->prepare(" SELECT
            maq.Id,
            maq.Descripcion,
            isl.Descripcion as Nombre,
            maq.Id_Isla
         FROM
             maquias maq,
             islas isl
         WHERE
             maq.Id_Isla=isl.Id
             AND maq.Estado=1");
                       
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
        $sql = "INSERT INTO `maquias`(
    
            `Descripcion`,
            `Id_Isla`,
            `Estado`
        )
        VALUES(
            :Descripcion,
            :Id_Isla,
            1
        )";
        $statement = $dbConn->prepare($sql);
        $statement->bindValue(':Descripcion', $input['Descripcion']);
        $statement->bindValue(':Id_Isla', $input['Id_Isla']);
        
        
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
        maquias
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
    maquias
SET
   Descripcion = :Descripcion,
   Id_Isla = :Id_Isla
WHERE
    Id=:Id";

    $statement = $dbConn->prepare($sql);
    

        $statement->bindValue(':Descripcion', $input['Descripcion'] );
        $statement->bindValue(':Id_Isla', $input['Id_Isla'] );
     
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