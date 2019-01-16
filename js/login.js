$(function(){
	$(".zh").click(function(){
		$(this).css({"border":"1px solid #4aafe9"})
	})
	$(".dian").click(function(){
		/*var zheng=/^[a-z0-9_-]{3,16}$/;
		var val=$(".yx").val();
		if(val==zheng){
			
		}else{
			alert("请重新输入用户名");
		}
		var zhengm=/^[a-z0-9_-]{6,18}$/;
		var vall=$(".mm").val();
		if(vall!=zhengm){
			alert("请重新输入密码");
		}*/
					$.post("http://47.104.244.134:8080/userlogin.do",{
						name:$(".yx").val(),
						password:$(".mm").val()
					},function(data){
						if(data.code==0){
							$.cookie("token",data.data.token);
							location.href = "index.html";
						}else{
							alert("用户名或密码错误");
						}
					})
				})
})
