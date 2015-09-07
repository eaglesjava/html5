
//导航右侧咨询
	jQuery.preloadImages = function()
{
	for(var i = 0; i<arguments.length; i++)
	jQuery("<img>").attr("src", arguments[i]);
}
jQuery.preloadImages("/images/tel-icoo.png", "/images/tel-icooo.png", "/images/tel-ico2o.png", "/images/tel-ico2o.png", "/images/tel-ico3o.png", "/images/tel-ico3o.png");

$(function(){
	
	$("#iconbar li a").hover(
		function(){
			var iconName = $(this).children("img").attr("src");
			var origen = iconName.split(".png")[0];
			$(this).children("img").attr({src: "" + origen + "o.png"});
			$(this).css("cursor", "pointer");
			$(this).animate({ width: "160px" }, {queue:false, duration:"normal"} ,1);
			$(this).children("span").animate({opacity: "show"}, 1);
		}, 
		function(){
			var iconName = $(this).children("img").attr("src");
			var origen = iconName.split("o.")[0];
			$(this).children("img").attr({src: "" + origen + ".png"});	
			$(this).animate({ width: "40px" }, {queue:false, duration:"normal"} ,1);
			$(this).children("span").animate({opacity: "hide"}, 1);
		});
	$("#iconbar li").hover(
	function(){
		$(this).addClass("bj");
	},
	function(){
		$(this).removeClass("bj1")
	});
});

//鼠标经过导航上下变换
$(document).ready(function() {	
	$("#menu1 a").each(function() { //For each list item...
		var linkText = $(this).find("div").html(); //Find the text inside of the a tag
	}); 
	
	$("#menu1 a").hover(function() {	//On hover...
		$(this).find("p").stop().animate({ 
			marginTop: "-20" //Find the span tag and move it up 40 pixels
		}, 200);
	} , function() { //On hover out...
		$(this).find("p").stop().animate({
			marginTop: "0" //Move the span back to its original state (0px)
		}, 200);
	});	
});


//右侧边栏客服
$(document).ready(function(){

	$(".side ul li").hover(function(){
		$(this).find(".sidebox").stop().animate({"width":"150px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#C60304"})	
	},function(){
		$(this).find(".sidebox").stop().animate({"width":"50px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#000"})	
	});
	
});

//微信图显示隐藏
$(document).ready(function(e) {
    $("#moquu_wxin").hover(function(){
		$(".weixin").toggle();
		});
});
//回到顶部
function goTop(){
	$('html,body').animate({'scrollTop':0},600);
}


//底部鼠标经过微信二维码显示隐藏
$(document).ready(function(e) {
    $(".footer_icon2").hover(function(){
		$("#erweima").toggle();
		});
});