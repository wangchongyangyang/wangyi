"use strict";$(function(){function s(){var t=0;$("input:checked").siblings(".perTotle").each(function(){t+=parseInt($(this).html())}),$("#totalPrice").html(t)}function i(t,n){if(1==n){var a=$(t).prev().html();$(t).prev().html(++a)}if(-1==n){a=$(t).next().html();$(t).next().html(--a)}var i=$(t).parent().find(".price").html()*a;$(t).parent().find(".perTotle").html(i),s(),$.get("http://47.104.244.134:8080/cartupdate.do",{id:$(t).parent().attr("data-id"),gid:$(t).parent().attr("data-gid"),token:$.cookie("token"),num:n})}$.get("http://47.104.244.134:8080/cartlist.do",{token:$.cookie("token")},function(t){for(var n="",a=0;a<t.length;a++)n+='<li data-id="'+t[a].id+'" data-gid="'+t[a].gid+'">\n\t\t\t\t\t\t<input type="checkbox"> \n\t\t\t\t\t\t<span class="ming">'+t[a].goods.name+'</span>\n\t\t\t\t\t\t<span class="price">'+t[a].goods.price+'</span>\n\t\t\t\t\t\t<span class="minusBtn">-</span>\n\t\t\t\t\t\t<span class="count">'+t[a].count+'</span>\n\t\t\t\t\t\t<span class="plusBtn">+</span>\n\t\t\t\t\t\t<span class="perTotle">'+t[a].count*t[a].goods.price+'</span>\n\t\t\t\t\t\t<span class="delBtn">删除</span>\n\t\t\t\t\t\t</li>';$("#cartList").html(n),$("#cartList input").prop("checked",!0),s(),$(".minusBtn").on("click",function(){i(this,-1)}),$(".plusBtn").on("click",function(){i(this,1)}),$("input").on("click",function(){s()})})});