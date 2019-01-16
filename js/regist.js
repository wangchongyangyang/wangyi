$(function(){
	var arr=[' "嘿"',' "好"',' "行"',' "中"',' "爱"',' "球"',' "狗"',' "赢"',' "清"',' "造"'];
	$(".yanzheng").mouseover(function(){
		var arr1=arr[parseInt(Math.random()*10)]+arr[parseInt(Math.random()*10)]+arr[parseInt(Math.random()*10)];
		$(this).val("请依次点击"+arr1);
	}).mouseout(function(){
		$(".yanzheng").val("");
	});
	
	
	$(".sj").blur(function(){
					var val = $(this).val();
					//http://47.104.244.134:8080/
					
					$.get("http://47.104.244.134:8080/username.do",{username:val},function(data){
						if(data.code==0){
							$(".yin").html("用户名已被占用");
						}else{
							$(".yin").html("");
						}
					})
					
				})
				$(".yx").blur(function(){
					var val = $(this).val();
					//http://47.104.244.134:8080/
					
					$.get("http://47.104.244.134:8080/useremail.do",{email:val},function(data){
						if(data.code==0){
							$(".yinm").html("邮箱已被占用");
						}else{
							$(".yinm").html("");
						}
					})
					
				})
				
				$("#btn").click(function(){
					$.post("http://47.104.244.134:8080/usersave.do",{
						username:$(".sj").val(),
						password:$(".mm").val(),
						email:$(".yx").val(),
						sex:$(".yz").val()
					},function(data){
						
					})
					location.href="login.html";
				})
	 /*$("#btn").click(function(){

            var str = $(".yx").val();

           	var ret = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

            if(ret.test(str)){

                alert('ok');

            }else{

                alert('wrong');

            }
    }*/

})

