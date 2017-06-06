$(document).ready(function(){
	var slideMenu = false;
	var slideForm = false;
	if ( $(window).width() >= 320 &  $(window).width() < 479) {
		$(".header__menu-button_icon").click(function(e) {
			e.preventDefault(e);
			if(slideMenu) {
				$(this).removeClass('open');
		        $(".object__menu-slide-box").animate({left: '161vw'}, 600);
		        $(".object__contact-form").animate({left: '-100vw'}, 600);
		        $(".object__contact-form_logo").toggleClass('coverup');
		        $(".header__menu-button_icon").removeClass('fixed');
		        slideForm = false;
		        slideMenu = false;
		    } else {
		    	$(this).toggleClass('open');
		        $(".object__menu-slide-box").animate({left: '0'}, 600);
		        slideMenu = true;
		    }
		});
		$( ".object__contact-form_activator" ).click(function(e) {
			e.preventDefault();
	    	$(".object__contact-form").animate({left: '0vw'}, 600);
	    	$(".object__contact-form_logo").removeClass('coverup');
	    	$(".header__menu-button_icon").toggleClass('fixed');
	        slideForm = true;
		});
	} else if ( $(window).width() > 375 && $(window).width() < 414) {
		$(".header__menu-button_icon").click(function(e) {
			e.preventDefault();
			if(slideMenu) {
				$(this).removeClass('open');
		        $(".object__menu-slide-box").animate({left: '161vw'}, 600);
		        $(".object__contact-form").animate({left: '-100vw'}, 600);
		        $(".object__contact-form_logo").toggleClass('coverup');
		        $(".header__menu-button_icon").removeClass('fixed');
		        slideForm = false;
		        slideMenu = false;
		    } else {
		    	$(this).toggleClass('open');
		        $(".object__menu-slide-box").animate({left: '0'}, 600);
		        slideMenu = true;
		    }
		});
		$( ".object__contact-form_activator" ).click(function(e) {
			e.preventDefault();
	    	$(".object__contact-form").animate({left: '0vw'}, 600);
	    	$(".object__contact-form_logo").removeClass('coverup');
	    	$(".header__menu-button_icon").toggleClass('fixed');
	        slideForm = true;
		});
	} else if ( $(window).width() > 1200) {      
		$(".header__menu-button_icon").click(function(e) {
			e.preventDefault();
			if(slideMenu) {
				$(this).removeClass('open');
		        $(".face-page__title, .object__background-image, .footer__contacts").removeClass('open');
		        $(".logo-dark, .fb-dark, .vk-dark").toggleClass('coverup');
		        $(".logo, .fb, .vk").removeClass('coverup');
		        $(".header__menu-button_icon").removeClass('fixed');
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
		    	$(".header__menu-button_icon").toggleClass('fixed');
		        slideForm = true;
		    }	
		});
	}
});

