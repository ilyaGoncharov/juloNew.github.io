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
	        slideForm = true;
		});
	} else if ( $(window).width() > 375 & $(window).width() < 415) {
		$(".header__menu-button_icon").click(function(e) {
			e.preventDefault();
			if(slideMenu) {
				$(this).removeClass('open');
		        $(".object__menu-slide-box").animate({left: '161vw'}, 600);
		        $(".object__contact-form").animate({left: '-100vw'}, 600);
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
	        slideForm = true;
		});
	} else if ( $(window).width() > 416 & $(window).width() < 1024) {
		$(".header__menu-button_icon").click(function(e) {
			e.preventDefault();
			if(slideMenu) {
				$(this).removeClass('open');
		        $(".object__menu-slide-box").animate({left: '161vw'}, 600);
		        $(".object__contact-form").animate({left: '-100vw'}, 600);
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
	        slideForm = true;
		});
	} else if ( $(window).width() > 1200) {      
		$(".header__menu-button_icon").click(function(e) {
			e.preventDefault();
			if(slideMenu) {
				$(this).removeClass('open');
		        $(".face-page__title, .object__background-image, .footer__contacts, .face-page__title p:nth-child(even), .cases-body__block-textblock, .cases-body__block-textblock-img, .footer, .footer__slogan h1, .team__text-block, .team__photo-block-element_img, .team__photo-block, .header.scroll").removeClass('open');
		        $(".face-page__title_cases-menu.fixed").removeClass('open');
		        $(".logo-dark, .fb-dark, .vk-dark").toggleClass('coverup');
		        $(".logo, .fb, .vk").removeClass('coverup');
		        $(".object__menu-slide-box").animate({left: '161vw'}, 600);
		        $(".object__contact-form").animate({left: '-61vw'}, 600);
		        slideForm = false;
		        slideMenu = false;
		    } else {
		    	$(this).toggleClass('open');
		        $(".object__menu-slide-box").animate({left: '61vw'}, 600);
		        $(".face-page__title, .object__background-image, .footer__contacts, .face-page__title p:nth-child(even), .cases-body__block-textblock, .cases-body__block-textblock-img, .footer, .footer__slogan h1, .team__text-block, .team__photo-block-element_img, .team__photo-block, .header.scroll").toggleClass('open');
		        $(".face-page__title_cases-menu.fixed").addClass('open');
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
		});
	}
});



