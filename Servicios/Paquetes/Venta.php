<?php
ob_start();
include("../coneccion.php");
$dbConn =  connect($db);
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  /*  try {
        if (isset($_GET['cod'])) {
            $sql = $dbConn->prepare("
            ");

            $sql->bindValue(':cod', $_GET['cod']);
            
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
        }else{
            $sql = $dbConn->prepare("
            ");

            $sql->bindValue(':zona', $_GET['zona']);
           // $sql->bindValue(':secciones', );
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
        }

    } catch (Exception $e) {
        echo 'Excepción capturada: ',  $e->getMessage(), "\n";
    }
    */
}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  

    try {
        //$input = $_POST;
        $input = (array) json_decode(file_get_contents('php://input'), TRUE);
        $sql = "INSERT INTO `ventas`(
            `Fecha`,
            `ID_Placa`,
            `ID_Dispensador`,
            `Cantidad`,
            `Total`
        )
        VALUES(
            now(),
            :ID_Placa,
            :ID_Dispensador,
            :Cantidad,
            :Total
        )";
        $statement = $dbConn->prepare($sql);
        $statement->bindValue(':ID_Placa', $input['ID_Placa']);
        $statement->bindValue(':ID_Dispensador', $input['ID_Dispensador']);
        $statement->bindValue(':Cantidad', $input['Cantidad']);
        $statement->bindValue(':Total', $input['Total']);
        
        // bindAllValues($statement, $input,-1);

        $statement->execute();
        $postId = $dbConn->lastInsertId();
        if ($postId) {
            $input['Id'] = $postId;
            header("HTTP/1.1 200 OK");
            ReducirCantidadDis($input['IdCombustible'],$input['NuevaCant'],$dbConn);
            echo json_encode($input);
        }
        
        
    } catch (Exception $e) {
        echo 'Excepción capturada: ',  $e->getMessage(), "\n";
    }
    
}
function ReducirCantidadDis($id,$cantidad,$dbConn){
    // desactivarEncargadosAnteriores($idBien,$dbConn);
     $sql = $dbConn->prepare("UPDATE `combustibles` SET `Cant_Disponible`=:cant WHERE Id=:cod");
     $sql->bindValue(':cant',  $cantidad);
     $sql->bindValue(':cod', $id);
     $sql->execute();
 }




header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
ob_end_flush(); 
?>