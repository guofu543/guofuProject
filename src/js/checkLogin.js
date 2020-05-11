$(function () {
    $("#btnLogin").click(function () {
        console.log("点击成功")
        checkLogin();
    })
    $("#username").keyup(function () {
        $("#btnLogin").prev().html("");
        $("#username").css("border-color", "#e0e0e0")
    })
    $("#userpass").keyup(function () {
        $("#btnLogin").prev().html("");
        $("#username").css("border-color", "#e0e0e0")
    })
})

function checkLogin() {
    $.post(
        "login.php",
        {
            "username": $("#username").val(),
            "userpass": $("#userpass").val()
        },
        function (data) {
            if (data == "success") {
                addCookie("username", $("#username").val(), 7);
                setTimeout(() => {
                    location.href = "index.html";
                }, 2000);
            } else if (data == "fail") {
                $("#btnLogin").prev().html("！用户名或密码不正确");
                $("#btnLogin").prev().css("color","#ff6700");
                $("#btnLogin").prev().css("font-size","12px");
                $("#username").css("border-color","#ff6700");
            }else{
                $("#btnLogin").prev().html("！服务器出错");
                $("#btnLogin").prev().css("color","#ff6700");
                $("#btnLogin").prev().css("font-size","12px");
            }
        }
    )
}