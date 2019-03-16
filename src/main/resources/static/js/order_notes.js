$(document).ready(function(){
    var orderdetail={};
    orderdetail.code='0';
    orderdetail.msg='成功';
    orderdetail.data={};
    orderdetail.data.orderId='161899085773669363';

    orderdetail.data.buyerName="李四";
    orderdetail.data.buyerPhone="18868877111";
    orderdetail.data.buyerAddress="24";
    orderdetail.data.buyerOpenid="18eu2jwk2kse3r42e2e";
    orderdetail.data.orderAmount="18";
    orderdetail.data.orderStatus="0";
    orderdetail.data.payStatus="0";
    orderdetail.data.createTime="1490177352";
    orderdetail.data.updateTime="1490177352";
    orderdetail.data.orderDetailList=[
        {
            "detailId": "161899085974995851",
            "orderId": "161899085773669363",
            "productId": "157875196362360019",
            "productName": "招牌奶茶",
            "productPrice": 9,
            "productQuantity": 2,
            "productIcon": "http://xxx.com",
            "productImage": "http://xxx.com"
        },
        {
            "detailId": "161899085974995851",
            "orderId": "161899085773669363",
            "productId": "157875196362360019",
            "productName": "珍珠奶茶",
            "productPrice": 19,
            "productQuantity": 6,
            "productIcon": "http://xxx.com",
            "productImage": "http://xxx.com"
        }
    ]
    console.log(orderdetail);
    $("#tableid").text("桌号："+orderdetail.data.buyerAddress);

    var totalfoods=orderdetail.data.orderDetailList.length;
    $("#tfid").text("已点"+totalfoods+"个菜品");
    for(var i=0;i<totalfoods;i++){
        var fhtml='';
        fhtml+='<li class="food_li">                                                    ';
        fhtml+='        	<img src="'+orderdetail.data.orderDetailList[i].productIcon+'" class="food_li_left">';
        fhtml+='            <div class="food_li_middle">                                ';
        fhtml+='            	<div>                                                   ';
        fhtml+='                    <p>'+orderdetail.data.orderDetailList[i].productName+'</p>                                     ';

        fhtml+='                    <p>×'+orderdetail.data.orderDetailList[i].productQuantity+'</p>                                           ';
        fhtml+='                </div>                                                  ';
        fhtml+='                <div class="food_li_price">¥'+orderdetail.data.orderDetailList[i].productPrice+'</div>                    ';
        fhtml+='            </div>                                                      ';
        fhtml+='        </li>                                                           ';
        $(".food_list").append(fhtml);

    }
    $("#famtid").html("￥"+orderdetail.data.orderAmount);

});