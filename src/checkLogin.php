<?php
    header("content-type:text/html;charset=utf-8");

    $name = $_POST["username"];
    $pass = $_POST["userpass"];

    $conn = mysqli_connect("localhost","root","214216","myproject");

    $result = mysqli_query($conn,"select * from user where username='{$name}' and userpass='{$pass}'");

    mysqli_close($conn);

    $arr = mysqli_fetch_all($result,MYSQLI_ASSOC);

    if(count($arr) == 1){
        echo "1";
    }else{
        echo "0";
    }
?>