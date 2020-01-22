<?php
ob_start();
include("../coneccion.php");
$dbConn =  connect($db);
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    
    try {
        
            $sql = $dbConn->prepare("SELECT
            us.Id,
            us.Cedula,
            us.Nombre,
            us.Apellido,
            us.Telefono,
            us.Direccion,
            us.Contrasena,
            ro.Id as IdRol,
            ro.Nombre as Rol
        FROM
            usuarios us,
            roles ro
        WHERE
              us.Id_Rol=ro.Id
              AND us.Estado=1");
                       
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
        $sql = "INSERT INTO usuarios(
            Cedula,
            Nombre,
            Apellido,
            Telefono,
            Direccion,
            Contrasena,
            Id_Rol,
            Estado
        )
        VALUES(            
            :Cedula,
            :Nombre,
            :Apellido,
            :Telefono,
            :Direccion,
            :Contrasena,
            :Id_Rol,
            1
        )";
        $statement = $dbConn->prepare($sql);
        $statement->bindValue(':Cedula', $input['Cedula'] );
        $statement->bindValue(':Nombre', $input['Nombre'] );
        $statement->bindValue(':Apellido', $input['Apellido'] );
        $statement->bindValue(':Telefono', $input['Telefono'] );
        $statement->bindValue(':Direccion', $input['Direccion'] );
        $statement->bindValue(':Contrasena', $input['Contrasena'] );
        $statement->bindValue(':Id_Rol', $input['IdRol'] );
        
        
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
    usuarios
SET
    
    Cedula =:Cedula ,
    Nombre = :Nombre,
    Apellido =:Apellido,
    Telefono = :Telefono,
    Direccion = :Direccion,
    Contrasena =:Contrasena,
    Id_Rol =:Id_Rol 
WHERE
    Id= :id";

    $statement = $dbConn->prepare($sql);
    

        $statement->bindValue(':Cedula', $input['Cedula'] );
        $statement->bindValue(':Nombre', $input['Nombre'] );
        $statement->bindValue(':Apellido', $input['Apellido'] );
        $statement->bindValue(':Telefono', $input['Telefono'] );
        $statement->bindValue(':Direccion', $input['Direccion'] );
        $statement->bindValue(':Contrasena', $input['Contrasena'] );
        $statement->bindValue(':Id_Rol', $input['IdRol'] );
     
  
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
        $statement = $dbConn->prepare("UPDATE usuarios SET Estado=0 WHERE Id=:id"); 
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

