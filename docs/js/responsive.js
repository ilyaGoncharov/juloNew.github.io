$(document).ready(function(){
	var slideMenu = false;
	var slideForm = false;

	if ( $(window).width() > 1200) {      
		$( ".object__contact-form_activator" ).click(function() {
			if(slideForm) {
				$(".object__contact-form").animate({left: '-61vw'}, 600);
				$(".object__contact-form_logo").toggleClass('coverup');
		        slideForm = false;
		    } else {
		    	$(".object__contact-form").animate({left: '0vw'}, 600);
		    	$(".object__contact-form_logo").removeClass('coverup');
		        slideForm = true;
		    }	
		});
		$(".header__menu-button_icon").click(function() {
			if(slideMenu) {
				$(this).removeClass('open');
		        $(".face-page__title, .object__background-image, .footer__contacts").removeClass('open');
		        $(".logo-dark, .fb-dark, .vk-dark, .object__contact-form_logo").toggleClass('coverup');
		        $(".logo, .fb, .vk").removeClass('coverup');
		        $(".object__menu-slide-box").animate({right: '-39vw'}, 600);
		        $(".object__contact-form").animate({left: '-61vw'}, 600);
		        slideForm = false;
		        slideMenu = false;
		    } else {
		    	$(this).toggleClass('open');
		        $(".object__menu-slide-box").animate({right: '0vw'}, 600);
		        $(".face-page__title, .object__background-image, .footer__contacts").toggleClass('open');
		        $(".logo, .fb, .vk").toggleClass('coverup');
		        $(".logo-dark, .fb-dark, .vk-dark").removeClass('coverup');
		        slideMenu = true;
		    }
		});

	} else if ( $(window).width() > 320 ) {
		$( ".object__contact-form_activator" ).click(function() {
			if(slideForm) {
				$(".object__contact-form").animate({left: '-61vw'}, 600);
				$(".object__contact-form_logo").toggleClass('coverup');
		        slideForm = false;
		    } else {
		    	$(".object__contact-form").animate({left: '0vw'}, 600);
		    	$(".object__contact-form_logo").removeClass('coverup');
		        slideForm = true;
		    }	
		});

		$(".header__menu-button_icon").click(function() {
			if(slideMenu) {
				$(this).removeClass('open');
		        $(".face-page__title, .object__background-image, .footer__contacts").removeClass('open');
		        $(".logo-dark, .fb-dark, .vk-dark, .object__contact-form_logo").toggleClass('coverup');
		        $(".logo, .fb, .vk").removeClass('coverup');
		        $(".object__menu-slide-box").animate({right: '-39vw'}, 600);
		        $(".object__contact-form").animate({left: '-61vw'}, 600);
		        slideForm = false;
		        slideMenu = false;
		    } else {
		    	$(this).toggleClass('open');
		        $(".object__menu-slide-box").animate({left: '0'}, 600);
		        $(".face-page__title, .object__background-image, .footer__contacts").toggleClass('open');
		        $(".logo, .fb, .vk").toggleClass('coverup');
		        $(".logo-dark, .fb-dark, .vk-dark").removeClass('coverup');
		        slideMenu = true;
		    }
		});
	}	
});

