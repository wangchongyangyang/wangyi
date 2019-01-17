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
	
	$(".ju").mouseover(function(){
		
		$(".bian").css({"display":"block"})
	}).mouseout(function(){
		$(".bian").css({"display":"none"})
	});
	
	
	$(".shou").mouseover(function(){
		$(".bian").css({"display":"none"})
	});
	
	
	
			var aLi=$(".banner1");
			var len = $(".banner1").length;
			
			//角标
			var aNums = $(".xiabiao").children();
			aNums.eq(0).addClass("hover");
			
			var i = 0;
			var timer = setInterval(function(){
				move();
			},3000);
			
			var aBtns =$(".jt").children();
			aLi.eq(0).css({"opacity":"1"});
			aBtns.eq(0).click(function(){
				i-=2;
				move();
			});
			
			aBtns.eq(1).click(function(){
				move();
			});
			
			function move(){
				i++;
				for(var j = 0; j < len; j++){
					aLi.eq(j).css({"opacity":"0"});
				}
				if(i==len){
					i = 0;
				}
				if(i==-1){
					i = len-1;
				}
				
				for(var j = 0; j < aNums.length; j++){
					aNums.eq(j).removeClass("hover");
				}
				aNums.eq(i).addClass("hover");
				
				
				aLi.eq(i).css({"opacity":"1"});
			}
			
			$(".banner").mouseover(function(){
				clearInterval(timer);
			}).mouseout(function(){
				timer = setInterval(move,3000);
			});
			
			//鼠标移入角标 切换图片
			
			for(let k = 0; k < aNums.length; k++){
				aNums.eq(k).mouseover(function(){
					i = k - 1;
					move();
				});
			}
			
			
			
				
				
				window.onscroll = function(){
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop >=30){
					$("#hui").css({"display":"block"});
				}else{
					$("#hui").css({"display":"none"});
				}
			}
			var timer1 = null;
			$("#hui").click(function(){
				clearInterval(timer1);
				
				timer1 = setInterval(function(){
					var iCur = document.documentElement.scrollTop || document.body.scrollTop;
					var iSpeed = -iCur/4;
					iSpeed = Math.floor(iSpeed);
					
					document.documentElement.scrollTop = document.body.scrollTop = iCur + iSpeed;
					
					if(iCur == 0){
						clearInterval(timer1);
					}
					
				},30);
				
			});
			
			$(".home-game-item").mouseover(function(){
				$(this).children("span").css({"display":"block","border":"1px solid #00aeff"});
			}).mouseout(function(){
				$(this).children("span").css({"display":"none"});
			})
			
			
			$(".left-main").mousemove(function(){
				$(this).children(".left").stop().animate({"lineHeight":"350px"},100);
				$(this).children(".left").css({"display":"block","border":"1px solid #00aeff"});
			}).mouseout(function(){
				$(this).children(".left").stop().animate({"lineHeight":"370px"},100);
				$(this).children(".left").css({"display":"none","border":"0"});
			});
			
			
			
			$(".right-sub").mousemove(function(){
				$(this).children("span").stop().animate({"lineHeight":"160px"},100);
				$(this).children("span").css({"display":"block","border":"1px solid #00aeff"});
			}).mouseout(function(){
				$(this).children("span").stop().animate({"lineHeight":"180px"},100);
				$(this).children("span").css({"display":"none","border":"0"});

			});
			
			
			$(".show").click(function(){
				$.get("http://47.104.244.134:8080/goodsbytid.do",{
					tid:13,
					page:1,
					limit:2
				},function(data){
					var listData = data.data;
					var str = "";
					
					for(var i = 1; i < listData.length; i++){
						
						str+=`<a href="detail.html?id=${listData[i].id}">
					<span class="img-container">
						<span class="hover-enlarge">
							<img src="${listData[i].picurl}">
						</span>
					</span>
					<span class="prod-name">${listData[i].name}</span>
					<span class="prod-price">
						<span class="discount">特价</span> ￥${listData[i].price}
					</span></a>`;
					}
					
					$(".carrousel-item").html(str);
					
					
				})
			})
			
			$("#gou").click(function(){
				location.href="cart.html"
			})
			
			$(".hover-enlarge").mousemove(function(){
				$(this).children("img").stop().animate({"width":"250px","height":"250px"},100);
			}).mouseout(function(){
				$(this).children("img").stop().animate({"width":"200px","height":"200px"},100);
			})
			
	
})
