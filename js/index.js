$(function(){
	$(".jiantou").mouseover(function(){
		$(".xia").css({"display":"block"});
		$(".shang").css({"display":"none"});
		$(".yin").css({"display":"block"});
	}).mouseout(function(){
		$(".xia").css({"display":"none"});
		$(".shang").css({"display":"block"});
		$(".yin").css({"display":"none"});
	});
	
	$(".xian").mouseover(function(){
		$(this).css({"borderBottom":"1px solid #00aeff","color":"#00aeff"});
		$(".bian").css({"display":"block"})
	}).mouseout(function(){
		$(".xian").css({"border":"0","color":"#b8bcbf"});
		$(".bian").css({"display":"none"})
	});
	$(".shou").mouseover(function(){
		$(".bian").css({"display":"none"})
	});
})