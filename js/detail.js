$(function(){
	var str=""
				var id = location.search.split("=")[1];
				$.get("http://47.104.244.134:8080/goodsbyid.do",{id:id},function(data){
					
					//console.log(data);
					str = `<li>
						<img src="${data.picurl}">
						<p>${data.name}</p>
						<p class="hong">￥${data.price}</p>
						<input type="button" class="addBtn" value="加入购物车">
					</li>
					`
					$(".detail").html(str);
					
					$(".addBtn").click(function(){
						var token = $.cookie("token");
						$.get("http://47.104.244.134:8080/cartsave.do",{
							gid:id,
							token:token
						},function(data){
							if(data.code==0){
								location.href = "cart.html";
							}
						})
					})
				})
				
				
			})