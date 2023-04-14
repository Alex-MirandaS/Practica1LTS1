<?php

$conex = mysqli_connect("localhost","root","","corn_wars");

if ($conex->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>