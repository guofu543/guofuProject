let imgArr = ["images/yzm1.jpg", "images/yzm2.jpg", "images/yzm3.jpg", "images/yzm4.jpg", "images/yzm5.jpg"];
let indexArr = ["7364", "vwo7", "eyud", "6m44", "bcsm"];
let index = -1;
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
    //随机验证码
    getCode()
    $(".codeImg").click(function () {
        getCode();
    })
    $("#yzm").click(function(){
        $("#btnLogin").prev().html("");
        $("#username").css("border-color", "#e0e0e0")
    })

    function getCode() {
        index = parseInt(Math.random() * indexArr.length);
        $(".codeImg").attr("src", imgArr[index]);
    }

    function checkLogin() {
        if ($("#yzm").val() != indexArr[index]) {
            $("#yzm").val("");
            $("#btnLogin").prev().html("！验证码错误");
            $("#btnLogin").prev().css("color", "#ff6700");
            $("#btnLogin").prev().css("font-size", "12px");
        } else {
            $.post(
                "php/login.php",
                {
                    "username": $("#username").val(),
                    "userpass": $("#userpass").val()
                },
                function (data) {
                    if (data == "success") {
                        addCookie("username", $("#username").val(), 7);
                        setTimeout(() => {
                            location.href = "index.html";
                        }, 1500);
                    } else if (data == "fail") {
                        getCode()
                        $("#btnLogin").prev().html("！用户名或密码不正确");
                        $("#btnLogin").prev().css("color", "#ff6700");
                        $("#btnLogin").prev().css("font-size", "12px");
                        $("#username").css("border-color", "#ff6700");
                    } else {
                        getCode()
                        $("#btnLogin").prev().html("！服务器出错");
                        $("#btnLogin").prev().css("color", "#ff6700");
                        $("#btnLogin").prev().css("font-size", "12px");
                    }
                }
            )
        }
    }
})