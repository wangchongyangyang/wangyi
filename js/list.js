$(function(){
				$.get("http://47.104.244.134:8080/goodsbytid.do",{
					tid:13,
					page:1,
					limit:13
				},function(data){
					var listData = data.data;
					var str = "";
					
					for(var i = 1; i < listData.length; i++){
						str += `<li>
						<div class="bao">爆款</div>
						<a href="detail.html?id=${listData[i].id}">
						<img src="${listData[i].picurl}">
						<p>${listData[i].name}</p>
						<p class="hong">￥${listData[i].price}</p>
						</a>
						</li>`;
					}
					
					$(".list").html(str);
					
					
				})
				
				
				
				
})