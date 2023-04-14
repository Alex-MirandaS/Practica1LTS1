<?php

include("DataBase.php");
$bpoints = trim($_POST['bpoints']);
$consult = "UPDATE Puntajes SET puntaje= $bpoints WHERE id = (SELECT MAX(id) FROM Puntajes)";
$result = mysqli_query($conex, $consult);
header("Location: http://localhost/connection/PRACTICA%201/Programa/HTML/Login.php"); 
exit(); 

?>