window.onload = function(){
    $("#btnLogin").onclick = function () {
        checkLogin();
    }
    $("#username").oninput = function () {
        $("#btnLogin").previousElementSibling.innerHTML = ""
        $("#username").style.borderColor = "#e0e0e0"
    }
    $("#userpass").oninput = function () {
        $("#btnLogin").previousElementSibling.innerHTML = ""
        $("#username").style.borderColor = "#e0e0e0"
    }
}
async function checkLogin() {
    try {
        let res = await ajax({
            method: "post",
            url: "checkLogin.php",
            params: `username=${$("#username").value}&userpass=${$("#userpass").value}`
        });

        if (res == "1") {
            addCookie("username",$("#username").value,7);
            location.href = "index.html";
            // $("#btnLogin").previousElementSibling.innerHTML = "登录成功咯";
        } else if (res == "0") {
            $("#btnLogin").previousElementSibling.innerHTML = "！用户名或密码不正确";
            $("#btnLogin").previousElementSibling.style.color = "#ff6700";
            $("#btnLogin").previousElementSibling.style.fontSize = "12px";
            $("#username").style.borderColor = "#ff6700";
        };
    } catch (err) {
        if (err == 404) {
            console.log("您请求的页面不存在")
        } else if (err == 500) {
            console.log("服务器出错")
        }
    }
}

function $(str) {
    if (str.charAt(0) == "#") {
        return document.getElementById(str.substring(1));
    } else if (str.charAt(0) == ".") {
        return document.getElementsByClassName(str.substring(1));
    } else {
        return document.getElementsByTagName(str);
    }
}