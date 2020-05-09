$(function () {
    let $goodsLi = $(".good_List").find("li");
    let $categoryName = $(".category_name")
    $goodsLi.parent().each(function () {
        let $goodsLenth = $(this).find("li").length;
        $(this).find("li").each(function () {
            if (($(this).index() + 1) % 5 == 0) {
                $(this).css("border-right", "none")
            }
            if ($goodsLenth - $(this).index() <= ($goodsLenth % 5)) {
                $(this).css("border-bottom", "none")
            }

            $(this).click(function(){
                location.href = "goods.html"
            })
        })
    })



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