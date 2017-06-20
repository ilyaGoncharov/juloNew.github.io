$(document).ready(function() {
	if ( $(window).width() >= 320 &  $(window).width() < 479) {
		$(".header").addClass('scrolled');
		/*$(window).scroll(function() {
		    var height = $(window).scrollTop();
		    if (height > 350) {
		    	$(".header").addClass('scroll');
		    }
		    else if (height < 350) {
		    	$(".header").removeClass('scroll');
		    }
		});*/
	}	else if ( $(window).width() > 375 & $(window).width() < 415) {
		$(".header").addClass('scrolled');
		/*$(window).scroll(function() {
		    var height = $(window).scrollTop();
		    if (height > 350) {
		    	$(".header").addClass('scroll');
		    }
		    else if (height < 350) {
		    	$(".header").removeClass('scroll');
		    }
		});*/
	}	else if ( $(window).width() > 416 & $(window).width() < 1199) {
		$(".header").addClass('scrolled');
		/*$(window).scroll(function() {
		    var height = $(window).scrollTop();
		    if (height > 400) {
		    	$(".header").addClass('scroll');
		    }
		    else if (height < 400) {
		    	$(".header").removeClass('scroll');
		    }
		});*/
	}	else if ( $(window).width() > 1200) {   
		$(window).scroll(function() {
		    var height = $(window).scrollTop();
		    if (height > 600) {
		    	$(".header").addClass('scrolled');
		    }
		    else if (height < 600) {
		    	$(".header").removeClass('scrolled');
		    }
		});
	} 
});

