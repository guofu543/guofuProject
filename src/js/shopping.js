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



})
//购物车功能
function addEvent(data) {
    $(".addBtn").click(function (event) {
        add($(event.target),data);
    })
    $(".reduceBtn").click(function (event) {
        reduce($(event.target),data);
    })
    $(".carNum").change(function (event) {
        carNum($(event.target),data);
    })
    $(".delBtn").click(function (event) {
        del($(event.target),data);
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
}
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
function changeCount(id,count){
    let vipName = getCookie("username");
    $.get("php/updateGoodsCount.php",
        {
            "vipName":vipName,
            "goodsId":id,
            "goodsCount":count
        },
        function(data){
            if(data == "1"){
                console.log("修改成功");
            }else if(data == "0"){
                console.log("修改失败");
            }
        }
    )
}
function add(dom,data) {
    let $num = dom.prev().val();
    let count = parseInt($num);
    count++;
    let trNum = dom.parent().parent().index() - 1;
    let id = data[trNum].goodsId;
    changeCount(id,count);
    dom.prev().val(count);
    totalAll(dom, count);
}

function reduce(dom,data) {
    let $num = dom.next().val();
    let count = parseInt($num);
    count--;
    if (count <= 1) {
        count = 1;
    }
    let trNum = dom.parent().parent().index() - 1;
    let id = data[trNum].goodsId;
    changeCount(id,count);
    dom.next().val(count);
    totalAll(dom, count);
}
function carNum(dom,data) {
    let $num = dom.val();
    let count = parseInt($num);
    if (count <= 1) {
        count = 1;
    }
    let trNum = dom.parent().parent().index() - 1;
    let id = data[trNum].goodsId;
    changeCount(id,count);
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
function del(dom,data) {
    let vipName = getCookie("username");
    let trNum = dom.parent().index() - 1;
    let goodsId = data[trNum].goodsId;
    $.get("php/deleteGoods.php",{"vipName":vipName,"goodsId":goodsId},function(res){
        if(res == "1"){
            location.reload();
            console.log("删除成功");
        }else if(res == "0"){
            alert("删除失败");
        }
    })
    let allMoney = 0;
    $(".total").each(function () {
        allMoney += parseInt($(this).html());
    })
    $(".totalAll").html(allMoney);
}

$(function () {
    let vipName = getCookie("username");
    console.log(vipName)
    $.get("php/getShoppingCart.php", "vipName=" + vipName, function (data) {
        showShoppingCart(data);
        addEvent(data);
    }, "json")
    function showShoppingCart(data) {
        let htmlCart = "";
        data.forEach(item => {
            htmlCart += `
            <tr class="car_body">
                <td><input class="oneChoose" type="checkbox"></td>
                <td><img src="${item.beiyong1}" alt=""><a href="##">${item.goodsName}</a></td>
                <td width="136px">${item.goodsPrice}元</td>
                <td width="151px">
                    <input class="reduceBtn float_left" type="button" value="-">
                    <input class="carNum float_left" type="text" value="${item.goodsCount}">
                    <input class="addBtn float_left" type="button" value="+">
                </td>
                <td class="total" width="136px">${item.goodsPrice*item.goodsCount}元</td>
                <td class="delBtn" width="134px">x</td>
            </tr>
            `;
        })
        $(".car_tab").append(htmlCart);
    }
})