$(document).ready(function(){
    var url = decodeURI(location.href);
    var result = url.split("?")[1];
    // 在这里写你的代码...
    //模拟后台返回对象
    /**
     *{
    "code": 0,
    "msg": "成功",
    "data": [
        {
            "name": "热榜",
            "type": 1,
            "foods": [
                {
                    "id": "123456",
                    "name": "皮蛋粥",
                    "price": 1.2,
                    "description": "好吃的皮蛋粥",
                    "icon": "http://xxx.com",
                }
            ]
        },
        {
            "name": "好吃的",
            "type": 2,
            "foods": [
                {
                    "id": "123457",
                    "name": "慕斯蛋糕",
                    "price": 10.9,
                    "description": "美味爽口",
                    "icon": "http://xxx.com",
                }
            ]
        }
    ]
}
     *
     */
        //js中声明一个对象，用{}
    var productlist={};
    productlist.code=0;
    productlist.msg='成功';
    productlist.data=[ {
        "name": "热榜",
        "type": 1,
        "foods": [
            {
                "id": "123456",
                "name": "皮蛋粥",
                "price": 1.2,
                "description": "好吃的皮蛋粥",
                "icon": "http://xxx.com",
            },
            {
                "id": "123457",
                "name": "白粥",
                "price": 0.5,
                "description": "好吃的白粥",
                "icon": "http://xxx.com",
            }
        ]
    },
        {
            "name": "好吃的",
            "type": 2,
            "foods": [
                {
                    "id": "123457",
                    "name": "慕斯蛋糕",
                    "price": 10.9,
                    "description": "美味爽口",
                    "icon": "http://xxx.com",
                }
            ]
        }];

    console.log(productlist.code);
    console.log(productlist.msg);
    console.log(productlist.data);
    for(var i=0;i<productlist.data.length;i++){
        var lihtml="<li><span>";
        lihtml+=productlist.data[i].name;
        lihtml+="</span></li>";
        $("#produlid").append(lihtml);
        var divhtml='';
        divhtml+='<div class="right-con" style="display: none;">                                         ';
        divhtml+='            <ul>                                                                       ';
        for(var j=0;j<productlist.data[i].foods.length;j++){


            divhtml+='                <li>                                                                   ';
            divhtml+='                    <div class="menu-img"><img src="'+productlist.data[i].foods[j].icon+'"></div>';
            divhtml+='                    <div class="menu-txt">                                             ';
            divhtml+='                        <h4 data-icon="10">'+productlist.data[i].foods[j].name+'</h4>                               ';
            divhtml+='                        <p class="list1">'+productlist.data[i].foods[j].description+'</p>                                    ';
            divhtml+='                        <p class="list2">                                              ';
            divhtml+='                            <b>￥</b><b>'+productlist.data[i].foods[j].price+'</b>                                       ';
            divhtml+='                        </p>                                                           ';

            divhtml+='                        <div class="btn">                                              ';
            divhtml+='                            <button class="minus"></button>                            ';
            divhtml+='                            <i>0</i>                                                   ';
            divhtml+='                            <button class="add"></button>                              ';
            divhtml+='                            <i class="price">'+productlist.data[i].foods[j].price+'</i>                                  ';
            divhtml+='                        </div>                                                         ';
            divhtml+='                    </div>                                                             ';
            divhtml+='                </li>                                                                  ';
        }
        divhtml+='                                                                                       ';
        divhtml+='            </ul>                                                                      ';
        divhtml+='        </div>                                                                         ';
        $(".con").append(divhtml);
    }
    initaction();




    function initaction(){
        $(".left-menu li").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            var n = $(".left-menu li").index(this);
            $(".left-menu li").index(this);
            $(".con>div").hide();
            $(".con>div:eq("+n+")").show();
        });


        //商品点击增加
        $(".add").click(function(){
            $(".subFly").show();
            var n = $(this).prev().text();
            var num = parseFloat(n);
            if(n==0){num =1}
            $(".ad").prev().text(num);
            e = $(this).prev();

            var parent = $(this).parent();
            var name=parent.parent().children("h4").text();
            var price = parseFloat(parent.prev().children("b:nth-child(2)").text());

            var src = $(this).parent().parent().prev().children()[0].src;

            $(".subName dd p:nth-child(1)").html(name);
            $(".pce").text(price);
            $(".imgPhoto").attr('src',src);
            $(this).siblings(".price").text(price);
            $(".mydd .price").html(price);
            $(".choseValue").text($(".subChose .m-active").text());
            var dataIcon=$(this).parent().parent().children("h4").attr("data-icon");
            $(".subName dd p:first-child").attr("data-icon",dataIcon);
        });
        $("#left li:first-child").addClass("active");
        $(".con div:first-child").show();
        $("#sbmbtn").click(function(){
            var name="堂吃";
            var phone="111111";
            var address=result;
            console.log("result=="+result);
            var openid="222222";
            var items=[];
            $(".list-content ul li").each(function(){
                var count = parseInt($(this).find(".li_acount").html());
                var pname = $(this).find(".accountName").html();
                console.log("***********list-content******");
                console.log(pname);
                console.log(count);
            });
        window.location.href="/sell/order_notes.html";

        });


    }
});