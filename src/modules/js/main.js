//index
var index = {
	init: function (num) {
		require(['jquery'],function($){
			$(document).ready(function(){
				var i = 0;
				var timer = null;
				
				
				
			
				
			})
		})
	}
}

//guide_page
var page = {
	init: function (num) {
		require(['jquery',"swiper"],function($,swiper){
			$(document).ready(function (){
				var mySwiper = new Swiper('.swiper-container',{
				pagination : '.swiper-pagination',
				})
			})
		}
	)}
}

exports.index = index;
exports.page = page;
