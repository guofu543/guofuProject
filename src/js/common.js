$(function () {
    //logo搜索框
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

    //logo商品下滑效果
    $(".logo_nav li").not("#goods_aside,.51active").hover(
        function () {
            $("#navBg").css({
                "height": "229px",
                "box-shadow": "0 3px 4px rgba(0,0,0,.18)"
            })
            $(this).find($(".logo_chlidren")).show()
        },
        function () {
            $("#navBg").css({
                "height": "0",
                "box-shadow": "none"
            })
            $(this).find($(".logo_chlidren")).hide()
        }
    )

    //用户名显示和移除
    let vipName = getCookie("username");
    getUserName(vipName);

    $("#logout").click(function () {
        removeUserName()
        location.reload();
    })

    $(".51active").eq(0).click(function () {
        location.href = "SpecialTopic-51.html"
    })

    //监视滚动回顶部
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

    //商品列表跳转
    $(".banner_aside").find("li").click(function(){
        let goodsIndex = $(this).index();
        location.href = `goodsList.html?goodsType=${goodsIndex}`;
    })

    // 请求商品
    //请求主页购物车的内容{
    $.get("php/getShoppingCart.php", "vipName=" + vipName, function (data) {
        showIndexShopping(data)
    }, "json");

    // 请求logo-nav下滑内容和banner-aside数据
    $.get(`php/getGoodsList.php`, function (data) {
        logoData(data);
        showAsideGoods(data);
    }, "json")
})

//显示用户名
function getUserName(vipName) {
    if (vipName) {
        $("#log1").css({
            "display": "inline-block",
            "width": "100px",
            "text-align": "center"
        }).html(vipName + "<i class='iconfont icon-jiantouxia'><i>");
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

//移除用户名
function removeUserName() {
    removeCookie("username")
}

//显示banner-aside数据
function showAsideGoods(data) {
    for (let i = 0; i < 10; i++) {
        for (let o = 0; o < 3; o++) {
            let htmlStr = "";
            let ord;
            for (let j = 0; j < 3; j++) {
                data.forEach(item => {
                    ord = item.goodsId.charAt(2) - 1;
                    if (ord < 0) {
                        ord = 9;
                    }
                    if (ord == i) {
                        htmlStr += `
                    <li>
                        <h3>
                            <img src="${item.goodsImg}" alt="">
                        </h3>
                        <a href="goods.html?goodsId=${item.goodsId}">${item.goodsName}</a>
                    </li>
                    `
                    }
                })
            }
            htmlUl = `<ul class='children_list'>${htmlStr}<ul>`;
            $(".aside_children").eq(i).append(htmlUl);
        }
    }
}

//显示主页购物车内容
function showIndexShopping(data) {
    let htmlCart = "";
    let totalP = 0;
    let totalC = 0;
    let carHeight = data.length * 80 + 68;
    if (data.length > 0) {
        data.forEach(item => {
            htmlCart += `
            <li>
                <a href="goods.html?goodsId=${item.goodsId}"><img src="${item.goodsImg}" alt=""></a>
                <a href="goods.html?goodsId=${item.goodsId}">${item.goodsName}</a>
                <span>${item.goodsPrice}元×${item.goodsCount}</span>
                <span myid="${item.goodsId}">×</span>
            </li>
            `;
            totalP += item.goodsPrice * item.goodsCount;
            totalC += parseInt(item.goodsCount);
        })
        $(".car_total").css("display", "block");
        $(".car_container").html(htmlCart);
        $(".car_total>span>em").html(totalC)
        $(".car_total>span>span>em").html(totalP);
        $("#my_car .iconfont").css("color", "#fff").attr("class", "iconfont icon-gouwucheman")
        $("#my_car>a").css({
            "background": "#ff6700",
            "color": "#fff"
        })
        $("#my_car>a , .car_container , .car_total").hover(
            function () {
                $("#my_car>a,#my_car .iconfont").css({
                    "background": "#fff",
                    "color": "#ff6700"
                })
                $(".myCar_box").css({
                    "height": carHeight + "px"
                })
                console.log("sss")
            }, function () {
                $("#my_car>a,#my_car .iconfont").css({
                    "background": "#ff6700",
                    "color": "#fff"
                })
                $(".myCar_box").css({
                    "height": "0"
                })
            }
        )
        $("#my_car>a em").html(totalC)
        $("#asideCart").css("display", "block").html(totalC);
        delIndexShopping(data)
    } else {
        htmlCart = `
            <li>
                <p>购物车中还没有商品，赶紧选购把！</p>
            </li>
        `;
        $(".car_total").css("display", "none");
        $(".car_container").html(htmlCart);
        $(".car_container li").css("border-bottom", "0")
        $("#my_car .iconfont").attr("class", "iconfont icon-gouwuchekong")
    }
}

//删除主页购物车内容
function delIndexShopping(data) {
    let vipName = getCookie("username")
    $(".car_container").click(function (event) {
        data.forEach(item => {
            if ($(event.target).attr("myid") == item.goodsId) {
                // $(event.target).parent().remove();
                location.reload();
                $.get("php/deleteGoods.php", {
                    "vipName": vipName,
                    "goodsId": item.goodsId
                }, function (d) {
                    if (d == "1") {
                        console.log("删除成功");
                    } else if (d == "0") {
                        alert("删除失败");
                    }
                })
            }
        })
    })
}

//显示logo-nav下滑内容
function logoData(data) {
    for (let i = 0; i < 7; i++) {
        let htmlStr = "";
        let ord;
        for (let j = 0; j < 3; j++) {
            data.forEach(item => {
                ord = item.goodsId.charAt(2) - 1;
                if (ord == i) {
                    htmlStr += `
                    <dl class="logo_list">
                        <dt>
                            <a href="goods.html?goodsId=${item.goodsId}">
                            <img src="${item.beiyong1}" alt="">
                            </a>
                        </dt>
                        <dd>
                            <span>${item.goodsName}</span>
                            <br>
                            <em>${item.goodsPrice}起</em>
                        </dd>
                    </dl>
                    `
                }
            })
        }
        $(".chlid").eq(i).html(htmlStr);
        let dlLenth = $(".chlid").eq(i).find("dl").length - 1;
        console.log(dlLenth)
        $(".chlid").eq(i).find("dl").eq(dlLenth).find("dt a").css("border","0")
    }
}