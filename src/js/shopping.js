$(function () {
    //其它商品效果
    let $a = $("<a href='#'>加入购物车</a>");
    $(".list_box").hover(
        function (event) {
            $a.css({
                "display": "block",
                "width": "120px",
                "height": "30px",
                "line-height": "30px",
                "background": "#fff",
                "border": "1px solid #ff6700",
                "color": "#ff6700",
                "position": "absolute",
                "bottom": "10px",
                "left": "50%",
                "transform": "translate(-50%)",
                "cursor": "pointer",
                "transition": ".5s"
            }).appendTo($(event.currentTarget).find("dd").eq(2))
            $a.hover(
                function () {
                    $a.css({
                        "background": "#ff6700",
                        "color": "#fff"
                    })
                },
                function () {
                    $a.css({
                        "background": "#fff",
                        "color": "#ff6700"
                    })
                }
            )
        },
        function () {
            $a.css("display", "none")
        }
    )



    //购物车功能
    $(".addBtn").click(function (event) {
        add($(event.target));
    })
    $(".reduceBtn").click(function (event) {
        reduce($(event.target));
    })
    $(".carNum").change(function (event) {
        carNum($(event.target));
    })
    $(".delBtn").click(function (event) {
        del($(event.target));
        $(".list_total").find("i").eq(0).html($(".car_body").length)
        choose()
    })
    //全选
    $("#allChoose").click(function () {
        $(".oneChoose").prop("checked", this.checked);
        choose();
        totalAll();
    })
    $(".oneChoose").click(function () {
        choose();
        totalAll();
    })
    $(".list_total").find("i").eq(0).html($(".car_body").length);
})
//购物车增删改查
function choose() {
    let allCheck = true;
    let chooseNum = 0;
    $(".oneChoose").each(function () {
        if (this.checked != true) {
            allCheck = false;
        }
        if (this.checked == true) {
            chooseNum++;
        }
    })
    $("#allChoose").prop("checked", allCheck);
    $(".list_total").find("i").eq(1).html(chooseNum);
}
function add(dom) {
    let $num = dom.prev().val();
    let count = parseInt($num);
    count++;
    dom.prev().val(count);
    totalAll(dom, count);
}

function reduce(dom) {
    let $num = dom.next().val();
    let count = parseInt($num);
    count--;
    if (count <= 1) {
        count = 1;
    }
    dom.next().val(count);
    totalAll(dom, count);
}
function carNum(dom) {
    let $num = dom.val();
    let count = parseInt($num);
    if (count <= 1) {
        count = 1;
    }
    dom.val(count);
    totalAll(dom, count)
}

function totalAll(dom, count) {
    if (dom && count) {
        let $price = parseInt(dom.parent().prev().html());
        let money = $price * count;
        dom.parent().next().html(money + "元");
    }
    let allMoney = 0;
    $(".total").each(function () {
        if ($(this).parent().find(".oneChoose").prop("checked")) {
            allMoney += parseInt($(this).html());
        }
    })
    $(".totalAll").html(allMoney);
}
function del(dom) {
    let $tr = dom.parent();
    $tr.remove();
    let allMoney = 0;
    $(".total").each(function () {
        allMoney += parseInt($(this).html());
    })
    $(".totalAll").html(allMoney);
}
