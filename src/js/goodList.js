$(function () {
    for(let i = 1 ;i < 11 ; i++){
        let id;
        if(i<10){
            id = "00"+i;
        }else{
            id = "0"+i;
        }
        $.get(`getGoodsList.php?typeId=${id}`, function (data) {
            showData(data);
        }, "json")
    }

    function showData(data) {
        let ord = data[0].goodsId.charAt(2) - 1;
        if(ord < 0){
            ord = 9;
        }
        let htmlStr = "";
        for(let i = 0 ; i < 7;i++){
            data.forEach(item =>{
                htmlStr += `
                <li>
                    <a href="goods.html?goodsId=${item.goodsId}">
                        <img src="${item.goodsImg}" alt="">
                    </a>
                    <a href="goods.html?goodsId=${item.goodsId}">${item.goodsName}</a>
                </li>
                `
            })
        }
        $(".good_List").eq(ord).html(htmlStr);
        checkBorder();
    }

    function checkBorder(){
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