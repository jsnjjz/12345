define('modules/js/main', function(require, exports, module) {

  //index
  'use strict';
  
  var home = {
  	init: function init(num) {
  		require(['modules/js/jquery'], function ($) {
  			$(document).ready(function () {
  				var i = 0;
  				var timer = null;
  			});
  		});
  	}
  };
  
  //guide_page
  var index = {
  	init: function init(num) {
  		require(['modules/js/jquery',"modules/js/swiper"], function ($, swiper) {
  			$(document).ready(function () {
  				var mySwiper = new Swiper('.swiper-container', {
  					pagination: '.swiper-pagination'
  				});
  			});
  		});
  	}
  };
  
  exports.home = home;
  exports.index = index;

});
