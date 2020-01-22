<?php
ob_start();
include("../coneccion.php");
$dbConn =  connect($db);



if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    try{
        $input = (array) json_decode(file_get_contents('php://input'), TRUE);
       
        $sql = $dbConn->prepare("SELECT
        us.Id,
        us.Cedula,
        us.Nombre,
        us.Apellido,
        us.Telefono,
        us.Direccion,
        us.Contrasena,
        ro.Nombre as Rol
    FROM
        usuarios us,
        roles ro
    WHERE
          us.Id_Rol=ro.Id
     AND   us.Cedula=:usuario
     AND   us.Contrasena=:contrasena
     AND   us.Estado=1
     ;");
        $sql->bindValue(':usuario', $input['Cedula'] );
        $sql->bindValue(':contrasena', $input['Contrasena'] );
        $sql->execute();
        $sql->setFetchMode(PDO::FETCH_ASSOC);
         header("HTTP/1.1 200 OK");
        echo json_encode( $sql->fetchAll()  );
       // echo json_encode(  $sql->fetch(PDO::FETCH_ASSOC)  );
      
   
    } catch (Exception $e) {
        //echo 'Excepción capturada: ',  $e->getMessage(), "\n";
        $input['error'] =$e->getMessage() ;
        echo json_encode($input);
    }
   

}


header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
ob_end_flush();
?>