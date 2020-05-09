<?php
    header("content-type:text/html;charset=utf-8");

    $name = $_POST["username"];
    $pass = $_POST["userpass"];

    $conn = mysqli_connect("localhost","root","214216","myproject");

    $result = mysqli_query($conn,"insert into user(username,userpass) value('{$name}','{$pass}')");

    mysqli_close($conn);

    if($result){
        echo "1";
    }else{
        echo "0";
    }
?>