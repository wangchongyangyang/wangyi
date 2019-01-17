$(function(){
				$.get("http://47.104.244.134:8080/cartlist.do",{token:$.cookie("token")},function(data){
					//console.log(data);
					var str = "";
					for(var i = 0; i < data.length; i++){
						str += `<li data-id="${data[i].id}" data-gid="${data[i].gid}">
						<input type="checkbox"> 
						<span class="ming">${data[i].goods.name}</span>
						<span class="price">${data[i].goods.price}</span>
						<span class="minusBtn">-</span>
						<span class="count">${data[i].count}</span>
						<span class="plusBtn">+</span>
						<span class="perTotle">${data[i].count*data[i].goods.price}</span>
						<span class="delBtn">删除</span>
						</li>`
					}
					$("#cartList").html(str);
					
					//默认让购物车内所有的商品选中
					$("#cartList input").prop("checked",true);
					
					//计算所有商品的总价
					getTotlePrice();
					
					//点击加减号 更新购物车 更新价格
					
					$(".minusBtn").on("click",function(){
						changePrice(this,-1);
						
					})
					$(".plusBtn").on("click",function(){
						changePrice(this,1);
						
					})
					//点击复选框 更新总价
					$("input").on("click",function(){
						getTotlePrice();
					})
				})
				
				
				function getTotlePrice(){
					var sum = 0;
					$("input:checked").siblings(".perTotle").each(function(){
						sum += parseInt($(this).html());
					});
					$("#totalPrice").html(sum);
				}
				
				function changePrice(_this,num1){
					//点击加号
						if(num1==1){
							var num = $(_this).prev().html();
							$(_this).prev().html(++num);
						}
						//点击减号
						if(num1==-1){
							var num = $(_this).next().html();
							$(_this).next().html(--num);
						}
						//更新每一行的总价
						var price = $(_this).parent().find(".price").html()*num;
						$(_this).parent().find(".perTotle").html(price)
						//计算所有商品的总价
						getTotlePrice();
						
						//更新购物车
						$.get("http://47.104.244.134:8080/cartupdate.do",{
							id:$(_this).parent().attr("data-id"),
							gid:$(_this).parent().attr("data-gid"),
							token:$.cookie("token"),
							num:num1
						})
				}
				
				
				
				
				
			})