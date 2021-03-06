$(function () {
    $.get(`php/getGoodsList.php`, function (data) {
        showData(data);
        getGoodsType();
    }, "json")

    let $categoryName = $(".category_name")
    $categoryName.click(function () {
        $(this).next().slideToggle(500, function () {
            if ($(this).css("display") == "none") {
                $(this).prev().find("i").removeClass("icon-jiantouxia")
                $(this).prev().find("i").addClass("icon-jiantoushang")
                $(this).prev().find("i").css("color", "#ff6700")
                $(this).prev().find("span").css("border-color", "#ff6700")
                $(this).prev().css("border-bottom", "none")
            } else if ($(this).css("display") == "block") {
                $(this).prev().find("i").removeClass("icon-jiantoushang")
                $(this).prev().find("i").addClass("icon-jiantouxia")
                $(this).prev().find("i").css("color", "#b7b7b7")
                $(this).prev().find("span").css("border-color", "#b7b7b7")
                $(this).prev().css("border-bottom", "1px solid #e0e0e0")
            }
        });
    })

    
})

function showData(data) {
    for (let i = 0; i < 10; i++) {
        let htmlStr = "";
        let ord;
        for (let j = 0; j < 7; j++) {
            data.forEach(item => {
                ord = item.goodsId.charAt(2) - 1;
                if (ord < 0) {
                    ord = 9;
                }
                if (ord == i) {
                    htmlStr += `
                        <li>
                            <a href="goods.html?goodsId=${item.goodsId}">
                                <img src="${item.goodsImg}" alt="">
                            </a>
                            <a href="goods.html?goodsId=${item.goodsId}">${item.goodsName}</a>
                        </li>
                    `
                }
            })
        }
        $(".good_List").eq(i).html(htmlStr);
        checkBorder();
    }
}

function checkBorder() {
    let $goodsLi = $(".good_List").find("li");
    $goodsLi.parent().each(function () {
        let $goodsLenth = $(this).find("li").length;
        $(this).find("li").each(function () {
            if (($(this).index() + 1) % 5 == 0) {
                $(this).css("border-right", "none")
            }
            if ($goodsLenth - $(this).index() <= ($goodsLenth % 5)) {
                $(this).css("border-bottom", "none")
            }
        })
    })
}

function getGoodsType(){
    let goodsType = location.search.split("=")[1];
    if(location.search){
        let boxTop = $(".category_name").eq(goodsType).offset().top;
        $("html,body").animate({
            scrollTop : boxTop
        },1500)
    }
}