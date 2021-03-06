$(function () {

    // banner
    let ord = 0;
    let $imgs = $("#banner_box img");
    let $dou = $("#banner_o li");
    let myTimer;
    let t = true;

    function autoPlay() {
        myTimer = setInterval(() => {
            goImg(ord + 1);
        }, 4000);
    }

    function goImg(transOrd) {
        if (t == false || transOrd == ord) {
            return;
        }
        let outOrd = ord;
        ord = transOrd;
        if (ord > $imgs.length - 1) {
            ord = 0;
        } else if (ord < 0) {
            ord = $imgs.length - 1;
        }
        t = false;
        $imgs.eq(outOrd).animate({ "opacity": "0" }, 1000, function () { t = true });
        $imgs.eq(ord).animate({ "opacity": "1" }, 1000, function () { t = true });
        $dou.eq(outOrd).css({ "border": "2px solid #aaaaaa", "background": "#7e7d7d" })
        $dou.eq(ord).css({ "border": "2px solid ##7e7d7d", "background": "rgba(255, 255, 255, 0.746)" })
    }
    function forward() {
        goImg(ord + 1)
    }

    function back() {
        goImg(ord - 1)
    }

    function stopPlay() {
        clearInterval(myTimer)
    }

    autoPlay();

    $(".banner-wrap").hover(
        function () {
            stopPlay();
        },
        function () {
            autoPlay();
        }
    )

    $("#btn_l").click(function () {
        back();
    })
    $("#btn_r").click(function () {
        forward();
    })
    $dou.click(function () {
        goImg($(this).index())
    })


    //shangou-lunbo
    let checkBtnr = true;
    let checkBtnl = false;
    let $leftBanner = 0;
    $("#shangou_r").click(function (event) {
        event && event.preventDefault();
        if (checkBtnr == false) {
            return;
        }

        $leftBanner -= 992;
        $(".lunbo_box").animate({
            "left": $leftBanner + "px"
        }, 800, () => {
            checkBtnl = true;
            $("#shangou_l").css({
                "color": "#b1b2b7",
                "cursor": "pointer"
            }).hover(
                function () {
                    $("#shangou_r").css("color", "rgb(255, 103, 0)")
                },
                function () {
                    $("#shangou_r").css("color", "#b1b2b7")
                }
            )
            if ($(".lunbo_box").css("left") == "-1984px") {
                console.log("rrr")
                $("#shangou_r").css({
                    "color": "#e0e0e0",
                    "cursor": "default"
                })
                checkBtnr = false;
            }
        })
    });

    $("#shangou_l").click(function (event) {
        event && event.preventDefault();
        if (checkBtnl == false) {
            return;
        }

        $leftBanner += 992;
        $(".lunbo_box").animate({
            "left": $leftBanner + "px"
        }, 800, () => {
            checkBtnr = true;
            $("#shangou_r").css({
                "color": "#b1b2b7",
                "cursor": "pointer"
            }).hover(
                function () {
                    $(this).css("color", "rgb(255, 103, 0)")
                },
                function () {
                    $(this).css("color", "#b1b2b7")
                }
            )
            if ($(".lunbo_box").css("left") == "0px") {
                console.log("lll")
                $(this).css({
                    "color": "#e0e0e0",
                    "cursor": "default"
                })
                checkBtnl = false;

            }
        })
    })

    $(".showGoddsList").click(function () {
        location.href = "goodsList.html"
    })

    //shangou-daojishi
    function countDown() {
        let date = new Date();
        let nowH = date.getHours();
        let nowM = date.getMinutes();
        let nowS = date.getSeconds();
        var tEndH;
        var tEndM;
        var tEndS;

        if (nowH < 9) {
            $(".time_box p span").html("09");
            tEndH = 8 - nowH;
            tEndM = 59 - nowM;
            tEndS = 59 - nowS;
        } else if (nowH < 14) {
            $(".time_box p span").html("14");
            tEndH = 13 - nowH;
            tEndM = 59 - nowM;
            tEndS = 59 - nowS;
        } else if (nowH < 20) {
            $(".time_box p span").html("20");
            tEndH = 19 - nowH;
            tEndM = 59 - nowM;
            tEndS = 59 - nowS;
        } else {
            $(".time_box p span").html("00");
            tEndH = 23 - nowH;
            tEndM = 59 - nowM;
            tEndS = 59 - nowS;
        }



        tEndH = checkTime(tEndH);
        tEndM = checkTime(tEndM);
        tEndS = checkTime(tEndS);
        $(".time span").eq(0).html(tEndH);
        $(".time span").eq(1).html(tEndM);
        $(".time span").eq(2).html(tEndS);

        setTimeout(countDown, 1000);
    }
    countDown();

    function checkTime(t) {
        if (t < 10) {
            t = "0" + t;
        };
        return t;
    }

    $(".showHot span").mouseover(function () {
        $(".showHot span").css({
            "color": "#000",
            "border-bottom": "none"
        })
        $(this).css({
            "color": "#ff7900",
            "border-bottom": "2px solid #ff7900"
        })
    })
})

//获取商品
$(function () {
    $.get("php/getGoodsList.php?typeId=001", function (data) {
        showData(data);
    }, "json");

    $.get("php/getGoodsList.php?typeId=002",function(data){
        showData(data);
    },"json")

    $.get("php/getGoodsList.php?typeId=004",function(data){
        showData(data);
    },"json")

    function showData(data) {
        // console.log(data)
        let id = data[0].goodsId.charAt(2) - 1;
        let ord;
        if(id == "0"){
            ord = 0;
        }else if(id == "1" || id == "3"){
            ord = 1;
        }
        let htmlStr = "";
        for(let i = 0; i < 2 ; i++){
            data.forEach(item =>{
                htmlStr += `
                <li>
                    <a href="goods.html?goodsId=${item.goodsId}">
                        <h2>
                            <img src="${item.goodsImg}" alt="">
                        </h2>
                        <h4>${item.goodsName}</h4>
                        <p>${item.goodsDesc}</p>
                        <span>${item.goodsPrice}元</span>
                    </a>
                </li>
                `
            })
        }
        $(".shopping_minBox").eq(ord).append(htmlStr);
        $(".shopping_minBox").eq(ord).find("a").eq(3).css("margin","0");
        $(".shopping_minBox").eq(ord).find("a").eq(7).css("margin","0");
    }

})