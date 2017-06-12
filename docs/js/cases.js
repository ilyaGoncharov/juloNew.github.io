$(document).ready(function() {
	if ( $(window).width() >= 320 &  $(window).width() < 479) {
		$(".face-page__title_design-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").toggleClass('active');
			$(".development").removeClass('open');
			$(".design").toggleClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 1500);
		});
		$(".face-page__title_marketing-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").toggleClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").removeClass('open');
			$(".design").removeClass('open');
			$(".marketing").toggleClass('open');
		    $('.wrapper').height($(window).height() + 1000);
		});
		$(".face-page__title_development-button").click(function() {
			$(".face-page__title_development-button").toggleClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").toggleClass('open');
			$(".design").removeClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 2000);			
		});
	}	else if ( $(window).width() > 375 & $(window).width() < 415) {
		$(".face-page__title_design-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").toggleClass('active');
			$(".development").removeClass('open');
			$(".design").toggleClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 1500);
			
		});
		$(".face-page__title_marketing-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").toggleClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").removeClass('open');
			$(".design").removeClass('open');
			$(".marketing").toggleClass('open');
		    $('.wrapper').height($(window).height() + 1000);
		   	
		});
		$(".face-page__title_development-button").click(function() {
			$(".face-page__title_development-button").toggleClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").toggleClass('open');
			$(".design").removeClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 2000);			
		});
	}	else if ( $(window).width() > 416 & $(window).width() < 1024) {
		$(".face-page__title_design-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").toggleClass('active');
			$(".development").removeClass('open');
			$(".design").toggleClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 1500);
			
		});
		$(".face-page__title_marketing-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").toggleClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").removeClass('open');
			$(".design").removeClass('open');
			$(".marketing").toggleClass('open');
		    $('.wrapper').height($(window).height() + 1000);
		   	
		});
		$(".face-page__title_development-button").click(function() {
			$(".face-page__title_development-button").toggleClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").toggleClass('open');
			$(".design").removeClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 2000);
		});
	}	else if ( $(window).width() > 1200) {   
		$(".wrapper").height($(window).height() + 1000);
		$(".face-page__title_design-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").toggleClass('active');
			$(".development").animate({left: '-100vw'}, 400);
			$(".design").animate({left: '0vw'}, 400);
			$(".marketing").animate({left: '100vw'}, 400);
			$('.wrapper').height($(window).height() + 1500);
			
		});
		$(".face-page__title_marketing-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").toggleClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").animate({left: '-200vw'}, 400);
			$(".design").animate({left: '-100vw'}, 400);
			$(".marketing").animate({left: '0vw'}, 400);
		    $('.wrapper').height($(window).height() + 1000);
		   	
		});
		$(".face-page__title_development-button").click(function() {
			$(".face-page__title_development-button").toggleClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").animate({left: '0vw'}, 400);
			$(".design").animate({left: '100vw'}, 400);
			$(".marketing").animate({left: '200vw'}, 400);
			$('.wrapper').height($(window).height() + 2000);
		});
	} 
});

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
