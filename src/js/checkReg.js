let arr = [0, 0, 0];
$("#regBtn").onclick = function () {
    checkReg();
}

async function checkReg() {
    try {
        let res1 = await ajax({
            method: "get",
            url: "checkUser.php",
            params: `username=${$("#username").value}`
        })
        if (res1 == "0") {
            let sum = 0;
            arr.forEach((item) => {
                return sum += item;
            })
            if (sum == 3) {
                let res2 = await ajax({
                    method: "post",
                    url: "checkReg.php",
                    params: `username=${$("#username").value}&userpass=${$("#userpass").value}`
                })
                if (res2 == "1") {
                    $("#regBtn").previousElementSibling.innerHTML = "注册成功";
                    location.href = "login.html";
                } else {
                    $("#regBtn").previousElementSibling.innerHTML = "注册失败";
                    $("#regBtn").previousElementSibling.style.color = "#ff6700";
                }
            } else {
                $("#regBtn").previousElementSibling.innerHTML = "未正确填写信息"
                $("#regBtn").previousElementSibling.style.color = "#ff6700";
            }
        } else if(res1 == "1") {
            $("#regBtn").previousElementSibling.innerHTML = "用户名已被占用"
            $("#regBtn").previousElementSibling.style.color = "#ff6700";
        }

    } catch (err) {
        if (err == 404) {
            console.log("您请求的页面不存在")
        } else if (err == 500) {
            console.log("服务器出错");
        }
    }
}

$("#username").onblur = function () {
    $("#regBtn").previousElementSibling.innerHTML = "";
    isUser();
}
$("#userpass").onblur = function () {
    $("#regBtn").previousElementSibling.innerHTML = "";
    isPass();
}
$("#userpass").onchange = function () {
    $("#regBtn").previousElementSibling.innerHTML = "";
    isPass();
    $("#userpass2").value = "";
    $("#userpass2").nextElementSibling.innerHTML = ""
    arr[2] = 0;
}
$("#userpass2").onblur = function () {
    $("#regBtn").previousElementSibling.innerHTML = "";
    isPass2();
}


function isUser() {
    let reg = /^[a-zA-Z_]\w{5,15}$/;//6-16位字母数字下划线，不能数字开头
    if (reg.test($("#username").value)) {
        arr[0] = 1;
        $("#username").nextElementSibling.innerHTML = ""
        $("#username").nextElementSibling.style.color = "green"
        $("#username").style.borderColor = "#e8e8e8";
    } else {
        arr[0] = 0;
        $("#username").nextElementSibling.innerHTML = "！用户名格式不正确"
        $("#username").nextElementSibling.style.color = "#ff6700";
        $("#username").style.borderColor = "#ff6700";
    }
}
function isPass() {
    let reg = /^(?!\d+$)\w{5,15}$/;//6-16位字母数字下划线，不能纯数字
    if (reg.test($("#userpass").value)) {
        arr[1] = 1;
        $("#userpass").nextElementSibling.innerHTML = ""
        $("#userpass").nextElementSibling.style.color = "green"
        $("#userpass").style.borderColor = "#e8e8e8";
    } else {
        arr[1] = 0;
        $("#userpass").nextElementSibling.innerHTML = "！密码格式不正确"
        $("#userpass").nextElementSibling.style.color = "#ff6700";
        $("#userpass").style.borderColor = "#ff6700";
    }
}
function isPass2() {
    if ($("#userpass2").value == "") {
        arr[2] = 0;
        $("#userpass2").nextElementSibling.innerHTML = "请输入重复密码"
        $("#userpass2").nextElementSibling.style.color = "#ff6700";
        $("#userpass2").style.borderColor = "#ff6700";
    } else if ($("#userpass").value == $("#userpass2").value) {
        arr[2] = 1;
        $("#userpass2").nextElementSibling.innerHTML = ""
        $("#userpass2").nextElementSibling.style.color = "green"
        $("#userpass2").style.borderColor = "#e8e8e8";
    } else {
        arr[2] = 0;
        $("#userpass2").nextElementSibling.innerHTML = "！密码不一致"
        $("#userpass2").nextElementSibling.style.color = "#ff6700";
        $("#userpass2").style.borderColor = "#ff6700";
    }
}

function $(str) {
    if (str.charAt(0) == "#") {
        return document.getElementById(str.substring(1));
    } else if (str.charAt(0) == ".") {
        return document.getElementsByClassName(str.substring(1))
    } else {
        return document.getElementsByTagName(str);
    }
}