
<?php 

include("DataBase.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['nickname']) >= 1) {
	    $nickname = trim($_POST['nickname']);
	    $consult = "INSERT INTO Puntajes(nombre,puntaje) VALUES ('$nickname',0)";
	    $result = mysqli_query($conex,$consult);
        header("Location: http://localhost/connection/PRACTICA%201/Programa/HTML/Game.php"); 
        exit();      
    } 
}

?>