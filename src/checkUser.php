<?php
    header("content-type:text/html;charset=utf-8");

    $name = $_GET["username"];

    $conn = mysqli_connect("localhost","root","123456","xiaomi");

    $result = mysqli_query($conn,"select username from vip where username='{$name}'");

    mysqli_close($conn);

    $arr = mysqli_fetch_all($result,MYSQLI_ASSOC);

    if(count($arr)>0){
        echo "1";
    }else{
        echo "0";
    }
?>