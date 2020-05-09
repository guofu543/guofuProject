
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


    //banner
    let $imgSrc = "images/goods/goods1.jpg";
    fdj($imgSrc);
    let ord = 0;
    let t = true;
    let myTimer;
    let $img = $(".goods_banner>img")
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
                "position": "absolute",
                "left": "550px",
                "top": "30px",
                "width": mirrorWidth * 4,
                "height": mirrorHeight * 4,
                "background-image": "url(../"+imgSrc+")",
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
            $dom.find("em").css("background", "#fff");
            $dom.find("em").css("border-color", "#bbbbbb");
            $dom.find("div").find("span").css("color", "#000")
            $(this).css("border-color", "#ff6700");
            $(this).find("em").css("background", "#ff6700");
            $(this).find("em").css("border-color", "#ff6700");
            $(this).find("div").find("span").css("color", "#ff6700")
        })
    }

    editionChoose($ediLi1);
    editionChoose($ediLi2);

    serviceChoose($serviceLi1)
    serviceChoose($serviceLi2)
    serviceChoose($serviceLi3)

})