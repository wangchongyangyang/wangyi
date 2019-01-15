$(function(){
	var arr=[' "嘿"',' "好"',' "行"',' "中"',' "爱"',' "球"',' "狗"',' "赢"',' "清"',' "造"'];
	$(".yanzheng").mouseover(function(){
		var arr1=arr[parseInt(Math.random()*10)]+arr[parseInt(Math.random()*10)]+arr[parseInt(Math.random()*10)];
		$(this).val("请依次点击"+arr1);
	}).mouseout(function(){
		$(".yanzheng").val("");
	});
	/*var ipt=$(".zhanghao input").val();
	if(ipt!=null) {
			
            $(".cha").show();
}*/
	/*if($(".zhanghao input").val()!=""){
		$(".cha").css({"display":"block"});
	}*/
	/*$(".zhanghao").on("input propertychange",".zhanghao input",function(){
     $(".cha").css({"display":"block"});
})*/
	/*$("#btn").click(function(){
		var oScript = document.createElement("script");
				oScript.src ="http://localhost:8080/login.html";
	})*/
	
	/*$("#btn").click(function(){
		
		window.open("login.html");
	})*/
	 $("#btn").click(function(){

            var str = $(".yx").val();

           	var ret = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

            if(ret.test(str)){

                alert('ok');

            }else{

                alert('wrong');

            }
    }

})

