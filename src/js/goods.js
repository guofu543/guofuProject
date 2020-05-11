//获取商品
$(function () {
    let str = location.search;
    let arr = str.split("=");
    let goodsId = arr[1];
    $.get("getGoodsInfo.php", "goodsId=" + goodsId, function (data) {
        showData(data);
    }, "json");

    function showData(data) {
        console.log(data);
        $(".goodsName-wrap h2").html(data.goodsName);
        $(".goodsName-wrap > a").html(data.goodsName + "变焦版");
        let htmlImg = `
            <img src="${data.beiyong1}" alt="">
            <img src="${data.beiyong2}" alt="">
            <img src="${data.beiyong3}" alt="">
            <img src="${data.beiyong4}" alt="">
            <img src="${data.beiyong5}" alt="">
        `;
        $(".goods_banner").prepend(htmlImg);
        banner();

        let htmlTitle = `
            <h3>${data.goodsName}</h3>
            <p>
                <span>${data.beiyong6}</span>
                <em>${data.beiyong7}</em>
            </p>
            <p>小米自营</p>
            <p>${data.goodsPrice}元</p>
            <p>
                <span>赠完即止</span>
                <em>赠Redmi AirDots 真无线蓝牙耳机 黑色</em>
            </p>
        `;
        $(".goods_title").append(htmlTitle);

        let totalp = parseInt(data.goodsPrice);
        let totalAll = parseInt(totalp + 79);
        let htmlTotal = `
            <ul>
                <li class="clear_fix">
                    <span class="float_left">${data.goodsName} 8GB+128GB 太空灰</span>
                    <em class="float_right">${data.goodsPrice} 元</em>
                </li>
                <li class="clear_fix">
                    <span class="float_left">碎屏保障服务</span>
                    <em class="float_right">79 元<del>159元</del></em>
                </li>
                <li>总计：${totalAll}元</li>
            </ul>
        `;
        $(".goods_total").append(htmlTotal);
    }
})

$(function () {
    //nav 203px
    $(window).scroll(function () {
        if ($("body,html").scrollTop() > 140) {
            $("#goodsName").css({
                "position": "fixed",
                "top": "0"
            })
        } else {
            $("#goodsName").css({
                "position": "relative"
            })
        }
    })
})

//edition
$(function () {
    let $ediLi1 = $(".goods_edition").eq(0).find("li");
    let $ediLi2 = $(".goods_edition").eq(1).find("li");
    let $serviceLi1 = $(".goods_service").eq(0).find("li");
    let $serviceLi2 = $(".goods_service").eq(1).find("li");
    let $serviceLi3 = $(".goods_service").eq(2).find("li");

    function editionChoose($dom) {
        $dom.click(function () {
            $dom.css({
                "color": "#000",
                "border-color": "#e0e0e0"
            })
            $(this).css({
                "color": "#ff6700",
                "border-color": "#ff6700"
            })
        })
    }

    function serviceChoose($dom) {
        $dom.click(function () {
            $dom.css("border-color", "#e0e0e0");
            $dom.find("em img").css("display", "none")
            $dom.find("em").css({
                "border-color": "#bbbbbb",
                "background": "#fff"
            });
            $dom.find("div").find("span").css("color", "#000")
            $(this).css("border-color", "#ff6700");
            $(this).find("em img").css("display", "block");
            $(this).find("em").css({
                "border-color": "#ff6700",
                "background": "#ff6700"
            });
            $(this).find("div").find("span").css("color", "#ff6700")
        })
    }

    editionChoose($ediLi1);
    editionChoose($ediLi2);

    serviceChoose($serviceLi1)
    serviceChoose($serviceLi2)
    serviceChoose($serviceLi3)

})

//banner
function banner(){
    let ord = 0;
    let t = true;
    let myTimer;
    let $img = $(".goods_banner img");
    let $imgSrc = $img.eq(0).attr("src");
    fdj($imgSrc);
    let $li = $(".goods_banner>ul>li")

    function autoPlay() {
        myTimer = setInterval(() => {
            goImg(ord + 1)
        }, 4000);
    }

    function goImg(transOrd) {
        if (t == false || transOrd == ord) {
            return;
        }
        let outOrd = ord;
        ord = transOrd;
        if (ord > $img.length - 1) {
            ord = 0;
        } else if (ord < 0) {
            ord = $img.length - 1;
        }

        t = false;
        $img.eq(outOrd).animate({ "opacity": 0 }, 1000, function () { t = true });
        $img.eq(ord).animate({ "opacity": 1 }, 1000, function () { t = true });
        $li.eq(outOrd).css("background", "#cccccc");
        $li.eq(ord).css("background", "#777777");
        $imgSrc = $img.eq(ord).attr("src");
        fdj($imgSrc);
    }
    function go() {
        goImg(ord + 1);
    }
    function back() {
        goImg(ord - 1);
    }
    function stop() {
        clearInterval(myTimer)
    }

    autoPlay();
    $(".goods_banner").hover(
        function () {
            stop();
        },
        function () {
            autoPlay();
        }
    )
    $(".goods_banner>span").eq(0).click(function () {
        back()
    });
    $(".goods_banner>span").eq(1).click(function () {
        go()
    });
    $li.click(function () {
        goImg($(this).index())
    })
}

//放大镜
function fdj(imgSrc) {
    let bannerBoxLeft = $(".goods_banner").offset().left;
    let bannerBoxTop = $(".goods_banner").offset().top;
    let bannerBoxWidth = $(".goods_banner").width();
    let bannerBoxHeight = $(".goods_banner").height();

    let mirrorWidth = $("#mirrorBox").width();
    let mirrorHeight = $("#mirrorBox").height();

    $(".goods_banner").mousemove(function (event) {
        let left1 = event.pageX - bannerBoxLeft - mirrorWidth / 2;
        let top1 = event.pageY - bannerBoxTop - mirrorHeight / 2;

        //考虑到轮播按钮，width=34px
        if (left1 < 34) {
            left1 = 34;
        } else if (left1 > bannerBoxWidth - mirrorWidth - 34) {
            left1 = bannerBoxWidth - mirrorWidth - 34
        }

        //考虑到豆豆按钮，height=2px
        if (top1 < 2) {
            top1 = 2;
        } else if (top1 > bannerBoxHeight - mirrorHeight - 2) {
            top1 = bannerBoxHeight - mirrorHeight - 2
        }

        $("#mirrorBox").css({
            "left": left1,
            "top": top1
        })
        $("#showBox").css({
            "width": mirrorWidth * 4,
            "height": mirrorHeight * 4,
            "background-image": `url(${imgSrc})`,
            "background-size": `${bannerBoxWidth * 4}px ${bannerBoxHeight * 4}px`,
            "background-position": `${-left1 * 4}px ${-top1 * 4}px`
        })
    })
    $(".goods_banner").mouseover(function () {
        $("#mirrorBox").css("display", "block");
        $("#showBox").css("display", "block");
    })
    $(".goods_banner").mouseout(function () {
        $("#mirrorBox").css("display", "none");
        $("#showBox").css("display", "none");
    })

}




