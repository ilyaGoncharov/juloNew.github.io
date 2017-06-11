$(document).ready(function(){
	if ( $(window).width() >= 320 &  $(window).width() < 479) {
		$(".face-page__title_design-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").toggleClass('active');
			$(".development").removeClass('open');
			$(".design").toggleClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 1500);
			console.log("design = true");
		});

		$(".face-page__title_marketing-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").toggleClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").removeClass('open');
			$(".design").removeClass('open');
			$(".marketing").toggleClass('open');
		    $('.wrapper').height($(window).height() + 1000);
		   	console.log("mark = true");
		});

		$(".face-page__title_development-button").click(function() {
			$(".face-page__title_development-button").toggleClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").toggleClass('open');
			$(".design").removeClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 2000);
			console.log("dev = true");
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
			console.log("design = true");
		});

		$(".face-page__title_marketing-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").toggleClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").removeClass('open');
			$(".design").removeClass('open');
			$(".marketing").toggleClass('open');
		    $('.wrapper').height($(window).height() + 1000);
		   	console.log("mark = true");
		});

		$(".face-page__title_development-button").click(function() {
			$(".face-page__title_development-button").toggleClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").toggleClass('open');
			$(".design").removeClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 2000);
			console.log("dev = true");
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
			console.log("design = true");
		});

		$(".face-page__title_marketing-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").toggleClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").removeClass('open');
			$(".design").removeClass('open');
			$(".marketing").toggleClass('open');
		    $('.wrapper').height($(window).height() + 1000);
		   	console.log("mark = true");
		});

		$(".face-page__title_development-button").click(function() {
			$(".face-page__title_development-button").toggleClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").toggleClass('open');
			$(".design").removeClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 2000);
			console.log("dev = true");
		});
	}	else if ( $(window).width() > 1200) {    
		$('wrapper').height($(window).height() + 1000);
		console.log("dev = true");
		$(".face-page__title_design-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").toggleClass('active');
			$(".development").animate({left: '-100vw'}, 400);
			$(".design").animate({left: '0vw'}, 400);
			$(".marketing").animate({left: '100vw'}, 400);
			$('.wrapper').height($(window).height() + 1500);
			console.log("design = true");
		});

		$(".face-page__title_marketing-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").toggleClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").animate({left: '-200vw'}, 400);
			$(".design").animate({left: '-100vw'}, 400);
			$(".marketing").animate({left: '0vw'}, 400);
		    $('.wrapper').height($(window).height() + 1000);
		   	console.log("mark = true");
		});

		$(".face-page__title_development-button").click(function() {
			$(".face-page__title_development-button").toggleClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").animate({left: '0vw'}, 400);
			$(".design").animate({left: '100vw'}, 400);
			$(".marketing").animate({left: '200vw'}, 400);
			$('.wrapper').height($(window).height() + 2000);
			console.log("dev = true");
		});
	} 
});
		/*$(".header__menu-button_icon").click(function(e) {
			e.preventDefault();
			if(slideMenu) {
				$(this).removeClass('open');
		        $(".face-page__title, .object__background-image, .footer__contacts").removeClass('open');
		        $(".logo-dark, .fb-dark, .vk-dark").toggleClass('coverup');
		        $(".logo, .fb, .vk").removeClass('coverup');
		        $(".object__menu-slide-box").animate({left: '161vw'}, 600);
		        $(".object__contact-form").animate({left: '-61vw'}, 600);
		        slideForm = false;
		        slideMenu = false;
		    } else {
		    	$(this).toggleClass('open');
		        $(".object__menu-slide-box").animate({left: '61vw'}, 600);
		        $(".face-page__title, .object__background-image, .footer__contacts").toggleClass('open');
		        $(".logo, .fb, .vk").toggleClass('coverup');
		        $(".logo-dark, .fb-dark, .vk-dark").removeClass('coverup');
		        slideMenu = true;
		    }
		});
		$( ".object__contact-form_activator" ).click(function(e) {
			e.preventDefault();
			if(slideForm) {
				$(".object__contact-form").animate({left: '-61vw'}, 600);
		        slideForm = false;
		    } else {
		    	$(".object__contact-form").animate({left: '0vw'}, 600);
		        slideForm = true;
		    }	
		});*/
