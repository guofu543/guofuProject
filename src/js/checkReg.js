$(function(){
    var arr = [0, 0, 0, 0];
    $("#regBtn").click(function () {
        let sum = 0;
        arr.forEach((item) => {
            return sum += item;
        })
        if(sum == 4){
            checkReg()
        }else{
            console.log(arr)
            $("#regBtn").prev().html("未正确填写信息");
            $("#regBtn").prev().css("color", "#ff6700");
        }
    })

    $("#username").blur(function () {
        $("#regBtn").prev().html("")
        isUser();
        hasUser();
    })
    $("#userpass").blur(function () {
        $("#regBtn").prev().html("")
        isPass();
    })
    $("#userpass").change(function () {
        $("#regBtn").prev().html("")
        isPass();
        $("#userpass2").val("");
        $("#userpass2").next().html("")
        arr[2] = 0;
    })
    $("#userpass2").blur(function () {
        $("#regBtn").prev().html("")
        isPass2();
    })
    


function isUser() {
    let reg = /^[a-zA-Z_]\w{5,15}$/;//6-16位字母数字下划线，不能数字开头
    if (reg.test($("#username").val())) {
        arr[0] = 1;
        $("#username").next().html("");
        $("#username").next().css("color","green")
        $("#username").css("border-color","#e8e8e8")
    } else {
        arr[0] = 0;
        $("#username").next().html("！用户名格式不正确");
        $("#username").next().css("color","#ff6700")
        $("#username").css("border-color","#ff6700")
    }
}
function isPass() {
    let reg = /^(?!\d+$)\w{5,15}$/;//6-16位字母数字下划线，不能纯数字
    if (reg.test($("#userpass").val())) {
        arr[1] = 1;
        $("#userpass").next().html("");
        $("#userpass").next().css("color","green")
        $("#userpass").css("border-color","#e8e8e8")
    } else {
        arr[1] = 0;
        $("#userpass").next().html("！密码格式不正确");
        $("#userpass").next().css("color","#ff6700")
        $("#userpass").css("border-color","#ff6700")
    }
}
function isPass2() {
    if ($("#userpass2").val() == "") {
        arr[2] = 0;
        $("#userpass2").next().html("请输入重复密码");
        $("#userpass2").next().css("color","#ff6700");
        $("#userpass2").css("border-color","#ff6700");
    } else if ($("#userpass").val() == $("#userpass2").val()) {
        arr[2] = 1;
        $("#userpass2").next().html("");
        $("#userpass2").next().css("color","green")
        $("#userpass2").css("border-color","#e8e8e8")
    } else {
        arr[2] = 0;
        $("#userpass2").next().html("密码不一致");
        $("#userpass2").next().css("color","#ff6700");
        $("#userpass2").css("border-color","#ff6700");
    }
}

function hasUser() {
    $.get("checkUser.php", { "username": $("#username").val() }, function (data) {
        if (data == "0") {
            $("#regBtn").prev().html("用户名可用");
            arr[3] = 1;
        } else if (data == "1") {
            $("#regBtn").prev().html("用户名已被占用");
            $("#regBtn").prev().css("color", "#ff6700");
            arr[3] = 0;
        }
    }
    )
}

function checkReg() {
    $.post(
        "addUser.php",
        {
            "username":$("#username").val(),
            "userpass":$("#userpass").val()
        },
        function (data) {
            if (data == "success") {
                $("#regBtn").prev().html("注册成功,3秒后跳转登录页面");
                setTimeout(() => {
                    location.href = "login.html";
                }, 3000);
            } else if (data == "fail") {
                $("#regBtn").prev().html("注册失败");
                $("#regBtn").prev().css("color", "#ff6700");
            } else {
                $("#regBtn").prev().html("服务器出错");
                $("#regBtn").prev().css("color", "#ff6700");
            }
        }
    )
}

})