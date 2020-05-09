<?php
    header("content-type:text/html;charset=utf-8");

    $name = $_GET["username"];

    $conn = mysqli_connect("localhost","root","214216","myproject");

    $result = mysqli_query($conn,"select username from user where username='{$name}'");

    mysqli_close($conn);

    $arr = mysqli_fetch_all($result,MYSQLI_ASSOC);

    if(count($arr) == 1){
        echo "1";
    }else{
        echo "0";
    }
?>