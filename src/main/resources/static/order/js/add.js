$(function () {



	

    $(".minus").click(function(){
        $('.shopcart-list,.up1').show();
    });
	
	//口味选择
    $(".subChose dd").click(function(){
        $(this).addClass("m-active").siblings().removeClass("m-active");
        $(".choseValue").text($(".subChose .m-active").text());
    })
	
	//弹框 - 加
    $(".ad").click(function(){
        var n = parseFloat($(this).prev().text())+1;
        if (n == 0) { return; }
        $(this).prev().text(n);
        var danjia = $(this).next().text();   //获取单价
        var a = $("#totalpriceshow").html();  //获取当前所选总价
		var b = a*1 + danjia*1;
        $("#totalpriceshow").html(b);         //计算当前所选总价
        var nm = $("#totalcountshow").html(); //获取数量
	
        $("#totalcountshow").html(nm*1+1);
    });
	
    //弹框 - 减
    $(".ms").click(function () {
        var n = $(this).next().text();
        if(n>1){
            var num = parseFloat(n) - 1;
            $(this).next().text(num);//减1

            var danjia = $(this).nextAll(".price").text();//获取单价
            var a = $("#totalpriceshow").html();//获取当前所选总价
            var b = (a*3 - danjia*3)/3;
        	$("#totalpriceshow").html(b);//计算当前所选总价

            var nm = $("#totalcountshow").html();//获取数量
            $("#totalcountshow").html(nm * 1 - 1);
        }

        //如果数量小于或等于0则隐藏减号和数量
        if (num <= 0) {
            $(this).next().css("display", "none");
            $(this).css("display", "none");
            jss();//改变按钮样式
            return
        }
    });
	
	//点击遮罩，隐藏商品详情弹框
    $(".up").click(function(){
        $(".subFly").hide();  
    });
	
	//点击加入购物车 - 按钮
	var flag = false;
    $(".foot").click(function () {
        var n = $('.ad').prev().text();
        var num = parseFloat(n) + 1;
        if (num == 0) { return; }
        $('.ad').prev().text(num);
        var danjia = $('.ad').next().text();  //获取单价
        var a = $("#totalpriceshow").html();  //获取当前所选总价
        $("#totalpriceshow").html((a * 1 + danjia * 1).toFixed(2));//计算当前所选总价
        var nm = $("#totalcountshow").html(); //获取数量
        $("#totalcountshow").html(nm*1+1);
        jss();   //改变按钮样式
        $(".subFly").hide();
        var ms = e.text(num-1);
        if(ms!=0){      //判断是否显示减号及数量
            e.css("display","inline-block");
            e.prev().css("display","inline-block")
        }
        var m = $(".subName dd:nth-child(2) p:nth-child(1)").text();    //当前商品名称
        var taste = $(".subChose .m-active").text();
        var acount =n;
        var sum =parseFloat($(".subName dd p:nth-child(2) span:nth-child(2)").text())*acount;
        var price =parseFloat($(".subName dd p:nth-child(2) span:nth-child(2)").text());
		
        var dataIconN = $(this).parent().children(".subName").children("dd").children("p:first-child").attr("data-icon");
		
		//判断购物车里是否有商品，是否有相同规格的商品
		if($(".list-content ul li").length <= 0){
			var addtr = '<li class="food">';
			addtr += '<div><span class="accountName" data-icon="'+dataIconN+'">'+m+'</span><span class="taste">'+taste+'</span></div>';
			addtr += '<div><span>￥</span><span class="accountPrice">'+sum+'</span></div>'	;					
			addtr += '<div class="btn">';
			addtr += '<button class="ms2" style="display: inline-block;"></button>';
			addtr += '<i class="li_acount">'+acount+'</i>';
			addtr += '<button class="ad2"></button>';
			addtr += '<i class="price" style="display: none;">'+price+'</i>';
			addtr += '</div>';						
			addtr += '</li>';						
			$(".list-content ul").append(addtr);
			return;
		}else{          
			$(".list-content ul li").each(function(){
				if ($(this).find("span.accountName").html() == m && $(this).find(".taste").html() == taste) {
					var count = parseInt($(this).find(".li_acount").html());
					count += parseInt(n);
					$(this).find(".li_acount").html(count); //对商品的数量进行重新赋值
					flag = true;
					return false;
				}else {
					flag = false;
				}
			})
		}
		//如果为默认值也就是说里面没有此商品，所以添加此商品。
		if (flag == false) {
			var addtr = '<li class="food">';
			addtr += '<div><span class="accountName" data-icon="'+dataIconN+'">'+m+'</span><span class="taste">'+taste+'</span></div>';
			addtr += '<div><span>￥</span><span class="accountPrice">'+sum+'</span></div>'	;					
			addtr += '<div class="btn">';
			addtr += '<button class="ms2" style="display: inline-block;"></button><i class="li_acount">'+acount+'</i><button class="ad2"></button><i class="price" style="display: none;">'+price+'</i>';
			addtr += '</div>';						
			addtr += '</li>';						
			$(".list-content ul").append(addtr);
		}
		
		/*$(".list-content>ul").append('<li class="food"><div><span class="accountName" data-icon="'+dataIconN+'">'+m+'</span><span class="taste">'+taste+'</span></div><div><span>￥</span><span class="accountPrice">'+sum+'</span></div><div class="btn"><button class="ms2" style="display: inline-block;"></button><i style="display: inline-block;">'+acount+'</i><button class="ad2"></button><i class="price" style="display: none;">'+price+'</i></div></li>');
		var display = $(".shopcart-list.fold-transition").css('display');
		if(display=="block"){
			$("document").click(function(){
				$(".shopcart-list.fold-transition").hide();
			})
		}*/
    });

	//购物车 - 加
	$(document).on('click','.ad2',function(){
		var n = parseInt($(this).prev().text())+1;
		$(this).prev().text(n);    //当前商品数量+1
		e.text(n);    //赋值给商品列表的数量
		var p = parseFloat($(this).next().text());    //隐藏的价格
		$(this).parent().prev().children("span.accountPrice").text((p*n).toFixed(2));  //计算该商品规格的总价值
	   
		$("#totalcountshow").text(parseFloat($("#totalcountshow").text())+1);   //总数量＋1
		$("#totalpriceshow").text(parseFloat($("#totalpriceshow").text())+p);   //总价加上该商品价格
	});
	
	//购物车 - 减
	$('.list-content').on('click','.ms2',function(){
		var a = parseFloat($(this).siblings(".price").text());  //当前商品单价
		var n = parseInt($(this).next().text())-1;  //当前商品数量
		var s = parseFloat($("#totalpriceshow").text());  //总金额
		if(n == 0){
			$(this).parent().parent().remove();
			$(".up1").hide();
			e.css("display","none");
            e.prev().css("display","none")
		}
		$(this).next().text(n);
	    e.text(n);    //赋值给商品列表的数量
		$(this).parent().prev().children("span:nth-child(2)").text(a*n);
		
		$("#totalcountshow").text(parseInt($("#totalcountshow").text())-1);
		$("#totalpriceshow").text(s-a);
		if(parseFloat($("#totalcountshow").text())==0){
			$(".shopcart-list").hide();
		}
	});

    function jss() {
        var m = $("#totalcountshow").html();
        if (m > 0) {
            $(".right").find("a").removeClass("disable");
        } else {
            $(".right").find("a").addClass("disable");
        }
    };
	
    //选项卡
    $(".con>div").hide();
    $(".con>div:eq(0)").show();

    $(".subFly").hide();
    $(".close").click(function(){
        $(".subFly").hide();
    });
    $(".footer>.left").click(function(){
        var content = $(".list-content>ul").html();
        if(content!=""){
            $(".shopcart-list.fold-transition").toggle();
            $(".up1").toggle();
        }
    });

    $(".up1").click(function(){
        $(".up1").hide();
        $(".shopcart-list.fold-transition").hide();
    })
	
	//清空购物车
    $(".empty").click(function(){
        $(".list-content>ul").html("");
        $("#totalcountshow").text("0");
        $("#totalpriceshow").text("0");
        $(".minus").next().text("0");
        $(".minus").hide();
        $(".minus").next().hide();
        $(".shopcart-list").hide();
        $(".up1").hide();
        jss();//改变按钮样式
    });
});
