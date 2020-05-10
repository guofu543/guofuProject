$(function () {
    $("#logoSearch").click(function () {
        $("#searchList").css("display", "block")
        $(".logo_r > a").css("display", "none")
        $(".logo_r").find("input").css("borderColor", "rgb(255, 103, 0)")
    })
    $("#logoSearch").blur(function () {
        $("#searchList").css("display", "none")
        $(".logo_r > a").css("display", "block")
        $(".logo_r").find("input").css("borderColor", "#dfdfdf")
    })

    $(".logo_nav li").not("#goods_aside").hover(
        function () {
            // $(".logo_chlidren").eq(1).css("box-shadow","0 2px 2px 2px #85858552")
            $(this).find($(".logo_chlidren")).css({
                "height": "229px",
                // "box-shadow":"0 2px 2px 2px #85858552"
            })
        },
        function () {
            setTimeout(() => {
                // $(".logo_chlidren").eq(1).css("box-shadow","none")
                $(this).find($(".logo_chlidren")).css({
                    "height": "0",
                    // "box-shadow":"none"
                })
            }, 1000)
        }
    )

    $(".logo_nav li").click(function(){
        location.href = "goods.html"
    })
})

function getUserName() {
    let username = getCookie("username");

    if (username) {
        $("#log1").css({
            "display": "inline-block",
            "width": "100px",
            "text-align": "center"
        }).html(username + "<i class='iconfont icon-jiantouxia'><i>");
        $("#log1 .iconfont").css({
            "font-size": "12px",
            "font-weight": "bold",
            "margin-left": "8px"
        })
        $("#log1,#my_center").hover(
            function () {
                $("#log1").css({
                    "background": "#fff",
                    "color": "#ff6700"
                })
                $("#my_center").css({
                    "height": "120px",
                    "padding": "8px 0 8px"
                })
            },
            function () {
                $("#log1").css({
                    "background": "none",
                    "color": "#b1afb4"
                })
                $("#my_center").css({
                    "height": "0",
                    "padding": "0"
                })
            }
        );
        $("#log2").html("消息盒子");
        $("#log3").html("我的订单");
    }
}

function removeUserName() {
    removeCookie("username")
}

$(function () {
    getUserName();

    $("#logout").click(function () {
        removeUserName()
        location.reload();
    })

    $(".children_list").find("li").click(function () {
        location.href = "goods.html"
    })
    $("#51ative").click(function () {
        location.href = "SpecialTopic-51.html"
    })
})

$(function () {
    $(window).scroll(function () {
        if ($("body,html").scrollTop() > 1000) {
            $("#goTop").css("display", "block");
        } else {
            $("#goTop").css("display", "none")
        }
    })

    $("#goTop").click(function (e) {
        e.preventDefault();
        $("body,html").animate({
            scrollTop: 0
        }, 1000)
    })
})
