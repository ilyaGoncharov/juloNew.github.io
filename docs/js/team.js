$(document).ready(function() {
	if ( $(window).width() >= 320 &  $(window).width() < 479) {
	}	else if ( $(window).width() > 375 & $(window).width() < 415) {
		$(window).scroll(function() {
		    var height = $(window).scrollTop();
		    if (height > 600) {
		    	$(".face-page__title_cases-menu").addClass('fixed');
		    	$(".header").addClass('scroll');
		    }
		    else if (height < 600) {
		    	$(".face-page__title_cases-menu").removeClass('fixed');
		    	$(".header").removeClass('scroll');
		    }
		});
	}	else if ( $(window).width() > 416 & $(window).width() < 1024) {
		$(window).scroll(function() {
		    var height = $(window).scrollTop();
		    if (height > 600) {
		    	$(".face-page__title_cases-menu").addClass('fixed');
		    	$(".header").addClass('scroll');
		    }
		    else if (height < 600) {
		    	$(".face-page__title_cases-menu").removeClass('fixed');
		    	$(".header").removeClass('scroll');
		    }
		});
	}	else if ( $(window).width() > 1200) {   
		$(window).scroll(function() {
		    var height = $(window).scrollTop();
		    if (height > 600) {
		    	$(".face-page__title_cases-menu").addClass('fixed');
		    	$(".header").addClass('scroll');
		    }
		    else if (height < 600) {
		    	$(".face-page__title_cases-menu").removeClass('fixed');
		    	$(".header").removeClass('scroll');
		    }
		});
	} 
});

