//jQuery鼠标悬停文字渐隐渐现动画效果

$(function(){
	$(".user_sec_w ul li .rsp").hide();
	$(".user_sec_w ul li .text").hide();
	$(".user_sec_w ul li").hover(function(){
		$(".user_sec_w ul li .text").show();
		$(this).find(".rsp").stop().fadeTo(500,0.8)
		$(this).find(".text").stop().animate({left:'0'}, {duration: 500})
	},function(){
		$(this).find(".rsp").stop().fadeTo(500,0)
		$(this).find(".text").stop().animate({left:'318'}, {duration: "fast"})
		$(this).find(".text").animate({left:'-318'}, {duration: 0})
	});
});
